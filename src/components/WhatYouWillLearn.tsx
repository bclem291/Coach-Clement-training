import { motion } from "motion/react";
import { Lightbulb, MessagesSquare, Laptop, ShoppingBag, PenTool, TrendingUp, HandCoins, Zap } from "lucide-react";

export default function WhatYouWillLearn() {
  const items = [
    { text: "How AI can help you make money online in 2026", icon: TrendingUp },
    { text: "How to use ChatGPT for income generation", icon: MessagesSquare },
    { text: "How to create and sell digital products using AI", icon: ShoppingBag },
    { text: "How to do freelancing using AI tools", icon: Laptop },
    { text: "How to generate content, ads, and designs with AI", icon: PenTool },
    { text: "How to start an online business with zero capital", icon: HandCoins },
    { text: "How to attract clients using AI systems", icon: Lightbulb },
    { text: "Real-life AI income methods that work today", icon: Zap },
  ];

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm border-y border-sky-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">What You Will Learn</h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-sky-50 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-blue-600 mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-brand-navy font-semibold leading-snug">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
