import { useState, useEffect } from "react";

/* ───────── DATA ───────── */
const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Help", "Contact"];
const FAQS = [
  { question: "How do I reserve a table?", answer: "You can reserve a table from the Contact page." },
  { question: "Do you offer vegetarian options?", answer: "Yes, we have vegetarian and vegan dishes." },
  { question: "What are your opening hours?", answer: "12 PM to 11 PM on weekdays." },
  { question: "Can I host private events?", answer: "Yes, we offer private dining and events." },
  { question: "Is advance booking required?", answer: "Recommended for weekends." },
  { question: "Do you have parking facilities?", answer: "Yes, valet parking available." },
  { question: "Is there a dress code?", answer: "Smart casual recommended." },
  { question: "Do you offer takeaway?", answer: "Yes, takeaway available." },
  { question: "Are pets allowed?", answer: "No pets allowed." },
  { question: "Do you accept online payments?", answer: "Yes, UPI & cards accepted." },
];
const DISHES = [
  {
    name: "Truffle Mushroom Velouté",
    desc: "Silky wild mushroom soup finished with truffle oil and crisp herbs.",
    tag: "Chef Special",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    name: "Charred Wagyu Steak",
    desc: "Perfectly grilled wagyu with smoked butter and roasted vegetables.",
    tag: "Best Seller",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
  },
  {
    name: "Saffron Risotto",
    desc: "Creamy arborio rice infused with saffron and aged parmesan.",
    tag: "Luxury Pick",
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  },
  {
    name: "Herb Crusted Sea Bass",
    desc: "Delicate sea bass paired with citrus glaze and seasonal greens.",
    tag: "Seasonal",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
  },
];

const FEATURES = [
  {
    icon: "🌿",
    title: "Fresh Premium Ingredients",
    desc: "Only hand-selected seasonal ingredients sourced from trusted artisan suppliers.",
  },
  {
    icon: "🥂",
    title: "Elegant Dining Experience",
    desc: "Every meal is elevated by ambience, service, and refined presentation.",
  },
  {
    icon: "🍷",
    title: "Curated Beverage Pairings",
    desc: "Exceptional wines and signature drinks chosen to complement every course.",
  },
  {
    icon: "✨",
    title: "Luxury Hospitality",
    desc: "Attentive service and timeless interiors designed for unforgettable evenings.",
  },
];

const TESTIMONIALS = [
  {
    name: "Ananya Rao",
    role: "Food Blogger",
    quote:
      "The atmosphere, presentation, and flavour were all beyond expectations. Truly unforgettable.",
  },
  {
    name: "Rahul Mehta",
    role: "Entrepreneur",
    quote:
      "One of the most refined dining experiences I’ve had. Sophisticated and beautifully curated.",
  },
  {
    name: "Sara Kapoor",
    role: "Travel Writer",
    quote:
      "Everything from the interiors to the plating felt premium, polished, and memorable.",
  },
];

const SERVICES = [
  {
    icon: "🍽️",
    title: "Signature Dining",
    desc: "An elevated fine dining experience crafted with precision, artistry, and warmth.",
  },
  {
    icon: "🎉",
    title: "Private Celebrations",
    desc: "Luxury spaces for birthdays, anniversaries, corporate evenings, and intimate events.",
  },
  {
    icon: "🚚",
    title: "Exclusive Catering",
    desc: "Refined culinary service brought to your venue with the same premium standard.",
  },
  {
    icon: "📅",
    title: "Easy Reservations",
    desc: "Reserve your table seamlessly and personalise your evening with special requests.",
  },
];

const PORTFOLIO_ITEMS = [
  { category: "Food", title: "Plated Elegance", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80" },
  { category: "Interior", title: "Luxury Hall", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&q=80" },
  { category: "Food", title: "Dessert Craft", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80" },
  { category: "Events", title: "Private Event", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80" },
  { category: "Interior", title: "Wine Corner", img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=80" },
  { category: "Food", title: "Seasonal Freshness", img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=700&q=80" },
];

const TIMELINE = [
  { year: "2010", title: "Founded", desc: "LUMIÈRE opened with a vision of bringing elegant fine dining into a modern setting." },
  { year: "2014", title: "Luxury Expansion", desc: "The restaurant expanded into a larger premium dining destination with curated interiors." },
  { year: "2019", title: "Award Recognition", desc: "Recognised among the city’s top luxury dining experiences for excellence and hospitality." },
  { year: "2025", title: "Modern Rebrand", desc: "A refined new visual identity elevated the brand into a contemporary premium experience." },
];

/* ───────── HELPERS ───────── */
function SectionTag({ text }) {
  return (
    <p className="text-[#D8C3A5] uppercase tracking-[0.35em] text-[0.68rem] font-semibold mb-3">
      {text}
    </p>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <div className="w-16 h-px bg-[#D8C3A5]/50" />
      <div className="w-2 h-2 rounded-full bg-[#D8C3A5]" />
      <div className="w-16 h-px bg-[#D8C3A5]/50" />
    </div>
  );
}

/* ───────── NAVBAR ───────── */
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0D1B1E]/90 backdrop-blur-xl border-b border-[#D8C3A5]/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => setActivePage("Home")}
          className="text-[#F8F4EC] font-serif text-2xl tracking-[0.25em]"
        >
          LUMIÈRE<span className="text-[#D8C3A5]">.</span>
        </button>

       <ul className="flex gap-6">
  {NAV_LINKS.map((link) => (
    <li key={link}>
      <button
        onClick={() => setActivePage(link)}
        className="cursor-pointer transition-all duration-300 text-white hover:text-[#D8C3A5]"
      >
        {link}
      </button>
    </li>
  ))}
</ul>
          <button
          onClick={() => setActivePage("Contact")}
          className="hidden md:block px-5 py-2.5 rounded-full bg-[#D8C3A5] text-[#0D1B1E] text-[0.72rem] uppercase tracking-[0.18em] font-semibold hover:scale-105 transition"
        >
          Reserve
        </button>

        <button
          className="md:hidden text-[#F8F4EC] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-6 pb-6 bg-[#0D1B1E]/95 backdrop-blur-xl">
          <div className="flex flex-col gap-5 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => {
                  setActivePage(link);
                  setMenuOpen(false);
                }}
                className="uppercase text-[0.72rem] tracking-[0.22em] text-[#F8F4EC]"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/* ───────── HOME ───────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B1517] text-[#F8F4EC]">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85"
            alt="Restaurant"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1517] via-[#0B1517]/75 to-[#0B1517]/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTag text="Luxury Fine Dining" />
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6">
              Elegant Taste,
              <br />
              Modern <span className="text-[#D8C3A5]">Atmosphere</span>
            </h1>
            <p className="text-[#D9D4C8] text-lg leading-relaxed max-w-xl mb-8">
              Welcome to LUMIÈRE — where contemporary design, refined flavours,
              and premium hospitality come together in one unforgettable experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActivePage("Contact")}
                className="px-8 py-4 rounded-full bg-[#D8C3A5] text-[#0B1517] uppercase tracking-[0.2em] text-[0.72rem] font-semibold hover:scale-105 transition"
              >
                Book a Table
              </button>
              <button
                onClick={() => setActivePage("Portfolio")}
                className="px-8 py-4 rounded-full border border-[#D8C3A5]/40 text-[#F8F4EC] uppercase tracking-[0.2em] text-[0.72rem] hover:bg-white/5 transition"
              >
                View Gallery
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[32px] p-8 shadow-2xl">
              <p className="text-[#D8C3A5] uppercase tracking-[0.3em] text-xs mb-4">
                Signature Experience
              </p>
              <h3 className="font-serif text-3xl mb-4">An Elevated Evening</h3>
              <p className="text-[#D9D4C8] leading-relaxed mb-6">
                Discover premium interiors, curated flavours, warm lighting, and
                sophisticated dining crafted for memorable occasions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-[#132126] p-5">
                  <p className="text-3xl font-serif text-[#D8C3A5]">15+</p>
                  <p className="text-sm text-[#D9D4C8] mt-1">Years of Excellence</p>
                </div>
                <div className="rounded-2xl bg-[#132126] p-5">
                  <p className="text-3xl font-serif text-[#D8C3A5]">5★</p>
                  <p className="text-sm text-[#D9D4C8] mt-1">Premium Ambience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISHES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <SectionTag text="Signature Menu" />
          <h2 className="font-serif text-4xl md:text-5xl">Featured Dishes</h2>
          <Divider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {DISHES.map((dish, i) => (
            <div
              key={i}
              className="rounded-[30px] overflow-hidden bg-[#122126] border border-white/8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#D8C3A5] text-[#0B1517] px-4 py-1 rounded-full text-[0.62rem] uppercase tracking-[0.18em] font-semibold">
                  {dish.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">{dish.name}</h3>
                <p className="text-[#D9D4C8] text-sm leading-relaxed">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-[#102025] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag text="Why Choose Us" />
            <h2 className="font-serif text-4xl md:text-5xl">Luxury in Every Detail</h2>
            <Divider />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {FEATURES.map((item, i) => (
              <div
                key={i}
                className="rounded-[28px] bg-[#13272C] p-8 border border-white/8 hover:bg-[#173038] transition duration-500"
              >
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="font-serif text-2xl mb-3 text-[#F8F4EC]">{item.title}</h3>
                <p className="text-[#D9D4C8] leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <SectionTag text="Guest Reviews" />
        <h2 className="font-serif text-4xl md:text-5xl mb-4">What Guests Say</h2>
        <Divider />
        <div className="mt-10 bg-[#122126] rounded-[32px] p-10 border border-white/8">
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[#F8F4EC] italic">
            “{TESTIMONIALS[activeTestimonial].quote}”
          </p>
          <p className="mt-8 text-[#D8C3A5] tracking-[0.18em] uppercase text-sm">
            {TESTIMONIALS[activeTestimonial].name}
          </p>
          <p className="text-[#D9D4C8] text-sm mt-2">
            {TESTIMONIALS[activeTestimonial].role}
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="text-center mb-14">
          <SectionTag text="Visual Showcase" />
          <h2 className="font-serif text-4xl md:text-5xl">Gallery Highlights</h2>
          <Divider />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[26px] aspect-square">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-[#0B1517]/55 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="text-center">
                  <p className="text-[#D8C3A5] text-xs uppercase tracking-[0.2em]">{item.category}</p>
                  <p className="font-serif text-lg mt-2">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* ───────── ABOUT ───────── */
function About() {
  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTag text="Our Story" />
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-5">
            Crafted with
            <br />
            <span className="text-[#D8C3A5]">Elegance & Vision</span>
          </h2>
          <Divider />
          <p className="text-[#D9D4C8] leading-relaxed text-lg mt-6">
            LUMIÈRE was created to offer more than dining — it was designed to deliver
            atmosphere, sophistication, and memorable hospitality in every detail.
          </p>
          <p className="text-[#D9D4C8] leading-relaxed text-lg mt-5">
            From intimate dinners to premium events, every experience is crafted with
            modern luxury at its heart.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&q=85"
            alt="Interior"
            className="w-full h-[540px] object-cover rounded-[34px]"
          />
        </div>
      </section>

      <section className="bg-[#102025] py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <SectionTag text="Timeline" />
            <h2 className="font-serif text-4xl md:text-5xl">Our Journey</h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="bg-[#13272C] rounded-[28px] p-8 border border-white/8">
                <p className="text-[#D8C3A5] font-serif text-3xl mb-3">{item.year}</p>
                <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                <p className="text-[#D9D4C8] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────── SERVICES ───────── */
function Services({ setActivePage }) {
  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Premium Offerings" />
        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Services Designed for <span className="text-[#D8C3A5]">Luxury</span>
        </h2>
        <Divider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-8">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="bg-[#13272C] rounded-[30px] p-10 border border-white/8 hover:-translate-y-2 transition duration-500"
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="font-serif text-3xl mb-3">{service.title}</h3>
            <p className="text-[#D9D4C8] leading-relaxed">{service.desc}</p>
            <button
              onClick={() => setActivePage("Contact")}
              className="mt-8 px-6 py-3 rounded-full border border-[#D8C3A5]/30 text-[#D8C3A5] uppercase tracking-[0.16em] text-[0.68rem] hover:bg-[#D8C3A5] hover:text-[#0B1517] transition"
            >
              Enquire Now
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}

/* ───────── PORTFOLIO ───────── */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const FILTERS = ["All", "Food", "Interior", "Events"];
  const filtered =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Gallery" />
        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Our <span className="text-[#D8C3A5]">Portfolio</span>
        </h2>
        <Divider />
      </section>

      <div className="flex justify-center gap-4 flex-wrap mb-12 px-6">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-full text-[0.72rem] uppercase tracking-[0.18em] transition ${
              filter === f
                ? "bg-[#D8C3A5] text-[#0B1517]"
                : "bg-[#13272C] text-[#F8F4EC] hover:bg-[#173038]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <div key={i} className="rounded-[28px] overflow-hidden bg-[#13272C] border border-white/8">
            <img src={item.img} alt={item.title} className="w-full h-72 object-cover" />
            <div className="p-5">
              <p className="text-[#D8C3A5] text-xs uppercase tracking-[0.18em]">{item.category}</p>
              <h3 className="font-serif text-2xl mt-2">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
function Help() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <SectionTag text="Support" />
        <h2 className="font-serif text-5xl md:text-6xl mb-6 text-center">
          Help & <span className="text-[#D8C3A5]">FAQs</span>
        </h2>
        <Divider />

        <div className="mt-10 space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-[#13272C] border border-white/10 rounded-2xl p-5 cursor-pointer"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h3 className="font-serif text-xl flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h3>

              {openIndex === index && (
                <p className="text-[#D9D4C8] mt-3 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
/* ───────── CONTACT ───────── */
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const inputClass =
    "w-full bg-[#13272C] border border-white/10 rounded-2xl px-5 py-4 text-[#F8F4EC] placeholder-[#BEB8AB] outline-none focus:border-[#D8C3A5]";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Reservations" />
        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Reserve Your <span className="text-[#D8C3A5]">Experience</span>
        </h2>
        <Divider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-10">
        <div className="bg-[#102025] rounded-[32px] p-10 border border-white/8">
          <h3 className="font-serif text-3xl mb-8">Book a Table</h3>

          {sent && (
            <div className="mb-6 bg-[#D8C3A5]/10 border border-[#D8C3A5]/30 text-[#D8C3A5] rounded-2xl px-5 py-4">
              Reservation request submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              className={inputClass}
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              className={inputClass}
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              className={inputClass}
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <input
              className={inputClass}
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <textarea
              rows={5}
              className={inputClass}
              placeholder="Special Requests"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#D8C3A5] text-[#0B1517] uppercase tracking-[0.18em] text-[0.72rem] font-semibold hover:scale-[1.01] transition"
            >
              Confirm Reservation
            </button>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-[#102025] rounded-[32px] p-8 border border-white/8">
            <h3 className="font-serif text-2xl mb-5">Opening Hours</h3>
            {[
              ["Monday – Friday", "12:00 PM – 11:00 PM"],
              ["Saturday", "11:00 AM – 11:30 PM"],
              ["Sunday", "11:00 AM – 10:00 PM"],
            ].map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-white/8 last:border-0">
                <span className="text-[#D9D4C8]">{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>

          <div className="bg-[#102025] rounded-[32px] p-8 border border-white/8">
            <h3 className="font-serif text-2xl mb-5">Contact Details</h3>
            <div className="space-y-4 text-[#D9D4C8]">
              <p>📍 Luxury Dining Street, Mumbai</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ reserve@lumiere.com</p>
              <p>📸 @lumiere.dining</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ───────── FOOTER ───────── */
function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#081114] text-[#F8F4EC] border-t border-white/8 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-serif text-3xl tracking-[0.2em] text-[#D8C3A5]">
              LUMIÈRE.
            </h3>
            <p className="text-[#D9D4C8] mt-4 text-sm leading-relaxed max-w-xs">
              Modern fine dining crafted with elegance, warmth, and premium hospitality.
            </p>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-[0.68rem] text-[#D8C3A5] mb-4">
              Navigation
            </p>
            <div className="space-y-3">
              {NAV_LINKS.map((item) => (
                <button
                  key={item}
                  onClick={() => setActivePage(item)}
                  className="block text-[#D9D4C8] hover:text-white transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.25em] text-[0.68rem] text-[#D8C3A5] mb-4">
              Contact
            </p>
            <div className="space-y-2 text-[#D9D4C8] text-sm">
              <p>Mumbai, Maharashtra</p>
              <p>+91 98765 43210</p>
              <p>reserve@lumiere.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#AFA89A]">
          <p>© {new Date().getFullYear()} Lumière Dining. All rights reserved.</p>
          <p>Designed for premium presentation</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────── APP ROOT ───────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pages = { Home, About, Services, Portfolio, Help, Contact };
  const PageComponent = pages[activePage];

  return (
    <div className="min-h-screen bg-[#0B1517] text-white">
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>
        <PageComponent setActivePage={navigate} />
      </main>
      <Footer setActivePage={navigate} />
    </div>
  );
}