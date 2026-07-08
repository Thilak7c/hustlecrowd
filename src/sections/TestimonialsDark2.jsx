const TESTIMONIALS = [
  {
    quote: "HustleCrowd launched our online store in 5 weeks. We went from zero to RM 80k in sales in the first month — the checkout flow they designed is incredibly smooth.",
    name: "Ahmad Farid",
    title: "Founder, Willwali",
    avatar: "/images/testimonials/ahmad.jpg",
  },
  {
    quote: "Our Shopify store looked generic. HustleCrowd rebuilt it from scratch with a custom UI and our conversion rate jumped from 1.2% to 3.8% within weeks.",
    name: "Nurul Ain",
    title: "CEO, BeautyBiz Malaysia",
    avatar: "/images/testimonials/nurul.jpg",
  },
  {
    quote: "They integrated FPX, DuitNow, and Stripe into our store seamlessly. Customers trust the checkout now and cart abandonment dropped by 35%.",
    name: "Darren Lim",
    title: "Co-Founder, GoLogis",
    avatar: "/images/testimonials/darren.jpg",
  },
  {
    quote: "As a first-time online seller, I was overwhelmed. HustleCrowd walked me through everything and built me a store that I can actually manage myself. Sales started on day one.",
    name: "Siti Hajar",
    title: "Founder, KidsSmart Academy",
    avatar: "/images/testimonials/siti.jpg",
  },
  {
    quote: "We process 500+ orders a day through the store they built. It's fast, reliable, and the inventory system has saved my team hours every week.",
    name: "Marcus Ng",
    title: "Head of Product, TNBES",
    avatar: "/images/testimonials/marcus.jpg",
  },
  {
    quote: "We had a product launch deadline. HustleCrowd delivered a full e-commerce store in 4 weeks. The mobile experience alone drove 60% of our first-week revenue.",
    name: "Hafiz Rahman",
    title: "Founder, PayTrack",
    avatar: "/images/testimonials/hafiz.jpg",
  },
];

const TestimonialsDark2 = () => (
  <section className="bg-[#2C2E2F] py-24 font-circular">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-white text-3xl text-center mb-3">Stores We've Launched. Results They Got.</h2>
      <p className="text-white/50 text-center text-sm mb-12 max-w-xl mx-auto">
        Real Malaysian brands, real e-commerce growth.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/70 mb-6 text-base leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" alt={t.name} />
              <div>
                <p className="text-white font-circularBold text-sm">{t.name}</p>
                <p className="text-white/50 text-xs">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsDark2;