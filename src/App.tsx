/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Hero } from './components/Hero';
import { Context, Justification, Services } from './components/Sections';
import { CommissionTable, ModelAndPayment, CTA, Footer } from './components/FooterAndCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Context />
        <Justification />
        <Services />
        <CommissionTable />
        <ModelAndPayment />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
