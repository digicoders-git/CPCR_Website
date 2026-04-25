import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 lg:px-20 border-b border-gray-100 flex flex-col items-center text-center overflow-hidden">
        {/* Full Background Image Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
           {/* Darker or faded overlay depending on the feel */}
           <div className="absolute inset-0 bg-white/80 z-10"></div>
           <img src="/home-hero.png" alt="Background" className="w-full h-full object-cover grayscale opacity-50 relative z-0" />
        </div>

        <div className="max-w-4xl mx-auto relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-[#c8102e] font-extrabold tracking-widest text-[11px] md:text-[13px] uppercase mb-4 block drop-shadow-sm">
              WELCOME TO CPCR
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold text-gray-900 mb-6 drop-shadow-sm">
              Data-Driven Political Strategy & Ground Intelligence
            </h1>
            <div className="w-16 h-[4px] bg-[#c8102e] mb-8 mx-auto" />
            <p className="text-gray-800 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed font-medium mx-auto drop-shadow-sm">
              CPCR delivers accurate ground surveys, voter insights, and strategic political research to help leaders make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="w-full sm:w-auto bg-[#c8102e] hover:bg-red-800 text-white font-bold py-4 px-8 rounded flex items-center justify-center gap-3 transition-colors shadow-md group">
                Request Meeting
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded flex items-center justify-center gap-3 transition-all group shadow-sm">
                View Our Work
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[13px] font-extrabold text-gray-900 uppercase tracking-widest mb-10">OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 mb-6 text-[#c8102e]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-gray-900 mb-4">Ground Surveys</h3>
              <p className="text-gray-500 text-sm leading-[1.6] font-medium">Door-to-door and booth-level surveys to capture real voter sentiment and local issues.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 mb-6 text-[#c8102e]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-gray-900 mb-4">Political Research</h3>
              <p className="text-gray-500 text-sm leading-[1.6] font-medium">In-depth constituency analysis, caste dynamics, issue mapping, and electoral trend studies.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 mb-6 text-[#c8102e]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-gray-900 mb-4">Voter Data Analysis</h3>
              <p className="text-gray-500 text-sm leading-[1.6] font-medium">Transforming raw data into actionable insights using structured analytics.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 mb-6 text-[#c8102e]">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>
              <h3 className="text-[1.1rem] font-bold text-gray-900 mb-4">Campaign Strategy</h3>
              <p className="text-gray-500 text-sm leading-[1.6] font-medium">Strategic planning based on real data to improve outreach, messaging and voter targeting.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose CPCR Section */}
      <section className="bg-gray-50 py-16 px-6 lg:px-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-16 xl:gap-20 items-center">
          
          {/* Left Column */}
          <div className="w-full xl:w-[35%]">
            <h2 className="text-[13px] font-extrabold text-gray-900 uppercase tracking-widest mb-10">WHY CHOOSE CPCR?</h2>
            <ul className="space-y-5">
              {['Ground-level data collection', 'Real voter interaction', 'Booth-level insights', 'Structured reporting', 'Data-backed decision making'].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] shrink-0">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-bold text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Column (Flow Diagram) */}
          <div className="w-full xl:w-[65%]">
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-8 md:p-12">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-2 relative">
                
                {/* Connecting Line for mobile (hidden on sm+) */}
                <div className="sm:hidden absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2 z-0"></div>

                <div className="flex flex-col items-center relative z-10 bg-white py-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#c8102e] text-white flex items-center justify-center shadow-lg mb-5">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="font-extrabold text-gray-900 text-sm md:text-base">Survey</h4>
                    <p className="text-gray-500 text-[11px] md:text-xs font-medium">Data Collection</p>
                  </div>
                </div>

                <div className="hidden sm:flex text-gray-400 items-center justify-center w-8">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <div className="flex flex-col items-center relative z-10 bg-white py-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shadow-lg mb-5">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="font-extrabold text-gray-900 text-sm md:text-base">Data</h4>
                    <p className="text-gray-500 text-[11px] md:text-xs font-medium">Processing</p>
                  </div>
                </div>

                <div className="hidden sm:flex text-gray-400 items-center justify-center w-8">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <div className="flex flex-col items-center relative z-10 bg-white py-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#c8102e] text-white flex items-center justify-center shadow-lg mb-5">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="font-extrabold text-gray-900 text-sm md:text-base">Analysis</h4>
                    <p className="text-gray-500 text-[11px] md:text-xs font-medium">& Insights</p>
                  </div>
                </div>

                <div className="hidden sm:flex text-gray-400 items-center justify-center w-8">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>

                <div className="flex flex-col items-center relative z-10 bg-white py-2">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shadow-lg mb-5">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <h4 className="font-extrabold text-gray-900 text-sm md:text-base">Strategy</h4>
                    <p className="text-gray-500 text-[11px] md:text-xs font-medium">& Action</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Snapshot Section */}
      <section className="bg-white py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[13px] font-extrabold text-gray-900 uppercase tracking-widest mb-10">OUR WORK SNAPSHOT</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="h-56 w-full bg-gray-200 overflow-hidden">
                <img src="/work-1.png" alt="Constituency Survey" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-extrabold text-gray-900 text-base mb-1">Constituency Survey</h4>
                <p className="text-gray-500 text-[13px] font-medium">Rajasthan | 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="h-56 w-full bg-gray-200 overflow-hidden">
                <img src="/work-2.png" alt="Voter Opinion Study" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-extrabold text-gray-900 text-base mb-1">Voter Opinion Study</h4>
                <p className="text-gray-500 text-[13px] font-medium">Uttar Pradesh | 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="h-56 w-full bg-gray-200 overflow-hidden">
                <img src="/work-3.png" alt="Booth Level Survey" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-extrabold text-gray-900 text-base mb-1">Booth Level Survey</h4>
                <p className="text-gray-500 text-[13px] font-medium">Madhya Pradesh | 2024</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group">
              <div className="h-56 w-full bg-gray-200 overflow-hidden">
                <img src="/work-4.png" alt="Data Analysis Report" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h4 className="font-extrabold text-gray-900 text-base mb-1">Data Analysis Report</h4>
                <p className="text-gray-500 text-[13px] font-medium">Multiple Constituencies</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#c8102e] py-14 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 lg:gap-8 w-full lg:w-auto">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-tight leading-tight">
              Make decisions based on data,<br className="hidden md:block lg:hidden"/> not assumptions.
            </h3>
          </div>
          <Link to="/contact" className="w-full lg:w-auto bg-transparent border-[3px] border-white hover:bg-white hover:text-[#c8102e] text-white font-bold py-4 px-10 rounded transition-colors whitespace-nowrap text-center text-lg">
            Request a Meeting
          </Link>
        </div>
      </section>
    </main>
  )
}
