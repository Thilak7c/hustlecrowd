// Hero4.jsx
import { Search, Plus, Sparkles } from 'lucide-react';

const Hero4 = ({ searchTerm, onSearchChange, onAddPrompt, promptCount }) => {
  return (
    <div className="relative bg-gray-50 pt-28 pb-16 px-4 text-center overflow-hidden">
      {/* Subtle gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-200 opacity-20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-2xl mx-auto">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-1.5 text-xs font-circularBold text-purple-600 bg-purple-50 border border-purple-200 rounded-full px-3 py-1 mb-6 uppercase tracking-wide">
          <Sparkles className="w-3 h-3" /> AI Prompt Directory
        </span>

        <h1 className="text-4xl md:text-5xl font-circularBold text-gray-900 leading-tight tracking-tight mb-4">
          The best <span className="text-purple-600">AI prompts</span>,<br />all in one place.
        </h1>

        <p className="text-gray-400 text-base mb-10 max-w-md mx-auto leading-relaxed font-circular">
          Discover, copy, and share prompts for image, video, and text generation.
        </p>

        {/* Search + Add row */}
        <div className="flex gap-2 max-w-xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by title, model, or type…"
              className="w-full h-11 pl-10 pr-4 text-sm bg-white border border-gray-200 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>
          <button
            onClick={onAddPrompt}
            className="h-11 px-5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-circularBold rounded-full shadow-sm flex items-center gap-1.5 transition whitespace-nowrap"
          >
            <Plus className="w-4 h-4" /><h1>Add Prompt</h1> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero4;