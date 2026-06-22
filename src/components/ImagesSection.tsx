import { motion } from "motion/react";

type ImagesSectionProps = {
  customImages: {
    trainer: string;
    session: string;
    workspace: string;
    community?: string;
  };
};

export default function ImagesSection({ customImages }: ImagesSectionProps) {
  const images = [
    {
      id: 'trainer',
      label: "Trainer Portrait",
      desc: "Coach Clement sharing powerful AI insights.",
      color: "bg-blue-600",
      icon: "👔",
      src: customImages.trainer
    },
    {
      id: 'session',
      label: "Training Session",
      desc: "Engaging students in practical, real-world applications.",
      color: "bg-indigo-600",
      icon: "👥",
      src: customImages.session
    },
    {
      id: 'workspace',
      label: "Brand Workspace",
      desc: "AHAVA DIGITAL: Building digital futures.",
      color: "bg-sky-600",
      icon: "💻",
      src: customImages.workspace
    },
    {
      id: 'community',
      label: "Community & Support",
      desc: "Vibrant student community interacting.",
      color: "bg-emerald-600",
      icon: "🤝",
      src: customImages.community
    }
  ];

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
       <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Glimpse Inside</h2>
          <div className="h-1 w-20 bg-brand-red mx-auto rounded-full"></div>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <motion.div 
            key={i}
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: i * 0.15 }}
             className="w-full relative group overflow-hidden rounded-2xl shadow-md border border-sky-100 bg-white"
          >
            {img.src ? (
              <div className="aspect-video md:aspect-[4/5] w-full bg-gray-100">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className={`aspect-video md:aspect-[4/5] ${img.color} flex flex-col justify-center items-center p-6 text-center shadow-inner`}>
                <span className="text-5xl mb-4 opacity-90 block">{img.icon}</span>
                <span className="text-white/40 font-mono tracking-widest text-sm uppercase">[{img.label}]</span>
              </div>
            )}
            
            {/* Overlay description */}
            <div className="absolute inset-x-0 bottom-0 py-4 px-6 bg-gradient-to-t from-gray-900/90 to-gray-900/0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <p className="font-medium text-sm leading-snug">{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
