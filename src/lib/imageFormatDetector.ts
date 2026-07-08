/**
 * Image Format Detector
 * Detects image format based on magic bytes (file signature)
 * Does NOT rely on file extension or Content-Type header
 */

export interface FormatDetectionResult {
  format: 'JPEG' | 'PNG' | 'WebP' | 'GIF' | 'Unknown';
  confidence: 'high' | 'medium' | 'low';
  description: string;
  hexSignature: string;
}

/**
 * Converts a Uint8Array to a hex string for display
 * @param bytes - The byte array to convert
 * @param maxBytes - Maximum number of bytes to include
 */
export function bytesToHex(bytes: Uint8Array, maxBytes: number = 12): string {
  return Array.from(bytes.slice(0, maxBytes))
    .map(b => b.toString(16).toUpperCase().padStart(2, '0'))
    .join(' ');
}

/**
 * Checks if the byte array starts with the given signature
 * @param bytes - The byte array to check
 * @param signature - Array of expected byte values
 */
function matchesSignature(bytes: Uint8Array, signature: number[]): boolean {
  if (bytes.length < signature.length) return false;
  return signature.every((byte, index) => bytes[index] === byte);
}

/**
 * Detects image format from raw binary data using magic bytes
 * 
 * Magic bytes reference:
 * - JPEG: FF D8 FF (Start of Image marker)
 * - PNG:  89 50 4E 47 0D 0A 1A 0A (PNG signature)
 * - GIF:  47 49 46 38 (GIF87a or GIF89a)
 * - WebP: 52 49 46 46 xx xx xx xx 57 45 42 50 (RIFF....WEBP)
 * 
 * @param bytes - Uint8Array containing at least 12 bytes of the file
 * @returns FormatDetectionResult with format info and hex signature
 */
export function detectImageFormat(bytes: Uint8Array): FormatDetectionResult {
  const hexSignature = bytesToHex(bytes, 12);
  
  // JPEG signature: FF D8 FF
  // The third byte FF is followed by marker type (E0, E1, etc.)
  if (matchesSignature(bytes, [0xFF, 0xD8, 0xFF])) {
    return {
      format: 'JPEG',
      confidence: 'high',
      description: 'JPEG image detected via SOI (Start of Image) marker FF D8 FF',
      hexSignature
    };
  }
  
  // PNG signature: 89 50 4E 47 0D 0A 1A 0A
  // This is the complete 8-byte PNG header
  if (matchesSignature(bytes, [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A])) {
    return {
      format: 'PNG',
      confidence: 'high',
      description: 'PNG image detected via signature 89 "PNG" CR LF EOF LF',
      hexSignature
    };
  }
  
  // GIF signature: 47 49 46 38 (GIF8)
  // Followed by 7a (GIF87a) or 9a (GIF89a)
  if (matchesSignature(bytes, [0x47, 0x49, 0x46, 0x38])) {
    const version = bytes[4] === 0x39 ? 'GIF89a' : 'GIF87a';
    return {
      format: 'GIF',
      confidence: 'high',
      description: `GIF image detected via "${version}" signature`,
      hexSignature
    };
  }
  
  // WebP signature: RIFF....WEBP
  // Bytes 0-3: 52 49 46 46 (RIFF)
  // Bytes 4-7: File size (little-endian)
  // Bytes 8-11: 57 45 42 50 (WEBP)
  if (
    matchesSignature(bytes, [0x52, 0x49, 0x46, 0x46]) && // RIFF
    bytes.length >= 12 &&
    bytes[8] === 0x57 &&  // W
    bytes[9] === 0x45 &&  // E
    bytes[10] === 0x42 && // B
    bytes[11] === 0x50    // P
  ) {
    return {
      format: 'WebP',
      confidence: 'high',
      description: 'WebP image detected via RIFF container with WEBP identifier',
      hexSignature
    };
  }
  
  return {
    format: 'Unknown',
    confidence: 'low',
    description: 'Could not identify image format from magic bytes',
    hexSignature
  };
}

/**
 * Extracts the file extension from a URL
 * @param url - The URL to parse
 */
export function getExtensionFromUrl(url: string): string | null {
  try {
    const pathname = new URL(url).pathname;
    const match = pathname.match(/\.([a-zA-Z0-9]+)(?:\?|$)/);
    return match ? match[1].toLowerCase() : null;
  } catch {
    return null;
  }
}

/**
 * Maps detected format to expected extensions
 */
export function getExpectedExtensions(format: FormatDetectionResult['format']): string[] {
  switch (format) {
    case 'JPEG': return ['jpg', 'jpeg', 'jpe', 'jfif'];
    case 'PNG': return ['png'];
    case 'WebP': return ['webp'];
    case 'GIF': return ['gif'];
    default: return [];
  }
}
