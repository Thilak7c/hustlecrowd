// pages/best-prompts.jsx
import { useState, useMemo } from 'react';
import { FooterDark, NavbarDark } from '../components';
import { Hero4, Products2 } from '../sections';
import AddPromptModal from '../components/AddPromptModal';
import { Check } from 'lucide-react';

// Import your static local data file
import { PROMPT_LIST } from '../data/prompts';

const Prompts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal]   = useState(false);
  const [promptList, setPromptList] = useState(PROMPT_LIST || []);
  const [toast, setToast]           = useState('');

  // ─── Filter prompts locally based on search ────────────────────────────────
  const filteredPrompts = useMemo(() => {
    if (!searchTerm.trim()) return promptList;
    const lowerQuery = searchTerm.toLowerCase().trim();

    return promptList.filter((item) => {
      const titleMatch = item.title?.toLowerCase().includes(lowerQuery);
      const descMatch = item.description?.toLowerCase().includes(lowerQuery);
      const promptMatch = item.prompt?.toLowerCase().includes(lowerQuery);
      const categoryMatch = item.category?.toLowerCase().includes(lowerQuery);
      const tagsMatch = item.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery));

      return titleMatch || descMatch || promptMatch || categoryMatch || tagsMatch;
    });
  }, [promptList, searchTerm]);

  // ─── Add prompt locally to state ──────────────────────────────────────────
  const handleAdd = (newPrompt) => {
    // Generate a temporary ID if one isn't provided
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
      <NavbarDark theme="light" />

      <Hero4
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddPrompt={() => setShowModal(true)}
        promptCount={promptList.length}
      />

      {/* Prompts grid */}
      <Products2
        products={filteredPrompts}
        onDelete={handleDelete}
      />

      <FooterDark theme="light" />

      {/* Modal */}
      {showModal && (
        <AddPromptModal
          onClose={() => setShowModal(false)}
          onSubmit={handleAdd}
        />
      )}

      {/* Toast */}
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