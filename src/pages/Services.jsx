import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <main className="font-sans bg-white text-gray-900">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-24 px-6 lg:px-20 border-b border-gray-100 flex flex-col items-center justify-center text-center">
        {/* Background Overlay Image (faded & grayscale) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10] grayscale">
           <img src="/service-hero-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            Comprehensive research and strategy solutions<br className="hidden md:block" /> to empower your political journey.
          </p>
        </motion.div>
      </section>

      {/* Services List Section */}
      <section className="py-16 px-6 lg:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-10">
          
          {/* Row 1: Ground Surveys */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-10 border-b border-gray-100">
            {/* Icon Box */}
            <div className="w-24 h-24 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                  </svg>
                </span>
                Ground Surveys
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-sm md:text-[15px]">
                We conduct door-to-door and booth-level surveys to understand voter sentiment, local issues, and development priorities with accuracy.
              </p>
              <ul className="space-y-3.5">
                {['Household level interaction', 'Booth level coverage', 'Real-time data collection'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[13.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[200px] md:h-[240px]">
                <img src="/work-1.png" alt="Ground Surveys" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Row 2: Political Research */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12 pb-10 border-b border-gray-100">
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[200px] md:h-[240px]">
                <img src="/work-2.png" alt="Political Research" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Icon Box */}
            <div className="w-24 h-24 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </span>
                Political Research
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-sm md:text-[15px]">
                In-depth research on constituency dynamics, caste combinations, issue mapping, and electoral trends.
              </p>
              <ul className="space-y-3.5">
                {['Constituency Analysis', 'Caste & Community Mapping', 'Issue & Development Analysis'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[13.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 3: Voter Data Analysis */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 pb-10 border-b border-gray-100">
            {/* Icon Box */}
            <div className="w-24 h-24 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
                  </svg>
                </span>
                Voter Data Analysis
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-sm md:text-[15px]">
                We convert raw data into meaningful insights to help you understand voters better and plan effectively.
              </p>
              <ul className="space-y-3.5">
                {['Data Processing', 'Sentiment Analysis', 'Insightful Reporting'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[13.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[200px] md:h-[240px]">
                <img src="/work-4.png" alt="Voter Data Analysis" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Row 4: Campaign Strategy */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image */}
            <div className="w-full lg:w-[40%]">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[200px] md:h-[240px]">
                <img src="/work-3.png" alt="Campaign Strategy" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Icon Box */}
            <div className="w-24 h-24 shrink-0 rounded-2xl border-2 border-red-100 bg-white shadow-sm flex items-center justify-center text-[#c8102e] hidden lg:flex">
               <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
               </svg>
            </div>
            {/* Text Content */}
            <div className="flex-1 flex flex-col items-start text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-4 tracking-tight">
                <span className="lg:hidden w-12 h-12 bg-[#c8102e] text-white rounded-lg flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                </span>
                Campaign Strategy
              </h3>
              <p className="text-gray-700 font-medium leading-relaxed mb-6 text-sm md:text-[15px]">
                Strategic planning based on ground intelligence to improve outreach, messaging, and voter targeting.
              </p>
              <ul className="space-y-3.5">
                {['Campaign Planning', 'Voter Targeting', 'Message Development'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-800 font-semibold text-[13.5px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
{/* Bottom CTA Banner */}
      <section className="bg-[#c8102e] py-14 px-6 lg:px-20 mb-20 md:mb-0 max-w-7xl mx-auto rounded-none lg:rounded-2xl my-10 lg:my-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl text-white font-bold tracking-tight leading-tight mb-2">
              Need a custom research or strategy solution?
            </h3>
            <p className="text-red-100 text-lg font-medium">
              Let's discuss how we can help you.
            </p>
          </div>
          <Link to="/contact" className="w-full md:w-auto bg-white hover:bg-gray-100 text-[#c8102e] font-bold py-4 px-10 rounded transition-colors whitespace-nowrap text-lg shadow-lg">
            Request a Meeting
          </Link>
        </div>
      </section>

    </main>
  )
}
