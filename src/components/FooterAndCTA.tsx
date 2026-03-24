import { Table, Eye, Wallet, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const CommissionTable = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-12 flex items-center gap-4">
        <Table className="h-8 w-8 text-blue-600" />
        <h2 className="text-3xl font-bold">Comissão sobre Fechamento</h2>
      </div>
      
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500 uppercase font-semibold">
              <tr>
                <th className="px-6 py-4">Serviço</th>
                <th className="px-6 py-4">Ticket Médio</th>
                <th className="px-6 py-4">Comissão</th>
                <th className="px-6 py-4">Por que?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-6 font-bold text-slate-900">Site / Landing Page</td>
                <td className="px-6 py-6 text-slate-600">R$ 697 − R$ 997</td>
                <td className="px-6 py-6">
                  <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                    20% a 25%
                  </span>
                </td>
                <td className="px-6 py-6 text-slate-500">É um serviço de entrega única (setup único).</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-6 font-bold text-slate-900">Agente de IA (WhatsApp)</td>
                <td className="px-6 py-6 text-slate-600">R$ 1.197 + Mensalidade</td>
                <td className="px-6 py-6">
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10">
                      15% (Setup)
                    </span>
                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                      10% Recorrência
                    </span>
                  </div>
                </td>
                <td className="px-6 py-6 text-slate-500">Se o cliente comprar uma manutenção mensal da IA = 10% de recorrência sobre o valor da mensalidade.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
);

export const ModelAndPayment = () => (
  <section className="py-16 bg-slate-50">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 flex items-center gap-3 text-blue-600">
            <Eye className="h-6 w-6" />
            <h3 className="text-xl font-bold">Transparência</h3>
          </div>
          <p className="text-slate-600">
            Iremos usar um <strong>CRM simples</strong> para vermos o status de cada "lead" e garantir que você acompanhe cada etapa do processo.
          </p>
        </div>
        <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 flex items-center gap-3 text-green-600">
            <Wallet className="h-6 w-6" />
            <h3 className="text-xl font-bold">Seu Pagamento</h3>
          </div>
          <p className="text-slate-600">
            Recebo os valores via conta PJ. Assim que o saldo estiver disponível para saque você receberá os valores via <strong>Pix</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export const CTA = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Vamos fechar essa parceria?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4 mb-10">
        <div className="flex items-center gap-2 text-slate-600">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span>Indicação Simples</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span>Comissão Garantida</span>
        </div>
        <div className="flex items-center gap-2 text-slate-600">
          <CheckCircle2 className="h-5 w-5 text-green-500" />
          <span>Relatórios em Tempo Real</span>
        </div>
      </div>

      <motion.a
        href="https://api.whatsapp.com/send/?phone=554784641781&text=Eu+topo+fazer+a+parceria&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-5 text-xl font-bold text-white shadow-xl shadow-blue-200 transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-300"
      >
        Eu Topo a Parceria
        <ArrowRight className="h-6 w-6" />
      </motion.a>
    </div>
  </section>
);

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white py-12">
    <div className="container mx-auto px-4 text-center">
      <img 
        src="https://i.postimg.cc/8cj8rX18/Adnove_Fundo_branco.png" 
        alt="Adnove Logo" 
        className="mx-auto mb-6 h-[68px] w-auto grayscale opacity-50 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
        referrerPolicy="no-referrer"
      />
      <p className="text-sm text-slate-500">
        © 2026 Adnove Marketing Digital. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);
