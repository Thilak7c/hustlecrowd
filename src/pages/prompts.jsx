// src/pages/prompts.jsx
import { useState, useMemo } from 'react';
import { FooterDark, NavbarDark } from '../components';
import { Hero4, Products2 } from '../sections';
import AddPromptModal from '../components/AddPromptModal';
import { Check } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { PROMPT_LIST } from '../data/prompts';

const Prompts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showModal, setShowModal]   = useState(false);
  const [promptList, setPromptList] = useState(PROMPT_LIST || []);
  const [toast, setToast]           = useState('');

  // ─── Derive unique categories from the prompt list ─────────────────────────
  const categories = useMemo(() => {
    const unique = new Set(
      promptList.map((item) => item.type).filter(Boolean)
    );

    const priorityOrder = ['Image', 'Flight']; // ← desired order, edit as needed

    const sorted = Array.from(unique).sort((a, b) => {
      const aIndex = priorityOrder.indexOf(a);
      const bIndex = priorityOrder.indexOf(b);

      // Both in priority list → sort by their position in it
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      // Only a is in the list → a comes first
      if (aIndex !== -1) return -1;
      // Only b is in the list → b comes first
      if (bIndex !== -1) return 1;
      // Neither in the list → fall back to alphabetical
      return a.localeCompare(b);
    });

    return ['All', ...sorted];
  }, [promptList]);

  // ─── Filter prompts locally based on search + category ────────────────────
  const filteredPrompts = useMemo(() => {
    const lowerQuery = searchTerm.toLowerCase().trim();

    return promptList.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.type === selectedCategory;

      if (!matchesCategory) return false;
      if (!lowerQuery) return true;

      const titleMatch = item.title?.toLowerCase().includes(lowerQuery);
      const descMatch = item.description?.toLowerCase().includes(lowerQuery);
      const promptMatch = item.prompt?.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.type?.toLowerCase().includes(lowerQuery);
      const tagsMatch = item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery));

      return titleMatch || descMatch || promptMatch || categoryMatch || tagsMatch;
    });
  }, [promptList, searchTerm, selectedCategory]);

  // ─── Add prompt locally to state ──────────────────────────────────────────
  const handleAdd = (newPrompt) => {
    const promptToAdd = {
      id: Date.now(),
      ...newPrompt,
    };
    setPromptList((prev) => [promptToAdd, ...prev]);
    setToast('Prompt added to the directory!');
    setTimeout(() => setToast(''), 3000);
  };

  // ─── Delete prompt locally from state ─────────────────────────────────────
  const handleDelete = (id) => {
    setPromptList((prev) => prev.filter((p) => p.id !== id));
    setToast('Prompt removed.');
    setTimeout(() => setToast(''), 3000);
  };

  return (
    <>
      <Helmet>
        <title>AI Prompts Directory | HustleCrowd</title>
        <meta
          name="description"
          content="Browse a curated directory of AI prompts for ChatGPT, Claude, and more. Search, filter, and submit your own prompts."
        />
        <link rel="canonical" href="https://yoursite.com/prompts" />
        <meta property="og:title" content="AI Prompts Directory | HustleCrowd" />
        <meta property="og:description" content="Browse a curated directory of AI prompts for ChatGPT, Claude, and more." />
        <meta property="og:url" content="https://yoursite.com/prompts" />
      </Helmet>

      <NavbarDark theme="light" />

      <Hero4
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddPrompt={() => setShowModal(true)}
        promptCount={promptList.length}
        categories={categories}                 // ← moved here
        selectedCategory={selectedCategory}      // ← moved here
        onCategoryChange={setSelectedCategory}   // ← moved here
      />

      {/* Prompts grid */}
      <Products2
        products={filteredPrompts}
        onDelete={handleDelete}
      />

      <FooterDark theme="light" />

      {showModal && (
        <AddPromptModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAdd}
        />
      )}

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg animate-fade-in">
          <Check className="w-4 h-4 text-green-400" />
          {toast}
        </div>
      )}
    </>
  );
};

export default Prompts;