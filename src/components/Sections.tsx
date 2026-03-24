import { Target, Briefcase, Lightbulb, Globe, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export const Context = () => (
  <section className="py-16 bg-slate-50 animate-fade-in">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-12 md:grid-cols-2">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="mb-4 text-2xl font-bold">O Conceito</h2>
          <p className="text-slate-600 leading-relaxed">
            Indicação de leads que não fecharam negócio com você. A ideia é aproveitar potenciais clientes (como integradores ou profissionais do setor) que ainda possuem uma presença digital ruim.
          </p>
        </motion.div>

        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 20 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
            <Briefcase className="h-6 w-6" />
          </div>
          <h2 className="mb-4 text-2xl font-bold">Público-alvo</h2>
          <p className="text-slate-600 leading-relaxed">
            Leads que você atende, mas que não compram os cursos do <strong>‘Canal Solar’</strong> por precisarem, primeiro, estruturar o próprio marketing e faturamento.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Justification = () => (
  <section className="py-16 bg-white animate-fade-in">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center rounded-3xl bg-slate-900 px-8 py-12 text-center text-white shadow-xl md:px-16">
        <Lightbulb className="mb-6 h-12 w-12 text-yellow-400" />
        <h2 className="mb-6 text-3xl font-bold">Minha Justificativa</h2>
        <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
          "Muitos desses profissionais precisam <strong>'se vender melhor'</strong> antes de investir em conhecimentos técnicos específicos como ‘armazenamento’."
        </p>
      </div>
    </div>
  </section>
);

export const Services = () => (
  <section className="py-16 bg-slate-50 animate-fade-in">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Serviços Oferecidos</h2>
        <p className="mt-4 text-slate-600">Soluções digitais focadas em conversão e automação.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Criação de Sites ou Landing Pages</h3>
            <p className="mt-2 text-slate-600">Estruturas profissionais otimizadas para converter visitantes em clientes reais.</p>
          </div>
        </div>
        <div className="flex gap-6 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
            <Bot className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Agentes de IA no WhatsApp</h3>
            <p className="mt-2 text-slate-600">Atendimento humanizado 24h por dia, qualificando leads e tirando dúvidas automaticamente.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
