import SectionTag from "../components/SectionTag";
import Divider from "../components/Divider";

/* ───────── DATA ───────── */
const DISHES = [
  {
    name: "Truffle Mushroom Velouté",
    desc: "Silky wild mushroom soup finished with truffle oil.",
    price: "₹450",
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
  },
  {
    name: "Charred Wagyu Steak",
    desc: "Perfectly grilled wagyu with smoked butter.",
    price: "₹1200",
    img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
  },
  {
    name: "Saffron Risotto",
    desc: "Creamy arborio rice with saffron.",
    price: "₹650",
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  },
  {
    name: "Herb Crusted Sea Bass",
    desc: "Sea bass with citrus glaze.",
    price: "₹900",
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80",
  },
  {
    name: "Grilled Chicken Supreme",
    desc: "Juicy grilled chicken with herbs.",
    price: "₹550",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&q=80",
  },
  {
    name: "Pasta Alfredo",
    desc: "Creamy white sauce pasta with parmesan cheese.",
    price: "₹500",
    // ✅ Stable working image
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
  },
];

/* ───────── HOME ───────── */
export default function Home({ setActivePage }) {
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

        <div className="relative max-w-7xl mx-auto px-6">
          <SectionTag text="Luxury Fine Dining" />

          <h1 className="font-serif text-5xl md:text-7xl mb-6 leading-tight">
            Elegant Taste,
            <br />
            <span className="text-[#D8C3A5]">Modern Atmosphere</span>
          </h1>

          <p className="text-[#D9D4C8] max-w-xl text-lg mb-8">
            Experience premium dining with curated dishes, refined flavours,
            and a luxurious ambience designed for unforgettable moments.
          </p>

          {/* ✅ RESERVE BUTTON */}
          <button
            onClick={() => setActivePage && setActivePage("Contact")}
            className="px-8 py-4 rounded-full bg-[#D8C3A5] text-[#0B1517] uppercase tracking-[0.2em] text-[0.75rem] font-semibold hover:scale-105 transition"
          >
            Reserve Now
          </button>
        </div>
      </section>

      {/* DISHES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <SectionTag text="Signature Menu" />
          <h2 className="font-serif text-4xl md:text-5xl">
            Featured Dishes
          </h2>
          <Divider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {DISHES.map((dish, i) => (
            <div
              key={i}
              className="rounded-[30px] overflow-hidden bg-[#122126] border border-white/8 hover:-translate-y-2 hover:shadow-xl transition duration-500"
            >
              {/* IMAGE */}
              <div className="h-64 overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Food+Image";
                  }}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="font-serif text-2xl mb-2">
                  {dish.name}
                </h3>

                <p className="text-sm text-[#D9D4C8] mb-3 leading-relaxed">
                  {dish.desc}
                </p>

                <p className="text-[#D8C3A5] text-lg font-semibold">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}