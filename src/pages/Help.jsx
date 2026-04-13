import SectionTag from "../components/SectionTag";
import Divider from "../components/Divider";

/* ───────── DATA ───────── */
const FAQS = [
  {
    question: "How do I reserve a table?",
    answer: "You can reserve a table from the Contact page.",
  },
  {
    question: "Do you offer vegetarian options?",
    answer: "Yes, we have vegetarian and vegan dishes.",
  },
  {
    question: "What are your opening hours?",
    answer: "12 PM to 11 PM on weekdays.",
  },
  {
    question: "Can I host private events?",
    answer: "Yes, we offer private dining and events.",
  },
  {
    question: "Is advance booking required?",
    answer: "Recommended for weekends.",
  },
  {
    question: "Do you have parking facilities?",
    answer: "Yes, valet parking available.",
  },
  {
    question: "Is there a dress code?",
    answer: "Smart casual recommended.",
  },
  {
    question: "Do you offer takeaway?",
    answer: "Yes, takeaway available.",
  },
  {
    question: "Are pets allowed?",
    answer: "No pets allowed.",
  },
  {
    question: "Do you accept online payments?",
    answer: "Yes, UPI & cards accepted.",
  },
];

export default function Help() {
  return (
    <div className="bg-[#0B1517] text-[#F8F4EC] pt-28">
      
      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <SectionTag text="Support" />

        <h2 className="font-serif text-5xl md:text-6xl mb-6">
          Help & <span className="text-[#D8C3A5]">FAQs</span>
        </h2>

        <Divider />
      </section>

      {/* FAQ LIST */}
      <section className="max-w-4xl mx-auto px-6 pb-28">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="group bg-[#13272C] border border-white/10 rounded-2xl p-5 cursor-pointer transition duration-300 hover:bg-[#173038]"
            >
              {/* QUESTION */}
              <h3 className="font-serif text-xl flex justify-between items-center">
                {faq.question}
                <span className="text-lg">+</span>
              </h3>

              {/* ANSWER (SHOW ON HOVER) */}
              <p className="text-[#D9D4C8] mt-3 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}