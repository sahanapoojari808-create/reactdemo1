import { useState } from "react";
import SectionTag from "../components/SectionTag";
import Divider from "../components/Divider";

/* ───────── DATA ───────── */
const PORTFOLIO_ITEMS = [
  {
    category: "Food",
    title: "Plated Elegance",
    price: "₹600",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80",
  },
  {
    category: "Interior",
    title: "Luxury Hall",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=700&q=80",
  },
  {
    category: "Food",
    title: "Dessert Craft",
    price: "₹350",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&q=80",
  },
  {
    category: "Events",
    title: "Private Event",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&q=80",
  },
  {
    category: "Interior",
    title: "Wine Corner",
    img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=700&q=80",
  },
  {
    category: "Food",
    title: "Seasonal Freshness",
    price: "₹500",
    img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=700&q=80",
  },
];

/* ───────── COMPONENT ───────── */
export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const FILTERS = ["All", "Food", "Interior", "Events"];

  const filteredItems =
    filter === "All"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      
      {/* HEADER */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Gallery" />

        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Our <span className="text-[#D8C3A5]">Portfolio</span>
        </h2>

        <Divider />
      </section>

      {/* FILTER */}
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

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((item, i) => (
          <div
            key={i}
            className="rounded-[28px] overflow-hidden bg-[#13272C] border border-white/8 hover:shadow-xl transition"
          >
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-72 object-cover"
            />

            {/* CONTENT */}
            <div className="p-5">
              <p className="text-[#D8C3A5] text-xs uppercase tracking-[0.18em]">
                {item.category}
              </p>

              <h3 className="font-serif text-2xl mt-2">
                {item.title}
              </h3>

              {/* ✅ SHOW PRICE ONLY FOR FOOD */}
              {item.category === "Food" && (
                <p className="text-[#D8C3A5] mt-2 font-semibold">
                  {item.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}