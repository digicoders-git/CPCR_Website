import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function R({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const v = useInView(ref, { once: true, margin: '-40px' })
  return <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={v ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>{children}</motion.div>
}

export default function TermsAndConditions() {
  return (
    <main className="bg-white pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-white">
        {/* Floating Gray Dot (Top Left) */}
        <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-gray-200 hidden md:block" />

        <div className="w-full relative z-10">
          <div className="flex flex-col items-center text-center w-full">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center w-full mb-12 md:mb-16"
            >
              {/* Horizontal line from left extending to the center */}
              <div className="flex-1 h-[1px] bg-gray-200" />
              
              {/* Centered Breadcrumbs */}
              <div className="flex items-center gap-3 px-8">
                <Link to="/" className="text-[12px] font-medium tracking-[0.25em] uppercase text-black hover:text-gray-500 transition-colors">HOME</Link>
                <span className="text-gray-600 text-[12px]">/</span>
                <span className="text-[12px] tracking-[0.25em] uppercase text-gray-500 font-medium">TERMS AND CONDITIONS</span>
              </div>
              
              {/* Invisible right spacer to maintain perfect center alignment */}
              <div className="flex-1" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] lg:text-[5.5rem] leading-[1.1] tracking-tight"
            >
              <span className="font-medium text-black">Terms</span> <span className="font-light text-gray-600">and</span> <span className="font-medium text-black">Conditions</span>
            </motion.h1>
            
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-20">
          <R>
            <div className="relative pl-10 md:pl-16">
              {/* Floating Gray Dot next to the first paragraph */}
              <div className="absolute left-0 top-[4.5rem] w-4 h-4 rounded-full bg-gray-200" />
              
              <div className="space-y-8 text-[17px] text-gray-500 font-light">
                <p className="text-[15px] tracking-wide mb-8">Last updated: May 24, 2024</p>
                
                <p className="leading-loose">
                  Please read these terms and conditions carefully before using Our Service.
                </p>

                {/* Interpretation and Definitions */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Interpretation and Definitions</h2>
                  
                  <div className="relative">
                    {/* Floating Dot */}
                    <div className="absolute -left-10 md:-left-16 top-[4.5rem] w-4 h-4 rounded-full bg-gray-200" />
                    <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Interpretation</h3>
                    <p className="leading-loose mb-8">
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6 mt-12">Definitions</h3>
                  <p className="leading-loose mb-6">
                    For the purposes of these Terms and Conditions:
                  </p>

                  <ul className="space-y-4 list-none pl-0 mb-8">
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Country</span> refers to: Rajasthan, India
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Company</span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Centre for Political and Civic Research, Plot No. 100, Nemi Nagar Extension, Block A, Vaishali Nagar, Jaipur, Rajasthan 302021.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Service</span> refers to the Website.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Terms and Conditions</span> (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Third-party Social Media Service</span> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.
                    </li>
                    <li className="relative pl-6">
                      <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-red-600" />
                      <span className="font-medium text-gray-500">Website</span> refers to CPCR, accessible from <a href="https://cpcr.in/" target="_blank" rel="noreferrer" className="text-black font-medium hover:text-red-600 transition-colors">https://cpcr.in/</a>
                    </li>
                  </ul>
                </div>

                {/* Acknowledgment */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Acknowledgment</h2>
                  <p className="leading-loose mb-6">
                    These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                  </p>
                  
                  <div className="relative">
                    {/* Floating Dot */}
                    <div className="absolute -left-10 md:-left-16 top-2 w-4 h-4 rounded-full bg-gray-200" />
                    <p className="leading-loose mb-6">
                      Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                    </p>
                  </div>
                  
                  <p className="leading-loose mb-6">
                    By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                  </p>
                  <p className="leading-loose mb-6">
                    You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                  </p>
                  <p className="leading-loose mb-8">
                    Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.
                  </p>
                </div>

                {/* Links to Other Websites */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Links to Other Websites</h2>
                  <p className="leading-loose mb-6">
                    Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                  </p>
                  <p className="leading-loose mb-6">
                    The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
                  </p>
                  <p className="leading-loose mb-8">
                    We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.
                  </p>
                </div>

                {/* Termination */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Termination</h2>
                  <p className="leading-loose mb-6">
                    We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                  </p>
                  <p className="leading-loose mb-8">
                    Upon termination, Your right to use the Service will cease immediately.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div className="mt-20 relative">
                  <div className="relative">
                    {/* Floating Dot */}
                    <div className="absolute -left-10 md:-left-16 top-4 w-4 h-4 rounded-full bg-gray-200" />
                    <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Limitation of Liability</h2>
                  </div>
                  <p className="leading-loose mb-6">
                    Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                  </p>
                  <p className="leading-loose mb-6">
                    To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                  </p>
                  <p className="leading-loose mb-8">
                    Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                  </p>
                </div>

                {/* "AS IS" and "AS AVAILABLE" Disclaimer */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">"AS IS" and "AS AVAILABLE" Disclaimer</h2>
                  
                  <div className="relative">
                    {/* Floating Dot */}
                    <div className="absolute -left-10 md:-left-16 top-2 w-4 h-4 rounded-full bg-gray-200" />
                    <p className="leading-loose mb-6">
                      The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                    </p>
                  </div>
                  
                  <p className="leading-loose mb-6">
                    Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                  </p>
                  <p className="leading-loose mb-8">
                    Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                  </p>
                </div>

                {/* Governing Law */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Governing Law</h2>
                  <p className="leading-loose mb-8">
                    The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                  </p>
                </div>

                {/* Disputes Resolution */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Disputes Resolution</h2>
                  <p className="leading-loose mb-8">
                    If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                  </p>
                </div>

                {/* For European Union (EU) Users */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">For European Union (EU) Users</h2>
                  <p className="leading-loose mb-8">
                    If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.
                  </p>
                </div>

                {/* United States Legal Compliance */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">United States Legal Compliance</h2>
                  <p className="leading-loose mb-8">
                    You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.
                  </p>
                </div>

                {/* Severability and Waiver */}
                <div className="mt-20 relative">
                  <h2 className="text-3xl md:text-[2.25rem] font-medium text-black tracking-tight mb-8">Severability and Waiver</h2>
                  
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6">Severability</h3>
                  <p className="leading-loose mb-8">
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6 mt-12">Waiver</h3>
                  <p className="leading-loose mb-8">
                    Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                  </p>
                </div>
              </div>
            </div>
          </R>
        </div>
      </section>
    </main>
  )
}
