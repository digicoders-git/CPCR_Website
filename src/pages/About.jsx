import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="font-sans bg-white text-gray-900 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-24 px-6 text-center border-b border-gray-100 mb-20 flex flex-col items-center justify-center">
        {/* Background Overlay Image (faded & grayscale) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10] grayscale">
           <img src="/service-hero-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">About CPCR</h1>
          <p className="text-gray-500 font-medium text-lg mb-6">Delivering Accurate Research. Driving Better Decisions.</p>
          <div className="w-12 h-[3px] bg-[#c8102e] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            
            <div className="space-y-5 text-gray-700 font-medium leading-relaxed text-[15px]">
              <p>
                At the Centre for Political and Civic Research (CPCR), we believe that successful political campaigns are grounded in a deep, evidence-based understanding of the electorate. Guided by our core philosophy, "The 360° View of Public Opinion," we empower political leaders and organizations with a comprehensive, ground-level perspective of public opinion.
              </p>
              <p>
                We are a modern political consulting firm staffed by veteran professionals in election strategy, voter research, and campaign management. Our work transcends surface-level data to capture the nuanced opinions of the electorate through rigorously crafted surveys, in-depth opinion polls, and comprehensive on-ground research. By engaging with diverse voices across regions, communities, and demographics, we uncover the undercurrents that shape voter behavior.
              </p>
              <p>
                We transform real-world data into actionable insights that sharpen messaging, refine campaign strategy, and ensure resources are allocated where they will achieve the greatest impact. Every piece of advice we provide is anchored in rigorous evidence, accuracy, and ground-level realities—eschewing guesswork and conjecture.
              </p>
              <p>
                At the Centre for Political and Civic Research, we go beyond mere analysis of public opinion—we connect the dots to offer a true 360° perspective that drives informed decision-making, enhances campaign effectiveness, and delivers measurable electoral victories. As your trusted advisor, we are dedicated to building political campaigns rooted in clarity, credibility, and strategic insight.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-[500px]">
              <img src="/about.png" alt="About CPCR" className="w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 border-y border-gray-100 py-12 px-4 md:px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x-0 md:divide-x divide-gray-200">
            
            <div className="flex flex-col items-center text-center px-2 md:px-4">
              <h3 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#c8102e] mb-2">50+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Constituencies<br/>Covered</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-2 md:px-4">
              <h3 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#c8102e] mb-2">1,00,000+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Surveys<br/>Conducted</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-2 md:px-4 mt-6 md:mt-0">
              <h3 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#c8102e] mb-2">250+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Field<br/>Investigators</p>
            </div>
            
            <div className="flex flex-col items-center text-center px-2 md:px-4 mt-6 md:mt-0">
              <h3 className="text-[28px] sm:text-4xl md:text-5xl font-extrabold text-[#c8102e] mb-2">200+</h3>
              <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Reports<br/>Delivered</p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 mb-20">
        <div className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden flex flex-col md:flex-row items-stretch">
          
          {/* Mission Text */}
          <div className="w-full md:w-1/2 p-10 lg:p-16 flex items-center">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 shrink-0 text-[#c8102e]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="#c8102e"/>
                  <circle cx="12" cy="12" r="3" fill="#c8102e" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  To provide accurate ground intelligence and political research that empowers leaders to make informed decisions and create meaningful impact.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Image */}
          <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-gray-200">
            <img src="/about-mission.png" alt="Our Mission" className="w-full h-full object-cover" />
          </div>

        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="bg-white pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-10 px-6 text-white text-center shadow-md">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-wide">Why Partner With Us?</h2>
            <p className="text-red-50 text-xl md:text-2xl font-medium opacity-90">
              Research-led strategy. Execution-driven outcomes.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <div className="h-px bg-gray-300 w-32 md:w-48"></div>
            <h3 className="text-gray-800 font-bold text-xl md:text-2xl uppercase tracking-[0.2em]">THANK YOU</h3>
            <div className="h-px bg-gray-300 w-32 md:w-48"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-200">
             
             {/* Column 1 */}
             <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
               <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-[#c8102e] flex items-center justify-center text-white shadow-sm mb-6 relative hover:scale-105 transition-transform">
                 <div className="absolute inset-1.5 rounded-full border border-white/50"></div>
                 <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
                 </svg>
               </div>
               <h4 className="text-gray-900 font-bold text-xl mb-6">Strategic Expertise</h4>
               <ul className="text-gray-700 text-[15px] font-medium leading-relaxed text-left w-full space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Data-driven campaign strategies</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Deep ground intelligence integration</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Precision targeting for electoral success</span>
                 </li>
               </ul>
             </div>

             {/* Column 2 */}
             <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
               <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-[#c8102e] flex items-center justify-center text-white shadow-sm mb-6 relative hover:scale-105 transition-transform">
                 <div className="absolute inset-1.5 rounded-full border border-white/50"></div>
                 <svg className="w-12 h-12 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm0-14v4h2V3h-2zm-1 6h4v6h-4V9z"/>
                    <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v2c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V8zm-11 12.93V20c-3.99-1.04-7-4.9-7-8.99V9l8-4 8 4v2.01c0 4.09-3.01 7.95-7 8.99v1.93z"/>
                 </svg>
               </div>
               <h4 className="text-gray-900 font-bold text-xl mb-6">Trust & Reliability</h4>
               <ul className="text-gray-700 text-[15px] font-medium leading-relaxed text-left w-full space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Transparent and accountable processes</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Dedicated team with consistent support</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Long-term partnership approach</span>
                 </li>
               </ul>
             </div>

             {/* Column 3 */}
             <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
               <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-[#c8102e] flex items-center justify-center text-white shadow-sm mb-6 relative hover:scale-105 transition-transform">
                 <div className="absolute inset-1.5 rounded-full border border-white/50"></div>
                 <svg className="w-12 h-12 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                 </svg>
               </div>
               <h4 className="text-gray-900 font-bold text-xl mb-6">Execution Excellence</h4>
               <ul className="text-gray-700 text-[15px] font-medium leading-relaxed text-left w-full space-y-4">
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Seamless on-ground implementation</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Strong coordination across teams</span>
                 </li>
                 <li className="flex items-start gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                   <span>Result-oriented campaign delivery</span>
                 </li>
               </ul>
             </div>

          </div>

          <div className="mt-24">
            <div className="flex items-center justify-center gap-6 mb-12">
              <div className="h-px bg-gray-300 w-16 md:w-32"></div>
              <h3 className="text-gray-800 font-bold text-[13px] md:text-lg uppercase tracking-widest text-center whitespace-nowrap">
                YOUR SUCCESS IS OUR ONLY PRIORITY
              </h3>
              <div className="h-px bg-gray-300 w-16 md:w-32"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
               <img src="/logo.png" alt="CPCR Logo" className="h-24 w-auto" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-700 font-medium text-[15px] md:text-lg mt-8">
               <a href="https://cpcr.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#c8102e] transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                 </svg>
                 <span>cpcr.in</span>
               </a>
               <span className="text-gray-300 hidden md:block">|</span>
               <a href="mailto:connect@cpcr.in" className="flex items-center gap-2 hover:text-[#c8102e] transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                 </svg>
                 <span>connect@cpcr.in</span>
               </a>
               <span className="text-gray-300 hidden md:block">|</span>
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
                 <span>
                   {/* <a href="tel:7007700557" className="hover:text-[#c8102e] transition-colors">7007700557</a>
                   {' | '} */}
                   <a href="tel:9936599267" className="hover:text-[#c8102e] transition-colors">9936599267</a>
                 </span>
               </div>
            </div>

          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#c8102e] rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-8 md:px-12 shadow-xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-tight text-center md:text-left">
            Let's work together for better political outcomes.
          </h3>
          <Link to="/contact" className="w-full md:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#c8102e] text-white font-bold py-3.5 px-8 rounded transition-colors whitespace-nowrap text-center text-lg shrink-0">
            Request a Meeting
          </Link>
        </div>
      </section>

    </main>
  )
}
