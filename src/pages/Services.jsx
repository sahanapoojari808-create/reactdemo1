import SectionTag from "../components/SectionTag";
import Divider from "../components/Divider";

/* ───────── DATA ───────── */
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

export default function Services() {
  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      
      {/* HEADER */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Premium Offerings" />

        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Services Designed for{" "}
          <span className="text-[#D8C3A5]">Luxury</span>
        </h2>

        <Divider />
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid md:grid-cols-2 gap-8">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className="bg-[#13272C] rounded-[30px] p-10 border border-white/8 hover:-translate-y-2 transition duration-500"
          >
            <div className="text-5xl mb-6">{service.icon}</div>

            <h3 className="font-serif text-3xl mb-3">
              {service.title}
            </h3>

            <p className="text-[#D9D4C8] leading-relaxed">
              {service.desc}
            </p>

            <button
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