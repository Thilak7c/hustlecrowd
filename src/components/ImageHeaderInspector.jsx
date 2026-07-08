import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Copy,
  Check,
  Loader2,
  AlertTriangle,
  Search,
  Zap,
  Info,
} from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

import {
  detectImageFormat,
  getExtensionFromUrl,
  getExpectedExtensions,
} from '../lib/imageFormatDetector';

export function ImageHeaderInspector() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [converting, setConverting] = useState(false);
  const [result, setResult] = useState(null);
  const [conversionResult, setConversionResult] = useState(null);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const canvasRef = useRef(null);

  const inspectImage = useCallback(async () => {
    if (!url.trim()) return;

    setLoading(true);
    setResult(null);
    setConversionResult(null);
    setError(null);

    try {
      const response = await fetch(url, { mode: 'cors', cache: 'no-cache' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const buffer = await response.arrayBuffer();
      if (!buffer.byteLength) {
        throw new Error('The image returned no data.');
      }

      const bytes = new Uint8Array(buffer.slice(0, 12));
      const format = detectImageFormat(bytes);
      const urlExt = getExtensionFromUrl(url);
      const expectedExts = getExpectedExtensions(format.format);

      setResult({
        format,
        urlExtension: urlExt,
        extensionMismatch:
          urlExt &&
          format.format !== 'Unknown' &&
          !expectedExts.includes(urlExt),
        rawBytes: bytes,
        originalUrl: url,
      });
    } catch (err) {
      setError({ message: err.message || 'Inspection failed' });
    } finally {
      setLoading(false);
    }
  }, [url]);

  const convertToJpeg = useCallback(async () => {
    if (!result) return;

    setConverting(true);

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = result.originalUrl;
      });

      const canvas = canvasRef.current;
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      const blob = await new Promise((res) =>
        canvas.toBlob(res, 'image/jpeg', 0.9)
      );

      setConversionResult({ blob });
    } catch {
      setError({ message: 'JPEG conversion failed.' });
    } finally {
      setConverting(false);
    }
  }, [result]);

  const copyHex = () => {
    navigator.clipboard.writeText(result.format.hexSignature);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="min-h-screen bg-[#202124] px-4 pt-32 pb-16 text-gray-200 font-circular">
      <canvas ref={canvasRef} className="hidden" />

      <div className="mx-auto max-w-[720px] space-y-10">
        {/* Header */}
        <header className="text-center space-y-6">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-[#2b2d2f] flex items-center justify-center border border-gray-600/30">
            <Search className="w-7 h-7 text-[#8800ff]" />
          </div>

          <h1 className="text-3xl tracking-tight text-white">
            Image Header Inspector
          </h1>

          <p className="text-sm text-gray-400 max-w-md mx-auto">
            Detect the real image format using magic bytes — not file extensions.
          </p>
        </header>

        {/* Tool */}
        <Card className="bg-[#353739] border-none rounded-2xl shadow-2xl">
          <CardContent className="px-8 pb-10 space-y-8">
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">
                Image URL
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && inspectImage()}
                  placeholder="https://example.com/image.jpg"
                  className="h-12 bg-[#252729] border-gray-600 rounded-xl"
                />

                <button
                  onClick={inspectImage}
                  disabled={loading}
                  className="
                    h-12
                    px-8
                    text-sm
                    rounded-full
                    bg-[#8800ff]
                    text-white
                    font-circular
                    hover:bg-[#9a1aff]
                    transition-all
                    shadow-lg shadow-[#8800ff]/20
                    disabled:opacity-50
                    whitespace-nowrap
                    w-full sm:w-auto
                    flex items-center justify-center
                  "
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Check Image"
                  )}
                </button>

              </div>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex gap-3"
                >
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <p className="text-sm text-red-200">{error.message}</p>
                </motion.div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Detected format */}
                  <div className="p-6 rounded-xl bg-[#2b2d2f] border border-gray-700/50 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest text-gray-500">
                        Detected Format
                      </span>
                      <span className="px-2 py-0.5 text-[10px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase">
                        {result.format.format}
                      </span>
                    </div>

                    <div className="flex gap-3 p-4 rounded-lg bg-[#353739] border border-gray-600/30">
                      <Info className="w-4 h-4 text-gray-400 mt-0.5" />
                      <p className="text-sm text-gray-300">
                        Detected via image header (magic bytes).
                      </p>
                    </div>
                  </div>

                  {/* Fix mismatch */}
                  {result.format.format === 'WebP' &&
                    result.urlExtension === 'jpg' &&
                    !conversionResult && (
                      <div className="p-6 rounded-xl bg-[#8800ff]/10 border border-[#8800ff]/30 space-y-4">
                        <div className="flex items-center gap-3">
                          <Zap className="w-5 h-5 text-[#8800ff]" />
                          <p className="text-sm text-white">
                            Fix extension mismatch
                          </p>
                        </div>

                        <button
                          onClick={convertToJpeg}
                          disabled={converting}
                          className="w-full h-11 rounded-full bg-[#8800ff] hover:bg-[#9a1aff] transition disabled:opacity-50"
                        >
                          {converting ? (
                            <Loader2 className="w-4 h-4 animate-spin mx-auto" />
                          ) : (
                            'Convert to Pure JPEG'
                          )}
                        </button>
                      </div>
                    )}

                  {/* Hex */}
                  <div className="p-6 rounded-xl bg-[#2b2d2f] border border-gray-700/50 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-gray-500">
                        Hex Signature
                      </span>

                      <button
                        onClick={copyHex}
                        className="flex items-center gap-1 text-[10px] text-gray-400 hover:text-white"
                      >
                        {copied ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                        {copied ? 'Copied' : 'Copy'}
                      </button>
                    </div>

                    <div className="p-4 rounded-lg bg-[#1a1c1e] font-mono text-sm text-[#8800ff] flex flex-wrap gap-2">
                      {result.format.hexSignature.split(' ').map((b, i) => (
                        <span key={i}>{b}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* SEO content (indexed, not noisy) */}
        <details className="text-sm text-gray-400 max-w-[720px] mx-auto">
          <summary className="cursor-pointer text-gray-500 hover:text-white">
            Why does an image say .jpg but behave like WebP?
          </summary>

          <div className="mt-4 leading-relaxed">
            <h2 className="sr-only">
              Image says jpg but behaves like WebP
            </h2>
            <p>
              Sometimes an image file uses a <strong>.jpg</strong> extension but
              is actually encoded as <strong>WebP</strong>. Browsers rely on image
              headers (magic bytes), not file extensions. This mismatch can cause
              uploads to fail, images to break, or behave unexpectedly. This tool
              detects the real image format instantly.
            </p>
          </div>
        </details>

        <p className="text-center text-[10px] text-gray-600 uppercase tracking-[0.2em]">
          Client-side inspection • 2026 updated
        </p>
      </div>
    </div>
  );
}

export default ImageHeaderInspector;
