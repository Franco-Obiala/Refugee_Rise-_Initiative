import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'expansion' | 'construction'>('expansion');

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden"
          >
            {/* Tabs */}
            <div className="flex border-b border-slate-700">
              <button 
                onClick={() => setActiveTab('expansion')}
                className={`flex-1 py-4 text-sm font-semibold transition-all ${activeTab === 'expansion' ? 'bg-slate-700 text-emerald-400 border-b-2 border-emerald-400' : 'text-gray-400 hover:text-white'}`}
              >
                Business Expansion Agreement
              </button>
              <button 
                onClick={() => setActiveTab('construction')}
                className={`flex-1 py-4 text-sm font-semibold transition-all ${activeTab === 'construction' ? 'bg-slate-700 text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-white'}`}
              >
                Construction Contract
              </button>
            </div>

            <div className="p-8 md:p-12 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <AnimatePresence mode="wait">
                {activeTab === 'expansion' ? (
                  <motion.div
                    key="expansion"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="prose prose-invert max-w-none"
                  >
                    <div className="text-center mb-8">
                      <h1 className="text-2xl font-bold text-white mb-2">BUSINESS EXPANSION SUPPORT AGREEMENT</h1>
                      <p className="text-emerald-400 font-medium">Refugee Rise: Building Shops, Building Futures</p>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p>This Agreement is made on this ___ day of ______(Year), by and between:</p>
                      
                      <div className="grid md:grid-cols-2 gap-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <div>
                          <h3 className="text-white font-bold mb-2">1. Financier (Lender):</h3>
                          <p>Name: _______________________________</p>
                          <p>Address: ____________________________</p>
                          <p>Phone: _____________________________</p>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-2">2. Beneficiary (Business Owner):</h3>
                          <p>Name: _______________________________</p>
                          <p>Business Name (if any): _______________</p>
                          <p>Business Location: ____________________</p>
                          <p>Phone: _____________________________</p>
                        </div>
                      </div>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">1. Purpose</h3>
                        <p>This Agreement sets forth the terms under which the Financier will lend funds to the Beneficiary for the purpose of expanding their business, with the understanding that the loan will be repaid with a 40% profit.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">2. Loan Details</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Total Loan Amount: Ksh ______________</li>
                          <li>Purpose of Loan: ____________________ (e.g., to purchase refrigerator, maize, stock, etc.)</li>
                          <li>Agreed profit: 40% of the loan amount</li>
                          <li>Total Repayment Amount: Ksh ______________ (Loan x 140%)</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">3. Repayment Terms</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Repayment Schedule: Weekly / Monthly / Lump Sum</li>
                          <li>Final Due Date: _______________________</li>
                          <li>Payment Method: Cash / Mobile Transfer / Other: ___________</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">4. Use of Funds</h3>
                        <p>The funds provided must strictly be used for the intended business purpose stated above. Misuse of funds will result in immediate cancellation of the agreement and legal recovery procedures.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">5. Ownership of Assets</h3>
                        <p>Any assets (e.g., refrigerator) purchased using the loan may remain the property of the Financier until the full repayment is made. Upon repayment of the full amount (Loan + 40% profit), ownership is transferred to the Beneficiary.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">6. Default Clause</h3>
                        <p>If the Beneficiary fails to repay on time, the Financier reserves the right to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Repossess business assets bought with the loan, or</li>
                          <li>Engage a community mediator to resolve the issue amicably before taking legal action.</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">7. Empowerment Clause</h3>
                        <p>This Agreement is part of a larger community empowerment effort and aims to provide sustainable business opportunities to refugees.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">8. Entire Agreement</h3>
                        <p>This Agreement represents the entire understanding and may only be amended by written consent of both parties.</p>
                      </section>

                      <div className="mt-12 pt-8 border-t border-slate-700 grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                          <p className="border-b border-slate-600 pb-2">Financier Signature</p>
                          <p>Date: ___________________</p>
                        </div>
                        <div className="space-y-4">
                          <p className="border-b border-slate-600 pb-2">Beneficiary Signature</p>
                          <p>Date: ___________________</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="construction"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="prose prose-invert max-w-none"
                  >
                    <div className="text-center mb-8">
                      <h1 className="text-2xl font-bold text-white mb-2">CONTRACT AGREEMENT</h1>
                      <p className="text-blue-400 font-medium">Refugee Rise Initiative: Building Shops, Building Futures</p>
                    </div>

                    <div className="space-y-6 text-gray-300 leading-relaxed">
                      <p>This Agreement is made on date ____________, by and between:</p>

                      <div className="grid md:grid-cols-2 gap-8 bg-slate-900/50 p-6 rounded-xl border border-slate-700">
                        <div>
                          <h3 className="text-white font-bold mb-2">1. Financier:</h3>
                          <p>Name: ___________________________</p>
                          <p>Address: _________________________</p>
                          <p>Phone: __________________________</p>
                        </div>
                        <div>
                          <h3 className="text-white font-bold mb-2">2. Beneficiary (Landowner):</h3>
                          <p>Name: ___________________________</p>
                          <p>Plot Location: ____________________</p>
                          <p>Phone: __________________________</p>
                        </div>
                      </div>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">1. Purpose</h3>
                        <p>This Agreement sets forth the terms under which the Financier will fund the construction of a shop on the Beneficiary's land, to be repaid with a 40% profit. The Beneficiary may either rent the shop out or use it for personal business, as long as agreed repayment terms are honoured.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">2. Scope of Work</h3>
                        <p>The Financier shall:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Fully fund and oversee the construction of a shop on the Beneficiary’s land.</li>
                          <li>Provide detailed invoices of construction costs.</li>
                          <li>Ensure transparency and quality during the construction process.</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">3. Financial Terms</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Total construction cost: Ksh ______________</li>
                          <li>Agreed profit margin: 40% of the construction cost</li>
                          <li>Total repayment amount: Ksh ______________ (Construction Cost × 140%)</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">4. Profit Recovery Mechanism</h3>
                        <p>The Beneficiary may choose to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                          <li><strong>Rent out</strong> the shop, with rental income directed to the Financier until full repayment, or</li>
                          <li><strong>Operate a business</strong> in the shop and make regular repayments from business income.</li>
                          <li>Repayment must be completed within an agreed time frame: __________ months.</li>
                          <li>Ownership of the shop, including rights to lease or use, shall remain with the Financier until full repayment is made.</li>
                          <li>Upon full repayment, ownership and rental rights will be officially transferred to the Beneficiary.</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">5. Responsibilities of the Beneficiary</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Provide access and legal permission to construct on the designated land.</li>
                          <li>Use the shop responsibly for business or rental purposes.</li>
                          <li>Avoid selling, leasing, or transferring the land or shop until repayment is fully completed.</li>
                          <li>Commit to consistent repayment of the full agreed amount.</li>
                        </ul>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">6. Ownership Clause</h3>
                        <p>All assets (including the constructed shop) remain under the ownership of the Financier until the total agreed repayment (Construction Cost + 40%) has been received. Ownership shall be transferred through a signed handover agreement upon full payment.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">7. Termination</h3>
                        <p>This Agreement shall terminate upon full repayment and transfer of ownership. Early termination may occur only by mutual written agreement of both parties.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">8. Dispute Resolution</h3>
                        <p>In the event of disagreement, the parties agree to first seek mediation. If mediation fails, the matter shall be resolved by arbitration in accordance with local laws.</p>
                      </section>

                      <section>
                        <h3 className="text-white font-bold text-lg mb-2">9. Miscellaneous</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>This Agreement is the full understanding between both parties.</li>
                          <li>Any amendments must be written and signed by both parties.</li>
                          <li>This Agreement is governed by the laws of Kenya.</li>
                        </ul>
                      </section>

                      <div className="mt-12 pt-8 border-t border-slate-700 grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                          <p className="border-b border-slate-600 pb-2">Financier Signature</p>
                          <p>Date: ___________________</p>
                        </div>
                        <div className="space-y-4">
                          <p className="border-b border-slate-600 pb-2">Beneficiary Signature</p>
                          <p>Date: ___________________</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="bg-slate-900/80 p-6 border-t border-slate-700 flex justify-center">
               <button 
                onClick={() => window.print()}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                 </svg>
                 Print Contract
               </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsPage;
