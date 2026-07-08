// AddPromptModal.jsx
import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';

const TYPES  = ['Image', 'Text', 'Code', 'Audio', 'Video', 'Other'];
const MODELS = ['GPT-4o', 'Claude Sonnet', 'Gemini Pro', 'Sora', 'DALL·E 3', 'Midjourney', 'Other'];
const EMPTY  = { title: '', prompt: '', type: '', model: '', desc: '', image: '' };

const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

const inputCls = (err) =>
  `w-full px-3.5 py-2.5 text-sm bg-gray-50 border rounded-xl outline-none transition
   focus:bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent
   ${err ? 'border-red-300 ring-1 ring-red-300' : 'border-gray-200'}`;

const AddPromptModal = ({ onClose, onSubmit }) => {
  const [form, setForm] = useState(EMPTY);
  const [errs, setErrs] = useState({});
  const [busy, setBusy] = useState(false);
  const [apiError, setApiError] = useState('');

  const set = (f) => (e) => setForm((p) => ({ ...p, [f]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.title.trim())  e.title  = 'Required';
    if (!form.type)          e.type   = 'Required';
    if (!form.model)         e.model  = 'Required';
    if (!form.desc.trim())   e.desc   = 'Required';
    if (!form.prompt.trim()) e.prompt = 'Required';
    return e;
  };

  const submit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrs(e); return; }

    setBusy(true);
    setApiError('');

    try {
      const res = await fetch(`${API_URL}/prompts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to save prompt');
      }

      const saved = await res.json();
      onSubmit(saved); // pass the real saved object back to parent
      onClose();
    } catch (err) {
      setApiError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100">
          <div>
            <h2 className="text-lg font-circularBold text-gray-900">Share a Prompt</h2>
            <p className="text-xs text-gray-400 mt-0.5 font-circular">Contribute to the community directory</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-500 text-gray-400 transition">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-6 flex flex-col gap-4">

          {/* API Error */}
          {apiError && (
            <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 font-circular">
              ⚠️ {apiError}
            </div>
          )}

          {/* Title */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-circular">Title</label>
            <input className={inputCls(errs.title)} placeholder="e.g. Cinematic Portrait Generator" value={form.title} onChange={set('title')} />
            {errs.title && <span className="text-xs text-red-500 font-circular">{errs.title}</span>}
          </div>

          {/* Type + Model */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-circular">Type</label>
              <select className={inputCls(errs.type)} value={form.type} onChange={set('type')}>
                <option value="">Select…</option>
                {TYPES.map((t) => <option key={t}>{t}</option>)}
              </select>
              {errs.type && <span className="text-xs text-red-500 font-circular">{errs.type}</span>}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-circular">Model</label>
              <select className={inputCls(errs.model)} value={form.model} onChange={set('model')}>
                <option value="">Select…</option>
                {MODELS.map((m) => <option key={m}>{m}</option>)}
              </select>
              {errs.model && <span className="text-xs text-red-500 font-circular">{errs.model}</span>}
            </div>
          </div>

          {/* Desc */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-circular">Short Description</label>
            <input className={inputCls(errs.desc)} placeholder="One-line summary of what this prompt does" value={form.desc} onChange={set('desc')} />
            {errs.desc && <span className="text-xs text-red-500 font-circular">{errs.desc}</span>}
          </div>

          {/* Prompt */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-circular">Prompt</label>
            <textarea className={inputCls(errs.prompt)} placeholder="Paste your full prompt here…" value={form.prompt} onChange={set('prompt')} rows={5} />
            {errs.prompt && <span className="text-xs text-red-500 font-circular">{errs.prompt}</span>}
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-circular">
              Preview Image URL <span className="normal-case font-normal text-gray-400">(optional)</span>
            </label>
            <input className={inputCls(false)} placeholder="https://example.com/image.png" value={form.image} onChange={set('image')} />
          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100">
          <button onClick={onClose} className="h-10 px-4 text-sm font-circularBold text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition">
            Cancel
          </button>
          <button onClick={submit} disabled={busy} className="h-10 px-5 text-sm font-circularBold text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 rounded-xl flex items-center gap-2 transition">
            {busy && <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
            {busy ? 'Saving…' : 'Add Prompt'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default AddPromptModal;