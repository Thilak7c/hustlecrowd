import { useState } from 'react';

const ContactDark = () => {
  const [form, setForm] = useState({
    name: '',
    company: '',
    storeType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("https://formspree.io/f/mbdavvwv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly at hello@hustlecrowd.my");
      }
    } catch {
      setError("Something went wrong. Please email us directly at hello@hustlecrowd.my");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#2C2E2F] text-white pb-40 font-circular">
      <div className="max-w-5xl mx-auto px-4">

        <h2 className="text-4xl text-center mb-3">Let's Build Your Store</h2>
        <p className="text-center text-white/50 mb-12">
          Tell us about your e-commerce project and we'll get back to you within 24 hours.
        </p>

        {submitted ? (
          <p className="text-center text-green-400 text-lg">
            ✅ Thanks! We'll be in touch within 24 hours.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Your Name"
              className="bg-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#8800ff]"
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              placeholder="Brand / Store Name"
              className="bg-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#8800ff]"
              onChange={e => setForm({ ...form, company: e.target.value })}
            />

            <select
              style={{ backgroundColor: '#3a3c3d', color: 'white' }}
              className="rounded-lg px-4 py-3 text-white/70 outline-none focus:ring-2 focus:ring-[#8800ff]"
              onChange={e => setForm({ ...form, storeType: e.target.value })}
            >
              <option value="" style={{ backgroundColor: '#3a3c3d' }}>What are you selling?</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Fashion & Apparel</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Beauty & Skincare</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Food & Beverage</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Electronics & Gadgets</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Home & Lifestyle</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Digital Products</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>Other</option>
            </select>

            <select
              style={{ backgroundColor: '#3a3c3d', color: 'white' }}
              className="rounded-lg px-4 py-3 text-white/70 outline-none focus:ring-2 focus:ring-[#8800ff]"
              onChange={e => setForm({ ...form, budget: e.target.value })}
            >
              <option value="" style={{ backgroundColor: '#3a3c3d' }}>Budget Range</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>RM 5k – 15k</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>RM 15k – 30k</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>RM 30k – 60k</option>
              <option style={{ backgroundColor: '#3a3c3d' }}>RM 60k+</option>
            </select>

            <textarea
              placeholder="Tell us about your store — products, target customers, any platforms you're currently on..."
              rows={4}
              className="md:col-span-2 bg-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-[#8800ff]"
              onChange={e => setForm({ ...form, message: e.target.value })}
            />

            {error && (
              <p className="md:col-span-2 text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="md:col-span-2 bg-[#8800ff] hover:bg-[#9a1aff] disabled:opacity-50 text-white font-circularBold py-4 rounded-full transition-colors"
            >
              {loading ? "Sending..." : "Start My E-commerce Project →"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactDark;