// pages/best-prompts.jsx
import { useState, useEffect, useCallback } from 'react';
import { FooterDark, NavbarDark } from '../components';
import { Hero4, Products2 } from '../sections';
import AddPromptModal from '../components/AddPromptModal';
import { Check } from 'lucide-react';

const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

const BestPrompts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal]   = useState(false);
  const [promptList, setPromptList] = useState([]);
  const [totalCount, setTotalCount] = useState(0); // unfiltered count for Hero4
  const [loading, setLoading]       = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [toast, setToast]           = useState('');

  // ─── Generic fetch helper ─────────────────────────────────────────────────
  const fetchPrompts = useCallback(async (search = '') => {
    setLoading(true);
    setFetchError('');
    try {
      const url = search.trim()
        ? `${API_URL}/prompts?search=${encodeURIComponent(search.trim())}`
        : `${API_URL}/prompts`;

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setPromptList(data);
    } catch (err) {
      setFetchError(err.message || 'Failed to load prompts.');
    } finally {
      setLoading(false);
    }
  }, []);

  // ─── Fetch all on mount — also keeps an unfiltered total count ────────────
  useEffect(() => {
    const loadAll = async () => {
      setLoading(true);
      setFetchError('');
      try {
        const res = await fetch(`${API_URL}/prompts`);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setPromptList(data);
        setTotalCount(data.length); // store baseline count
      } catch (err) {
        setFetchError(err.message || 'Failed to load prompts.');
      } finally {
        setLoading(false);
      }
    };
    loadAll();
  }, []);

  // ─── Debounced search — calls backend ?search= endpoint ──────────────────
  useEffect(() => {
    if (searchTerm === '') return; // skip on mount; initial load handles it
    const timer = setTimeout(() => {
      fetchPrompts(searchTerm);
    }, 350); // 350ms debounce
    return () => clearTimeout(timer);
  }, [searchTerm, fetchPrompts]);

  // ─── Clear search → reload all ───────────────────────────────────────────
  useEffect(() => {
    if (searchTerm === '') fetchPrompts('');
  }, [searchTerm, fetchPrompts]);

  // ─── Add — modal already POSTs; we receive the saved DB object ────────────
  const handleAdd = (savedPrompt) => {
    setPromptList((prev) => [savedPrompt, ...prev]);
    setTotalCount((n) => n + 1);
    setToast('Prompt added to the directory!');
    setTimeout(() => setToast(''), 3000);
  };

  // ─── Delete (wired up for future use in Card3) ────────────────────────────
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/prompts/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error();
      setPromptList((prev) => prev.filter((p) => p.id !== id));
      setTotalCount((n) => n - 1);
    } catch {
      setToast('Failed to delete prompt.');
      setTimeout(() => setToast(''), 3000);
    }
  };

  return (
    <>
      <NavbarDark theme="light" />

      <Hero4
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onAddPrompt={() => setShowModal(true)}
        promptCount={totalCount}
      />

      {/* Loading */}
      {loading && (
        <div className="text-center py-20">
          <div className="inline-block w-6 h-6 border-2 border-purple-600/30 border-t-purple-600 rounded-full animate-spin" />
          <p className="text-gray-400 text-sm mt-3">Loading prompts…</p>
        </div>
      )}

      {/* Fetch error */}
      {!loading && fetchError && (
        <div className="text-center py-16">
          <p className="text-red-500 text-sm">⚠️ {fetchError}</p>
          <button
            onClick={() => fetchPrompts(searchTerm)}
            className="mt-4 text-sm text-purple-600 underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Prompts grid */}
      {!loading && !fetchError && (
        <Products2
          products={promptList}
          onDelete={handleDelete}
        />
      )}

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

export default BestPrompts;