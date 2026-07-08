const TESTIMONIALS = [
  {
    quote: "HustleCrowd delivered our e-commerce platform in 6 weeks. The quality exceeded our expectations and our sales have grown 40% since launch.",
    name: "Ahmad Farid",
    title: "Founder, Willwali",
    avatar: "/images/testimonials/ahmad.jpg"
  },
  {
    quote: "We needed a booking system fast. HustleCrowd understood our requirements immediately and launched a polished product ahead of schedule.",
    name: "Nurul Ain",
    title: "CEO, BeautyBiz Malaysia",
    avatar: "/images/testimonials/nurul.jpg"
  },
  {
    quote: "Best tech partner we've worked with. They don't just write code — they think about the business problem. Our app now has over 5,000 active users.",
    name: "Darren Lim",
    title: "Co-Founder, GoLogis",
    avatar: "/images/testimonials/darren.jpg"
  },
  {
    quote: "As a non-technical founder, I was worried about being left in the dark. HustleCrowd kept communication clear throughout and delivered exactly what we discussed.",
    name: "Siti Hajar",
    title: "Founder, KidsSmart Academy",
    avatar: "/images/testimonials/siti.jpg"
  },
  {
    quote: "We've used two other agencies before. HustleCrowd is the first team that actually hit their deadlines. The dashboard they built handles 10,000+ transactions a day without issues.",
    name: "Marcus Ng",
    title: "Head of Product, TNBES",
    avatar: "/images/testimonials/marcus.jpg"
  },
  {
    quote: "Affordable, responsive, and highly skilled. They built our MVP in 3 weeks which helped us secure our seed funding round. Couldn't recommend them more.",
    name: "Hafiz Rahman",
    title: "Founder, PayTrack",
    avatar: "/images/testimonials/hafiz.jpg"
  },
];

const TestimonialsDark = () => (
  <section className="bg-[#2C2E2F] py-24 font-circular">
    <div className="container mx-auto max-w-5xl px-4">
      <h2 className="text-white text-3xl text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-white/70 mb-6 text-base leading-relaxed">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} className="w-10 h-10 rounded-full object-cover" />
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

export default TestimonialsDark;
