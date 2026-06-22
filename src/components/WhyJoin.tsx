import { motion } from "motion/react";
import { Gift, BookOpen, Presentation, Users, Route, Smartphone } from "lucide-react";

export default function WhyJoin() {
  const reasons = [
    { text: "100% FREE training", icon: Gift },
    { text: "Beginner-friendly explanation", icon: BookOpen },
    { text: "Practical real-world examples", icon: Presentation },
    { text: "WhatsApp community support", icon: Users },
    { text: "Step-by-step guidance", icon: Route },
    { text: "Learn directly on your phone", icon: Smartphone },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Why You Should Join</h2>
        <div className="h-1 w-20 bg-brand-red mx-auto rounded-full mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 flex flex-col items-center justify-center gap-4 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-red-50 text-brand-red rounded-full flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-brand-navy text-lg">{reason.text}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
