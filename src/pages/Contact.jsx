import { useState } from "react";
import SectionTag from "../components/SectionTag";
import Divider from "../components/Divider";

export default function Contact() {
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

    setTimeout(() => setSent(false), 3000);

    setForm({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      
      {/* HEADER */}
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Reservations" />

        <h2 className="font-serif text-5xl md:text-6xl mb-4">
          Reserve Your{" "}
          <span className="text-[#D8C3A5]">Experience</span>
        </h2>

        <Divider />
      </section>

      {/* FORM + INFO */}
      <section className="max-w-7xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-10">
        
        {/* FORM */}
        <div className="bg-[#102025] rounded-[32px] p-10 border border-white/8">
          <h3 className="font-serif text-3xl mb-8">Book a Table</h3>

          {sent && (
            <div className="mb-6 bg-[#D8C3A5]/10 border border-[#D8C3A5]/30 text-[#D8C3A5] rounded-2xl px-5 py-4">
              Reservation request submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <input
              type="text"
              placeholder="Full Name"
              required
              className={inputClass}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              required
              className={inputClass}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={inputClass}
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="date"
              className={inputClass}
              value={form.date}
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <textarea
              rows={5}
              placeholder="Special Requests"
              className={inputClass}
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full bg-[#D8C3A5] text-[#0B1517] uppercase tracking-[0.18em] text-[0.72rem] font-semibold hover:scale-[1.01] transition"
            >
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* DETAILS */}
        <div className="space-y-8">
          
          {/* HOURS */}
          <div className="bg-[#102025] rounded-[32px] p-8 border border-white/8">
            <h3 className="font-serif text-2xl mb-5">Opening Hours</h3>

            {[
              ["Monday – Friday", "12:00 PM – 11:00 PM"],
              ["Saturday", "11:00 AM – 11:30 PM"],
              ["Sunday", "11:00 AM – 10:00 PM"],
            ].map(([day, time]) => (
              <div
                key={day}
                className="flex justify-between py-3 border-b border-white/8 last:border-0"
              >
                <span className="text-[#D9D4C8]">{day}</span>
                <span>{time}</span>
              </div>
            ))}
          </div>

          {/* CONTACT */}
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