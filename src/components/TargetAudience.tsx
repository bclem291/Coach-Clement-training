import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function TargetAudience() {
  const audiences = [
    "Students",
    "Job seekers",
    "Business owners",
    "Content creators",
    "Freelancers",
    "Beginners with no technical experience"
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-brand-navy text-white rounded-[2rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-red rounded-full blur-3xl opacity-20"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who This Training Is For</h2>
            <p className="text-blue-100 text-lg">If you fall into any of these categories, this is for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {audiences.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur border border-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span className="font-medium text-lg text-white">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
