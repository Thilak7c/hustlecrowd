// components/Card3.jsx
import { useState } from 'react';
import { Clipboard, Check } from 'lucide-react';

const Card3 = ({ product }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(product.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col font-circular">

      {/* Image */}
      <div className="relative">
        <img
          className="w-full aspect-video object-cover"
          src={product.image || 'https://via.placeholder.com/600x400?text=AI+Prompt'}
          alt={product.title}
        />

        {/* Type badge */}
        <span className="absolute top-2.5 left-2.5 text-xs font-semibold text-purple-600 bg-white/90 backdrop-blur-sm border border-purple-100 rounded-full px-2.5 py-0.5 uppercase tracking-wide font-circular">
          {product.type || 'AI'}
        </span>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          aria-label="Copy prompt"
          title="Copy Prompt"
          className={`absolute top-2.5 right-2.5 w-8 h-8 flex items-center justify-center rounded-full shadow-md transition-all duration-150
            ${copied
              ? 'bg-green-500 text-white'
              : 'bg-white/90 backdrop-blur-sm text-gray-600 hover:bg-purple-600 hover:text-white'
            }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Clipboard className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-0.5 w-fit font-circular">
          {product.model}
        </span>
        <h3 className="text-sm font-circularBold text-gray-900 leading-snug">
          {product.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed font-circular">
          {product.desc || ''}
        </p>
      </div>

    </div>
  );
};

export default Card3;