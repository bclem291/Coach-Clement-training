import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap } from "lucide-react";

export default function AboutTrainer() {
  return (
    <section className="py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-md border border-sky-100 flex flex-col md:flex-row gap-10 items-center justify-between"
      >
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-sky-600 font-bold tracking-widest text-sm uppercase mb-4">
            <Award className="w-5 h-5" /> About The Trainer
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6">Meet Coach Clement</h2>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-6">
            <p>
              Coach Clement is a Digital Skills Coach and online business mentor helping Africans learn how to earn online using AI, freelancing, digital marketing, and digital products.
            </p>
            <p>
              He is also the CEO/Founder of <strong className="text-brand-navy font-bold">AHAVA DIGITAL</strong>, a digital skills and online business training brand focused on empowering Africans with practical income-generating skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <div className="flex items-center gap-2 bg-sky-50 text-sky-800 px-4 py-2 rounded-lg font-medium text-sm">
                <Briefcase className="w-4 h-4" /> Founder, Ahava Digital
            </div>
            <div className="flex items-center gap-2 bg-sky-50 text-sky-800 px-4 py-2 rounded-lg font-medium text-sm">
                <GraduationCap className="w-4 h-4" /> Digital Skills Mentor
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
