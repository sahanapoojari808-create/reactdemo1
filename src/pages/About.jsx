import SectionTag from "../components/SectionTag";
import Divider from "../components/Divider";

/* ───────── DATA ───────── */
const TIMELINE = [
  {
    year: "2010",
    title: "Founded",
    desc: "LUMIÈRE opened with a vision of bringing elegant fine dining into a modern setting.",
  },
  {
    year: "2014",
    title: "Luxury Expansion",
    desc: "The restaurant expanded into a larger premium dining destination with curated interiors.",
  },
  {
    year: "2019",
    title: "Award Recognition",
    desc: "Recognised among the city’s top luxury dining experiences for excellence and hospitality.",
  },
  {
    year: "2025",
    title: "Modern Rebrand",
    desc: "A refined new visual identity elevated the brand into a contemporary premium experience.",
  },
];

export default function About() {
  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      
      {/* HERO / STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* TEXT */}
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

        {/* IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&q=85"
            alt="Restaurant Interior"
            className="w-full h-[540px] object-cover rounded-[34px]"
          />
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[#102025] py-24">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <SectionTag text="Timeline" />
            <h2 className="font-serif text-4xl md:text-5xl">
              Our Journey
            </h2>
            <Divider />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TIMELINE.map((item, i) => (
              <div
                key={i}
                className="bg-[#13272C] rounded-[28px] p-8 border border-white/8"
              >
                <p className="text-[#D8C3A5] font-serif text-3xl mb-3">
                  {item.year}
                </p>

                <h3 className="font-serif text-2xl mb-2">
                  {item.title}
                </h3>

                <p className="text-[#D9D4C8] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}