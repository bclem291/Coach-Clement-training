import { motion } from "motion/react";
import { ArrowRight, Phone } from "lucide-react";
import { WHATSAPP_LINK, PHONE_NUMBER, WA_ENQUIRY_LINK } from "../constants";

export default function Hero() {
  return (
    <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 text-brand-red font-black text-lg sm:text-xl mb-8 shadow-md border-2 border-red-200">
          <span className="text-2xl">📅</span> Sunday, 30th August 2026
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-brand-navy leading-tight">
          <span className="inline-block hover:scale-110 transition-transform origin-bottom">🚀</span> Learn How to Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Money Using AI</span><br />
          <span className="text-2xl sm:text-3xl lg:text-4xl mt-4 block font-bold text-gray-700">FREE WhatsApp Training for Beginners</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join a practical step-by-step WhatsApp training showing you how to use AI tools like ChatGPT and others to create real online income opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-200 transition-all hover:-translate-y-1"
          >
            👉 Join Free WhatsApp Training
          </a>
          
          <a
            href={WA_ENQUIRY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-navy border-2 border-brand-navy px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 shadow-sm"
          >
            <Phone className="w-5 h-5" /> Enquiry: {PHONE_NUMBER}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
