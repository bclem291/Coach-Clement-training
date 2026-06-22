import { motion } from "motion/react";
import { Quote, UserPen } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    { name: "Emmanuel Okoro", state: "Lagos State", text: "This training changed my mindset completely. I've started using AI for freelance writing.", gender: "male" },
    { name: "Aisha Bello", state: "Kano State", text: "Very simple and practical. I learned how to use AI even with zero experience.", gender: "female" },
    { name: "Chinedu Eze", state: "Anambra State", text: "I started small online services immediately after the training.", gender: "male" },
    { name: "Tunde Ajayi", state: "Lagos State", text: "The AI strategies are practical and very easy to follow.", gender: "male" },
    { name: "Blessing John", state: "Rivers State", text: "I now understand how to use AI to create income opportunities.", gender: "female" },
    { name: "Musa Ibrahim", state: "Kaduna State", text: "I started offering digital services after this training.", gender: "male" },
    { name: "Ifeoma Nwachukwu", state: "Lagos State", text: "Everything was explained in a beginner-friendly way.", gender: "female" },
    { name: "David Olatunji", state: "Oyo State", text: "Straight to the point and very useful.", gender: "male" },
    { name: "Sarah Efe", state: "Edo State", text: "I never knew AI could help me make money like this.", gender: "female" },
    { name: "Ibrahim Sani", state: "Sokoto State", text: "Very helpful training. Easy to understand.", gender: "male" },
  ];

  return (
    <section className="py-20 px-4 bg-sky-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What Past Students Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Real results from ordinary people across Nigeria who took this free training.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
             <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="bg-white p-6 md:p-8 rounded-2xl shadow border border-sky-50 relative"
            >
              <Quote className="w-8 h-8 text-sky-200 absolute top-4 right-4" />
              <p className="text-brand-navy font-medium text-lg leading-relaxed mb-6 italic relative z-10">"{t.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-50 outline outline-2 outline-sky-200 rounded-full flex items-center justify-center shrink-0">
                   <UserPen className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy leading-none mb-1">{t.name}</h4>
                  <p className="text-sky-700 text-sm font-medium">{t.state}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
