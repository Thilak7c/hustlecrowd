// PromptCard.jsx  (replaces Card3)
import { useState } from 'react';
import { Copy, Check, Image, FileText, Code2, Music, Video, Layers } from 'lucide-react';

const TYPE_ICONS = { Image, Text: FileText, Code: Code2, Audio: Music, Video, Other: Layers };

const PromptCard = ({ product }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(product.prompt).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Icon = TYPE_ICONS[product.type] || Layers;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* Image */}
      {product.image ? (
        <img src={product.image} alt={product.title} className="w-full aspect-video object-cover" />
      ) : (
        <div className="w-full aspect-video bg-purple-50 flex items-center justify-center text-purple-200">
          <Image className="w-8 h-8" />
        </div>
      )}

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 bg-purple-50 rounded-full px-2.5 py-0.5 uppercase tracking-wide">
            <Icon className="w-2.5 h-2.5" />{product.type}
          </span>
          <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-0.5">
            {product.model}
          </span>
        </div>

        <h3 className="text-sm font-bold text-gray-900 leading-snug">{product.title}</h3>
        <p className="text-xs text-gray-400 leading-relaxed flex-1">{product.desc}</p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4">
        <button
          onClick={copy}
          className={`w-full h-9 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border
            ${copied
              ? 'bg-green-50 text-green-600 border-green-200'
              : 'bg-gray-50 text-gray-500 border-gray-100 hover:bg-purple-600 hover:text-white hover:border-purple-600'
            }`}
        >
          {copied ? <><Check className="w-3.5 h-3.5" />Copied!</> : <><Copy className="w-3.5 h-3.5" />Copy Prompt</>}
        </button>
      </div>
    </div>
  );
};

export default PromptCard;