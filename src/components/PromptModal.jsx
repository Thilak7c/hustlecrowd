// src/components/PromptModal.jsx
import { useEffect, useState } from 'react';
import { X, Clipboard, Check, Tag } from 'lucide-react';

const PromptModal = ({ prompt, onClose }) => {
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!prompt) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal card */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-black/10 flex flex-col md:flex-row max-h-[90vh]">

        {/* ── Left: Image ───────────────────────────────────── */}
        <div className="md:w-1/2 w-full flex-shrink-0 bg-[#f4f4f5] relative">
          <img
            src={prompt.image || 'https://via.placeholder.com/600x400?text=AI+Prompt'}
            alt={prompt.title}
            className="w-full h-56 md:h-full object-cover"
          />

          {/* Type badge over image */}
          {prompt.type && (
            <span className="absolute top-3 left-3 text-[10px] font-bold text-[#8800ff] bg-white/90 border border-[#8800ff]/30 rounded-full px-3 py-1 uppercase tracking-widest">
              {prompt.type}
            </span>
          )}
        </div>

        {/* ── Right: Details ────────────────────────────────── */}
        <div className="md:w-1/2 w-full flex flex-col overflow-y-auto">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-black/50 hover:text-black transition-all"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">

            {/* Model badge */}
            {prompt.model && (
              <span className="text-[10px] font-bold text-[#8800ff] bg-[#8800ff]/10 border border-[#8800ff]/25 rounded-full px-3 py-1 w-fit uppercase tracking-widest">
                {prompt.model}
              </span>
            )}

            {/* Title */}
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#111111] leading-snug font-circular mb-2">
                {prompt.title}
              </h2>
              {prompt.desc && (
                <p className="text-sm text-black/50 leading-relaxed font-circular">
                  {prompt.desc}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="border-t border-black/8" />

            {/* Prompt text */}
            <div className="flex flex-col gap-3 flex-1">
              <p className="text-xs font-bold text-black/40 uppercase tracking-widest font-circular">
                Prompt
              </p>
              <div className="bg-[#f7f7f8] border border-black/8 rounded-xl p-4 flex-1 min-h-[120px] max-h-[220px] overflow-y-auto">
                <p className="text-sm text-black/70 leading-relaxed font-circular whitespace-pre-wrap">
                  {prompt.prompt}
                </p>
              </div>
            </div>

            {/* Tags */}
            {prompt.tags && prompt.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-[10px] text-black/40 bg-black/5 border border-black/8 rounded-full px-2.5 py-1 font-circular"
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-[100px] text-sm font-bold font-circular transition-all ${
                copied
                  ? 'bg-green-500/15 text-green-600 border border-green-500/30'
                  : 'bg-[#8800ff] text-white hover:bg-[#9a1aff]'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Clipboard className="w-4 h-4" />
                  Copy Prompt
                </>
              )}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PromptModal;