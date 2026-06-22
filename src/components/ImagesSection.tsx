import { motion } from "motion/react";

type ImagesSectionProps = {
  customImages?: {
    trainer: string;
    session: string;
    workspace: string;
    community: string;
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
      src: customImages?.trainer || "/trainer.png"
    },
    {
      id: 'session',
      label: "Training Session",
      desc: "Engaging students in practical, real-world applications.",
      color: "bg-indigo-600",
      icon: "👥",
      src: customImages?.session || "/session.png"
    },
    {
      id: 'workspace',
      label: "Brand Workspace",
      desc: "AHAVA DIGITAL: Building digital futures.",
      color: "bg-sky-600",
      icon: "💻",
      src: customImages?.workspace || "/workspace.png"
    },
    {
      id: 'community',
      label: "Make Money with Your Phone",
      desc: "Anyone can start instantly with no laptop needed.",
      color: "bg-emerald-600",
      icon: "📱",
      src: customImages?.community || "/community.png"
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
            {/* The image will use fallback styles if not found, but we specify to load it */}
            <div className="aspect-video md:aspect-[4/5] w-full bg-gray-100 relative">
              {/* Note: we are loading these from the public folder. Until uploaded, they show standard missing image icons */}
              <img 
                src={img.src} 
                alt={img.label} 
                className="absolute inset-0 w-full h-full object-cover text-[0px] before:content-[''] before:absolute before:inset-0 before:bg-gray-200" 
                onError={(e) => {
                  /* Fallback to generic color block if image isn't uploaded yet */
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.classList.remove('bg-gray-100');
                  target.parentElement!.className += ` ${img.color} flex flex-col justify-center items-center p-6 text-center shadow-inner`;
                  target.parentElement!.innerHTML = `<span class="text-5xl mb-4 opacity-90 block">${img.icon}</span><span class="text-white/40 font-mono tracking-widest text-sm uppercase">[${img.label}]</span>`;
                }}
              />
            </div>
            
            {/* Overlay description */}
            <div className="absolute inset-x-0 bottom-0 py-4 px-6 bg-gradient-to-t from-gray-900/90 to-gray-900/0 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
               <p className="font-medium text-sm leading-snug drop-shadow-md relative z-10">{img.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
