import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { TARGET_DATE } from "../constants";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const target = new Date(TARGET_DATE).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isClient) return null;

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-8 border border-sky-100 text-center"
      >
        <h2 className="text-2xl font-bold text-brand-navy mb-2">Training Begins In:</h2>
        <p className="text-brand-red mb-8 font-black text-2xl uppercase tracking-wide">📅 Sunday, 30th August 2026</p>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {timeBlocks.map((block) => (
            <div key={block.label} className="flex flex-col items-center">
              <div className="bg-sky-50 text-brand-navy w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-inner mb-3 border border-sky-100">
                <span className="text-3xl sm:text-4xl font-black font-mono tracking-tighter">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="text-brand-red font-bold uppercase tracking-wider text-sm">
                {block.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
