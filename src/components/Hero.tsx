import { motion } from 'motion/react';

export const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-2">
        <img 
          src="https://i.postimg.cc/8cj8rX18/Adnove_Fundo_branco.png" 
          alt="Adnove Logo" 
          className="h-[84px] w-auto animate-float"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="hidden md:block">
        <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Proposta de Parceria Estratégica</span>
      </div>
    </div>
  </header>
);

export const Hero = () => (
  <section className="relative overflow-hidden bg-white py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
        >
          🎯 André - João
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"
        >
          Proposta de Parceria de <span className="text-blue-600">Indicação de Leads</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
        >
          Transforme os leads que não fecharam negócio com você em uma nova fonte de receita recorrente.
        </motion.p>
      </div>
    </div>
    <div className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl" aria-hidden="true">
      <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }}></div>
    </div>
  </section>
);
