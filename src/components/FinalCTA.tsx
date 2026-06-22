import { motion } from "motion/react";
import { WHATSAPP_LINK, PHONE_NUMBER } from "../constants";
import { Phone, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-brand-navy text-center border-t-4 border-brand-red">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="inline-block bg-red-600/20 text-red-400 font-bold uppercase tracking-widest text-sm px-4 py-2 rounded-full mb-6">
          🚨 Almost Closed
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
          Don't Miss This Opportunity
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join the FREE WhatsApp AI Training and learn how to start making money online using AI tools.
        </p>

        <div className="bg-white border-2 border-brand-red rounded-xl py-4 px-6 inline-flex flex-col items-center mb-10 shadow-xl shadow-red-500/20">
           <span className="text-gray-600 text-sm font-bold uppercase tracking-wider mb-2">Training Date</span>
           <span className="text-2xl sm:text-3xl font-black text-brand-red">📅 Sunday, 30th August 2026</span>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-red-500/20 transition-all hover:scale-105 active:scale-95"
          >
            👉 Join Free WhatsApp Training
          </a>

          <div className="flex items-center gap-2 text-blue-200 mt-2">
            <span className="font-medium">Have questions?</span>
            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-1 font-bold text-white hover:text-sky-300 transition-colors">
              <Phone className="w-4 h-4" /> {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
