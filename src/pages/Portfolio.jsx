import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export const projects = [
  { id: 1, title: 'Assembly Election Survey', location: 'Rajasthan | 2025', category: 'Surveys', img: '/work-1.png', client: 'Independent Candidate', date: 'March 2025', description: 'A comprehensive constituency-wide survey conducted to understand voter sentiment and key local issues.' },
  { id: 2, title: 'Voter Sentiment Study', location: 'Uttar Pradesh | 2024', category: 'Research', img: '/work-2.png', client: 'Regional Party', date: 'December 2024', description: 'In-depth research into voter motivations and shifting community dynamics in Western UP.' },
  { id: 3, title: 'Youth Opinion Survey', location: 'Rajasthan | 2024', category: 'Surveys', img: '/work-3.png', client: 'Social Organization', date: 'October 2024', description: 'Mapping the aspirations and political inclinations of first-time voters in urban centers.' },
  { id: 4, title: 'Booth Level Survey', location: 'Madhya Pradesh | 2024', category: 'Surveys', img: '/work-3.png', client: 'Political Party', date: 'August 2024', description: 'Micro-level data collection at the booth level to identify swing voters and local influencers.' },
  { id: 5, title: 'Caste Dynamics Study', location: 'Haryana | 2025', category: 'Research', img: '/work-2.png', client: 'Academic Institution', date: 'January 2025', description: 'Sociological and political analysis of caste-based voting patterns and community alliances.' },
  { id: 6, title: 'Development Issues Survey', location: 'Delhi | 2024', category: 'Surveys', img: '/work-2.png', client: 'Municipal Body', date: 'June 2024', description: 'Assessment of public satisfaction with local infrastructure and civic services.' },
  { id: 7, title: 'Data Analysis Report', location: 'Multiple Constituencies', category: 'Analysis', img: '/work-4.png', client: 'Campaign Committee', date: 'Annual 2024', description: 'Year-long data normalisation and trend analysis for multiple election cycles.' },
  { id: 8, title: 'Campaign Strategy Support', location: 'Rajasthan | 2025', category: 'Reports', img: '/work-3.png', client: 'Key Political Leader', date: 'February 2025', description: 'Strategic advisory and data-backed campaign planning for state-level outreach.' },
  { id: 9, title: 'Post Poll Survey', location: 'Rajasthan | 2023', category: 'Surveys', img: '/work-1.png', client: 'Media House', date: 'November 2023', description: 'Immediate post-voting survey to predict outcomes and analyze voter behavior at the exit gate.' },
]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const categories = ['All', 'Surveys', 'Research', 'Analysis', 'Reports']
  const [activeTab, setActiveTab] = useState('All')

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <main className="font-sans bg-white text-gray-900 pb-20 md:pb-24">
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center z-20 transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent hidden md:block"></div>
                <div className="absolute bottom-8 left-8 text-white hidden md:block">
                  <span className="bg-[#c8102e] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 block w-fit">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-3xl font-bold leading-tight">{selectedProject.title}</h2>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                <div className="md:hidden mb-6">
                  <span className="text-[#c8102e] font-extrabold text-[11px] uppercase tracking-widest mb-2 block">
                    {selectedProject.category}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">LOCATION</p>
                    <p className="text-gray-900 font-bold text-sm">{selectedProject.location}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">DATE</p>
                    <p className="text-gray-900 font-bold text-sm">{selectedProject.date}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">CLIENT</p>
                    <p className="text-gray-900 font-bold text-sm">{selectedProject.client}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex-grow">
                  <h4 className="text-gray-900 font-bold text-base mb-4">Project Overview</h4>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Scientific Data Collection', 'Demographic Segmentation', 'Actionable Strategic Reports'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[13px] text-gray-700 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-auto">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-[#c8102e] transition-all flex items-center justify-center gap-2 group"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-24 px-6 text-center border-b border-gray-100 mb-16 flex flex-col items-center justify-center">
        {/* Background Overlay Image (faded & grayscale) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] grayscale">
           <img src="/portfolio-hero-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-gray-500 font-medium text-lg mb-6">Explore our comprehensive campaign strategies and solutions.</p>
          <div className="w-12 h-[3px] bg-[#c8102e] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* ... (Ecosystem, Survey, etc. sections remain) */}
      {/* (Skipping lines 42-1111 for brevity, but they are preserved) */}


      {/* 360 Ecosystem Section */}
      <section className="bg-white overflow-hidden">
        {/* Red Header Bar */}
        <div className="bg-[#c8102e] py-8 md:py-12 px-6 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-3">The 360° Campaign Ecosystem</h2>
          <p className="text-red-100 text-lg md:text-xl font-medium opacity-90">An Integrated Model for Research, Influence, and Execution</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col items-center">
          
          {/* Circular Model Container */}
          <div className="relative w-full max-w-[650px] aspect-square mb-16 hidden lg:block">
            
            {/* SVG Connecting Flow Circle */}
            <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 100 100">
               <defs>
                 <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                   <polygon points="0 0, 6 3, 0 6" fill="#c8102e" />
                 </marker>
               </defs>
               <circle cx="50" cy="50" r="40" fill="none" stroke="#c8102e" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
               <path d="M 50 10 A 40 40 0 0 1 81.2 25.1" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
               <path d="M 81.2 25.1 A 40 40 0 0 1 88.9 59" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
               <path d="M 88.9 59 A 40 40 0 0 1 67.2 86.1" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
               <path d="M 67.2 86.1 A 40 40 0 0 1 32.5 85.9" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
               <path d="M 32.5 85.9 A 40 40 0 0 1 11 58.6" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
               <path d="M 11 58.6 A 40 40 0 0 1 18.9 24.8" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
               <path d="M 18.9 24.8 A 40 40 0 0 1 50 10" fill="none" stroke="#c8102e" strokeWidth="1.2" markerEnd="url(#arrow)" />
            </svg>

            {/* Center Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-[5px] border-red-100 bg-white shadow-xl flex flex-col items-center justify-center text-center p-6 z-20">
               <span className="text-gray-900 text-xl font-extrabold leading-tight italic">360° Campaign Ecosystem</span>
            </div>

            {/* Node 1: Top (50%, 10%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Voter Call Intelligence</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Direct voter outreach, call-based data</p>
              </div>
            </div>

            {/* Node 2: Top Right (81.2%, 25.1%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '25.1%', left: '81.2%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Digital Influence Ecosystem</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Social media strategy</p>
              </div>
            </div>

            {/* Node 3: Bottom Right (88.9%, 59%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '59%', left: '88.9%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Digital Advertisement</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Targeted political messaging</p>
              </div>
            </div>

            {/* Node 4: Bottom (67.2%, 86.1%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '86.1%', left: '67.2%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Strategic Election Engineering</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Campaign design and execution</p>
              </div>
            </div>

            {/* Node 5: Bottom Left (32.5%, 85.9%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '85.9%', left: '32.5%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Ground Connect Operations</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Booth-level engagement</p>
              </div>
            </div>

            {/* Node 6: Left (11%, 58.6%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '58.6%', left: '11%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Qualitative Survey</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Community perceptions & issues</p>
              </div>
            </div>

            {/* Node 7: Top Left (18.9%, 24.8%) */}
            <div className="absolute flex flex-col items-center text-center w-48 z-10" style={{ top: '24.8%', left: '18.9%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-2 shadow-lg hover:scale-110 transition-transform cursor-default">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                <h4 className="font-extrabold text-gray-900 text-sm uppercase leading-tight">Public Opinion Intelligence</h4>
                <p className="text-gray-500 text-[11px] font-semibold leading-tight mt-1">Opinion polling, sentiment research</p>
              </div>
            </div>
            
          </div>

          {/* Mobile Fallback Grid (Visible only on small screens) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden mb-16 w-full">
             {/* Simple list of nodes for mobile to maintain readability */}
             {[
               { title: 'Voter Call Intelligence', desc: 'Direct voter outreach, call-based data' },
               { title: 'Digital Influence Ecosystem', desc: 'Social media strategy, narrative shaping' },
               { title: 'Digital Advertisement', desc: 'Targeted political messaging' },
               { title: 'Strategic Election Engineering', desc: 'Campaign design and execution' },
               { title: 'Ground Connect Operations', desc: 'Booth-level engagement' },
               { title: 'Qualitative Survey', desc: 'Community perceptions & issues' },
               { title: 'Public Opinion Intelligence', desc: 'Opinion polling, sentiment research' }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <div className="w-16 h-16 rounded-full border-4 border-[#c8102e] bg-white text-[#c8102e] flex items-center justify-center mb-4 shadow-sm">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                  </div>
                  <h4 className="font-extrabold text-gray-900 text-[15px] uppercase mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm font-medium">{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Bottom Cards Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                <h3 className="text-gray-900 font-extrabold text-lg mb-4">Why integration matters</h3>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">Research, communication, and execution must reinforce one another. A unified system turns voter insight into field action and message discipline.</p>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                <h3 className="text-gray-900 font-extrabold text-lg mb-4">Core outputs</h3>
                <ul className="text-gray-600 text-sm font-medium space-y-2">
                   <li>• Constituency intelligence</li>
                   <li>• Targeted messaging</li>
                   <li>• Mobilization plans</li>
                </ul>
             </div>
             <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 flex flex-col">
                <h3 className="text-gray-900 font-extrabold text-lg mb-4">Use cases</h3>
                <ul className="text-gray-600 text-sm font-medium space-y-2">
                   <li>• Candidate positioning</li>
                   <li>• Narrative control</li>
                   <li>• Turnout optimization</li>
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Dedicated Survey Section */}
      <section className="bg-white pb-20">
        {/* Red Header */}
        <div className="bg-[#c8102e] py-8 px-6 text-center text-white shadow-md">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 uppercase tracking-wide">Survey</h2>
          <p className="text-red-50 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Scientific Survey Research for Constituency-Level decision support
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col gap-10">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-gray-700 text-base leading-relaxed font-medium">
              <p>
                Surveys are among the most effective tools for understanding the real political condition of a constituency.
              </p>
              <p>
                They help capture voter sentiment, local issues, and political inclination at the ground level.
              </p>
              <p>
                Survey outputs can reveal caste and community dynamics, panchayat-wise winnability, male-female voter ratios, and opponent strongholds. These insights help leaders finalize a clear, data-driven election strategy.
              </p>
            </div>

            {/* Right Content - Cards */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6">
              
              {/* Card 1 */}
              <div className="bg-[#f8faff] border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#1e3a8a] text-xl font-bold mb-4">Scientific Survey Methodology</h3>
                <ul className="space-y-3">
                  {[
                    'Caste & community dynamics',
                    'Male-Female voter ratio',
                    'Panchayat-wise representation',
                    'Balanced demographic sampling'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f8faff] border border-blue-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-[#1e3a8a] text-xl font-bold mb-4">Survey Report Helps You Understand</h3>
                <ul className="space-y-3">
                  {[
                    'Panchayat-wise winnability',
                    'Caste-wise support / voter inclination',
                    'Opponent\'s strong Panchayats & communities',
                    'Overall winnability & key focus areas'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Bottom Flow Line */}
          <div className="w-full pt-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {[
                'Accurate Ground Data',
                'Clear Strategy',
                'Focused Campaign',
                'Electoral Advantage'
              ].map((text, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-800 font-semibold text-lg">{text}</span>
                  {i < arr.length - 1 && (
                    <svg className="w-5 h-5 text-gray-400 shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                  {/* Fallback arrow for very small screens where it wraps */}
                  {i < arr.length - 1 && (
                    <span className="text-gray-400 font-bold sm:hidden">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Survey Methodology Section */}
      <section className="bg-[#f8faff] pb-24 border-t border-gray-100">
        {/* Red Header */}
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Survey Methodology</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              A structured quantitative workflow from sampling to validated insight
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 relative">
          
          {/* Horizontal Line with Dot (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-0.5 bg-gray-200 -translate-y-1/2 z-0">
             <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-[#c8102e] -translate-x-1/2 -translate-y-1/2 shadow-md"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            
            {/* Card 1 */}
            <div className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#c8102e]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight">COLLATING CASTE &<br/>DEMOGRAPHY DATA</h3>
                  <p className="text-gray-500 text-[10px] font-bold uppercase">RETRO DATA ANALYSIS</p>
                </div>
              </div>
              <div className="border-b border-gray-100 mb-4"></div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                Analysis of the last three election results is conducted to derive caste-wise and demographic insights.<br/><br/>
                This forms the foundation for accurate voter profiling at the Assembly Constituency.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#c8102e]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight">DATA COLLECTION<br/>(FIELD & CATI)</h3>
                </div>
              </div>
              <div className="border-b border-gray-100 mb-4"></div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                Voter opinions are collected through a mix of field surveys and CATI calling.<br/><br/>
                Ensures coverage across diverse voter segments and geographic regions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#c8102e]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight">INFLUENCER CALLING</h3>
                </div>
              </div>
              <div className="border-b border-gray-100 mb-4"></div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                Key stakeholders at village and block levels are interviewed.<br/><br/>
                Provides insights on influence patterns, local demands, and ground narratives.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#c8102e]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight">RANDOM STRATIFIED<br/>SAMPLING</h3>
                </div>
              </div>
              <div className="border-b border-gray-100 mb-4"></div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                A scientifically stratified sample (2000-3000 respondents per AC).<br/><br/>
                Based on age, gender, caste, and demographics for balanced representation.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#c8102e]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight">DATA VERIFICATION</h3>
                </div>
              </div>
              <div className="border-b border-gray-100 mb-4"></div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                <span className="font-bold text-gray-900">25% of collected data is verified within 24 hours.</span><br/><br/>
                Conducted through a dedicated calling team to ensure accuracy.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#c8102e]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight">DATA ANALYSIS,<br/>NORMALISATION & REPORTING</h3>
                </div>
              </div>
              <div className="border-b border-gray-100 mb-4"></div>
              <p className="text-gray-700 text-sm font-medium leading-relaxed">
                Data is analysed across multiple parameters and normalised.<br/><br/>
                Delivered in a clear, decision-ready format for strategic use.
              </p>
            </div>

          </div>
        </div>
      </section>

            {/* Qualitative Research Section */}
      <section className="bg-white pb-20 border-t border-gray-100">
        {/* Red Header */}
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Qualitative Research</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              Understanding the motivations behind voter behavior
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-8 text-gray-700 text-base leading-relaxed font-medium">
            <p>
              Qualitative research is the most effective tool to understand the real on-ground sentiments, perceptions, and lived experiences of stakeholders.
            </p>
            <p>
              Our qualitative surveys help uncover deep-rooted issues, motivations, and behavioral drivers that quantitative data alone cannot capture. These insights play a critical role in shaping clear, evidence-based strategies and informed decision-making.
            </p>
            {/* Card */}
            <div className="bg-[#f8faff] border border-blue-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 text-[15px] font-bold mb-4 uppercase tracking-wide">QUALITATIVE REPORT HELPS YOU UNDERSTAND</h3>
              <ul className="space-y-3">
                {[
                  'Community perceptions & local issue priorities',
                  'Stakeholder attitudes & behavioral patterns',
                  'Influence networks & opinion leaders',
                  'Area / group-wise sentiment strength',
                  'Risk zones, opportunity areas & focus segments'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#f8faff] border border-blue-100 rounded-2xl p-6 shadow-sm">
              <h3 className="text-gray-900 text-[15px] font-bold mb-8 uppercase tracking-wide text-center">SCIENTIFIC QUALITATIVE METHODOLOGY</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Open-Ended Interactions</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 font-medium">One-to-one, conversational engagements</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Focus Group Discussions (FGDs)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 font-medium">Moderated group discussions</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Key Informant Interviews (KIIs)</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 font-medium">Interviews with experts, leaders & stakeholders</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 font-medium">High-value, experience-driven insights</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 font-bold text-lg mb-2">Exploratory Issue Mapping</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 font-medium">Identification of emerging, hidden & sensitive issues</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-800 mt-2.5 shrink-0"></div>
                      <span className="text-gray-700 font-medium">Helps structure themes before large-scale studies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voter Calling Section */}
      <section className="bg-gray-50 pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Voter Calling</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              Fast, scalable voter intelligence through direct contact
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Arrows for desktop */}
            <div className="hidden lg:block absolute top-[120px] left-[20%] right-[20%] h-[2px] bg-[#c8102e]/30 z-0"></div>

            {[
              {
                step: '1', title: 'TARGETED VOTER CALLING',
                desc: 'Voters across all Assembly Constituencies were called, focusing on demographic mix & electoral importance'
              },
              {
                step: '2', title: 'DETAILED SURVEY QUESTIONNAIRE',
                desc: 'Structured questions were designed to gather insight on current issues, candidate preferences and undecided voter stance'
              },
              {
                step: '3', title: 'DATA ANALYSIS & INSIGHT',
                desc: 'Collected feedback was rigorously analyzed to identify voting patterns, key concerns, and areas for candidate positioning'
              },
              {
                step: '4', title: 'STRATEGIC REPORT & ACTION PLAN',
                desc: 'Findings were compiled into a detailed report with actionable recommendations.'
              }
            ].map((card, i) => (
              <div key={i} className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-6 shadow-sm flex flex-col items-center text-center relative z-10 hover:shadow-md transition-shadow">
                <div className="w-8 h-8 rounded-full bg-white text-[#c8102e] font-bold flex items-center justify-center border border-[#c8102e] absolute -top-4">
                  {card.step}
                </div>
                <div className="w-20 h-20 rounded-full border-2 border-[#c8102e] flex items-center justify-center text-[#c8102e] mb-4 mt-2">
                   <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                </div>
                <h3 className="text-[#c8102e] font-bold text-[13px] uppercase leading-tight mb-4 min-h-[30px] flex items-center">{card.title}</h3>
                <div className="border-b border-gray-100 w-full mb-4"></div>
                <ul className="text-gray-700 text-sm font-medium leading-relaxed text-left w-full space-y-2">
                   <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                      <span>{card.desc}</span>
                   </li>
                </ul>
              </div>
            ))}
          </div>

          {/* Results Flow */}
          <div className="mt-16 text-center">
            <h3 className="text-[#c8102e] font-bold text-xl mb-6 uppercase tracking-widest">RESULTS</h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {[
                'Voter Trends Identified',
                'Key Issues Highlighted',
                'Tactical Actions Implemented'
              ].map((text, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-800 font-semibold text-[15px]">{text}</span>
                  {i < arr.length - 1 && (
                    <span className="text-gray-400 font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Strategy Section */}
      <section className="bg-white pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Social Media Strategy</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              Strategic narrative control and digital influence across the campaign lifecycle
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <h3 className="text-gray-900 font-bold text-2xl mb-6 flex items-center justify-center gap-4">
            <span className="h-px bg-gray-300 flex-1 hidden md:block max-w-[200px]"></span>
            Core Philosophy
            <span className="h-px bg-gray-300 flex-1 hidden md:block max-w-[200px]"></span>
          </h3>
          <p className="text-gray-700 text-lg font-medium leading-relaxed max-w-4xl mx-auto mb-16">
            Social media is a critical battleground for shaping voter perception, influencing sentiment, and countering misinformation in real time.<br/>
            Our approach integrates clear messaging, disciplined narrative control, and wide digital penetration to ensure consistent and impactful communication across all voter segments.
          </p>

          <h3 className="text-[#c8102e] font-bold text-2xl mb-10 flex items-center justify-center gap-4">
            <span className="h-px bg-[#c8102e]/30 flex-1 hidden md:block max-w-[200px]"></span>
            Strategic Framework
            <span className="h-px bg-[#c8102e]/30 flex-1 hidden md:block max-w-[200px]"></span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
             {[
               {
                 step: '1', title: 'DAILY CREATIVE STRATEGY',
                 points: ['Vision-driven and positive storytelling', 'Issue-based & counter-narrative content', 'Platform-optimized designs for maximum reach']
               },
               {
                 step: '2', title: 'VIDEO CONTENT ENGINE',
                 points: ['Short-form videos (Reels / Shorts)', 'Clips from speeches, events & public interactions', 'Professionally edited with captions & audio cues']
               },
               {
                 step: '3', title: 'CONTENT DISTRIBUTION SYSTEM',
                 points: ['Multi-platform dissemination (FB, Insta, X)', 'Strong WhatsApp network integration', 'Time-optimized posting for peak engagement']
               },
               {
                 step: '4', title: 'SOCIAL MEDIA MANAGEMENT',
                 points: ['End-to-end handle management', 'Real-time monitoring & response strategy', 'WhatsApp broadcast & group ecosystems']
               },
               {
                 step: '5', title: 'INFLUENCER & NETWORK ECOSYSTEM',
                 points: ['Local digital influencer coordination', 'Support page & ecosystem', 'Amplification through trusted voices']
               }
             ].map((card, i) => (
                <div key={i} className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-5 shadow-sm flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
                  <div className="w-6 h-6 rounded-full bg-white text-[#c8102e] font-bold flex items-center justify-center border border-[#c8102e] absolute -top-3 text-xs">
                    {card.step}
                  </div>
                  <div className="text-[#c8102e] mb-3 mt-3">
                     <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                     </svg>
                  </div>
                  <h3 className="text-[#c8102e] font-bold text-[11px] uppercase leading-tight mb-3 min-h-[30px] flex items-center justify-center w-full border-b border-gray-100 pb-3">{card.title}</h3>
                  <ul className="text-gray-700 text-[12px] font-medium leading-snug text-left w-full space-y-2.5">
                     {card.points.map((pt, idx) => (
                       <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1 shrink-0"></div>
                          <span>{pt}</span>
                       </li>
                     ))}
                  </ul>
                </div>
             ))}
          </div>

          {/* Outcome Flow */}
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="text-[#c8102e] font-bold text-lg mr-2">Outcome:</span>
              {[
                'Stronger Digital Presence',
                'Narrative Control',
                'Higher Engagement',
                'Voter Influence'
              ].map((text, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-800 font-semibold text-[15px]">{text}</span>
                  {i < arr.length - 1 && (
                    <span className="text-[#c8102e] font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Outreach Section */}
      <section className="bg-[#f8faff] pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Strategic Outreach</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              A phased plan for voter engagement and persuasion
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <h3 className="text-[#c8102e] font-bold text-[16px] uppercase tracking-wide mb-4">
            TARGETED, PHASED OUTREACH ENSURES EFFECTIVE VOTER ENGAGEMENT
          </h3>
          <p className="text-gray-700 text-[16px] font-medium leading-relaxed max-w-4xl mx-auto mb-16">
            Our outreach is designed in three phases to systematically engage voters, build anti-incumbency sentiment, and deliver the campaign message effectively. A dedicated campaign manager coordinates end-to-end execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
             {/* Desktop arrow connectors */}
             <div className="hidden md:block absolute top-[120px] left-[25%] right-[25%] h-[2px] bg-[#c8102e]/20 z-0"></div>

             {[
               {
                 step: '1', title: 'BUILD ANTI-INCUMBENCY',
                 points: ['Identifying & amplifying local issues', 'Mobilizing discontent against the incumbent', 'Framing a winning narrative to unsettle the opposition']
               },
               {
                 step: '2', title: 'EXECUTE OUTREACH PROGRAM',
                 points: ['Executing door-to-door, public meetings, & small group mobilizations', 'Utilizing trained field teams for direct voter interaction', 'Gathering actionable voter data & insights']
               },
               {
                 step: '3', title: 'DELIVER CORE MESSAGE',
                 points: ['Communicating key campaign messages', 'Addressing local concerns & aspirations', 'Providing a compelling vision for the future']
               }
             ].map((card, i) => (
                <div key={i} className="bg-[#fcf5f5] border-[1.5px] border-[#c8102e]/40 rounded-xl p-6 shadow-sm flex flex-col items-center text-center relative z-10">
                  <div className="w-8 h-8 rounded-full bg-white text-[#c8102e] font-bold flex items-center justify-center border border-[#c8102e] absolute -top-4 shadow-sm">
                    {card.step}
                  </div>
                  <div className="w-20 h-20 rounded-full border-[3px] border-[#c8102e] bg-[#c8102e] flex items-center justify-center text-white mb-6 mt-2">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                  </div>
                  <h3 className="text-[#c8102e] font-bold text-[14px] uppercase leading-tight mb-5 min-h-[20px]">{card.title}</h3>
                  <div className="h-px bg-red-200 w-full mb-5"></div>
                  <ul className="text-gray-700 text-[14px] font-medium leading-relaxed text-left w-full space-y-3">
                     {card.points.map((pt, idx) => (
                       <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                          <span>{pt}</span>
                       </li>
                     ))}
                  </ul>
                </div>
             ))}
          </div>

          {/* Outcome Flow */}
          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              <span className="text-[#c8102e] font-bold text-lg mr-2">Outcome:</span>
              {[
                'Sustained engagement',
                'Increased support',
                'Maximum vote conversion'
              ].map((text, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-800 font-semibold text-[15px]">{text}</span>
                  {i < arr.length - 1 && (
                    <span className="text-[#c8102e] font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Management Section */}
      <section className="bg-white pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Campaign Management</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              From planning and logistics to real-time monitoring and crisis response
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <p className="text-gray-700 text-[16px] font-bold leading-relaxed max-w-4xl mx-auto mb-16">
            Professional campaign management ensures seamless planning, execution, and coordination, aligning all activities towards a successful election outcome.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
             {[
               {
                 step: '1', title: 'CAMPAIGN PLANNING',
                 points: ['Detailed electoral roadmap for the campaign', 'Setting clear objectives and milestones']
               },
               {
                 step: '2', title: 'RESOURCE COORDINATION',
                 points: ['Managing finances, manpower, logistics, and tech support', 'Ensuring optimal allocation and oversight']
               },
               {
                 step: '3', title: 'FIELD TEAM MANAGEMENT',
                 points: ['Deploying and supervising local teams & cadres', 'Mobilizing grassroots workers for on-ground activities']
               },
               {
                 step: '4', title: 'CRISIS & PR MANAGEMENT',
                 points: ['Managing media and controlling narratives, and addressing opposition attacks']
               },
               {
                 step: '5', title: 'REAL-TIME MONITORING & FEEDBACK',
                 points: ['Continuous monitoring of campaign activities', 'Detailed tracking, reporting and feedback systems']
               }
             ].map((card, i) => (
                <div key={i} className="bg-white border-[1.5px] border-[#c8102e] rounded-xl p-5 shadow-sm flex flex-col items-center text-center relative hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-full bg-white text-[#c8102e] font-bold flex items-center justify-center border border-[#c8102e] absolute -top-4 text-sm">
                    {card.step}
                  </div>
                  <div className="text-[#c8102e] mb-4 mt-4">
                     <svg className="w-14 h-14 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                     </svg>
                  </div>
                  <h3 className="text-[#c8102e] font-bold text-[12px] uppercase leading-tight mb-4 min-h-[30px] flex items-center justify-center w-full">{card.title}</h3>
                  <div className="h-px bg-red-100 w-full mb-4"></div>
                  <ul className="text-gray-700 text-[12px] font-medium leading-snug text-left w-full space-y-3">
                     {card.points.map((pt, idx) => (
                       <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1.5 shrink-0"></div>
                          <span>{pt}</span>
                       </li>
                     ))}
                  </ul>
                </div>
             ))}
          </div>

          {/* Results Flow */}
          <div className="mt-16 text-center">
            <h3 className="text-gray-600 font-bold text-xl mb-4 uppercase tracking-widest flex items-center justify-center gap-4">
               <span className="h-px bg-gray-300 w-16"></span>
               RESULTS
               <span className="h-px bg-gray-300 w-16"></span>
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {[
                'Seamless Execution',
                'Coordination of Teams',
                'Maximum Impact Leading to Election Win'
              ].map((text, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium text-[15px]">{text}</span>
                  {i < arr.length - 1 && (
                    <span className="text-[#c8102e] font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Voter Segmentation Section */}
      <section className="bg-[#f8faff] pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Voter Segmentation</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              Sharper targeting through voter-type specific messaging
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center relative overflow-hidden pb-10">
          
          <div className="relative max-w-5xl mx-auto">
            {/* Center Target SVG Background - Desktop */}
            <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none opacity-20">
               <svg viewBox="0 0 500 200" className="w-[600px] h-[250px]">
                  <ellipse cx="250" cy="100" rx="200" ry="80" fill="none" stroke="#6b7280" strokeWidth="2" strokeDasharray="5,5"/>
                  <ellipse cx="250" cy="100" rx="150" ry="60" fill="none" stroke="#6b7280" strokeWidth="3"/>
                  <ellipse cx="250" cy="100" rx="100" ry="40" fill="none" stroke="#6b7280" strokeWidth="4"/>
                  <ellipse cx="250" cy="100" rx="50" ry="20" fill="none" stroke="#6b7280" strokeWidth="5"/>
               </svg>
            </div>
            
            {/* Center Arrow - Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
               <svg className="w-48 h-48 text-[#c8102e] opacity-80" viewBox="0 0 100 100" fill="currentColor" style={{transform: 'rotate(-15deg)'}}>
                 <path d="M90 50 L50 45 L50 55 Z" />
                 <rect x="20" y="48" width="40" height="4" />
                 <path d="M20 45 L30 50 L20 55 Z" />
               </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-6 relative z-10 items-center">
              
              {/* Left Column */}
              <div className="flex flex-col gap-12 items-center md:items-end">
                {/* Card 1 */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[280px]">
                  <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-white flex items-center justify-center text-[#c8102e] shadow-sm mb-4">
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                     </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase mb-2">ISSUE-BASED TARGETING</h3>
                  <p className="text-gray-600 text-[14px] font-medium leading-snug">Tailor messaging to local and issue-based concerns</p>
                </div>

                {/* Card 2 */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right max-w-[280px]">
                  <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-white flex items-center justify-center text-[#c8102e] shadow-sm mb-4">
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                     </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase mb-2">INFLUENCED VOTERS</h3>
                  <p className="text-gray-600 text-[14px] font-medium leading-snug">Counter opposing influences & narratives</p>
                </div>
              </div>

              {/* Center Column */}
              <div className="flex flex-col gap-32 items-center justify-between h-full py-10 md:py-0">
                {/* Top Card */}
                <div className="flex flex-col items-center text-center max-w-[280px]">
                  <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-white flex items-center justify-center text-[#c8102e] shadow-sm mb-4">
                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                     </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase mb-2">CORE VOTERS</h3>
                  <p className="text-gray-600 text-[14px] font-medium leading-snug">Identify and strengthen base support</p>
                </div>

                {/* Center Text (Mobile Only or fallback) */}
                <div className="flex flex-col items-center text-center max-w-[320px] bg-white/80 p-4 rounded-xl shadow-sm border border-gray-100 lg:hidden">
                  <h3 className="text-gray-900 font-bold text-[16px] uppercase mb-2">SWING VOTERS</h3>
                  <p className="text-gray-600 text-[14px] font-medium">Identify high-potential swing voters for targeted persuasion</p>
                </div>
                
                {/* Center Text Desktop */}
                <div className="hidden lg:flex flex-col items-center text-center max-w-[320px] mt-16">
                  <h3 className="text-gray-900 font-bold text-[18px] uppercase mb-2 bg-white/90 px-4 py-1 rounded">SWING VOTERS</h3>
                  <p className="text-gray-700 text-[15px] font-semibold bg-white/90 px-4 py-2 rounded">Identify high-potential swing voters for targeted persuasion</p>
                </div>

                {/* Bottom Card */}
                <div className="flex flex-col items-center text-center max-w-[280px]">
                  <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-white flex items-center justify-center text-[#c8102e] shadow-sm mb-4">
                     <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                     </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase mb-2">INFLUENCED VOTERS</h3>
                  <p className="text-gray-600 text-[14px] font-medium leading-snug">Counter opposing influences & narratives</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-12 items-center md:items-start">
                {/* Card 3 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[280px]">
                  <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-white flex items-center justify-center text-[#c8102e] shadow-sm mb-4">
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                     </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase mb-2">SILENT VOTERS</h3>
                  <p className="text-gray-600 text-[14px] font-medium leading-snug">Understand & address concerns of silent & undecided voters</p>
                </div>

                {/* Card 4 */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[280px]">
                  <div className="w-24 h-24 rounded-full border-[3px] border-[#c8102e] bg-white flex items-center justify-center text-[#c8102e] shadow-sm mb-4">
                     <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                     </svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase mb-2">FIRST TIME VOTERS</h3>
                  <p className="text-gray-600 text-[14px] font-medium leading-snug">Engage & inform new & young voters</p>
                </div>
              </div>

            </div>
          </div>

          {/* Results Flow */}
          <div className="mt-20 text-center border-t border-gray-200 pt-8 max-w-4xl mx-auto">
            <h3 className="text-gray-600 font-bold text-xl mb-4 uppercase tracking-widest flex items-center justify-center gap-4">
               <span className="h-px bg-gray-300 w-16"></span>
               RESULTS
               <span className="h-px bg-gray-300 w-16"></span>
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3 text-center">
              {[
                'Seamless Execution',
                'Coordination of Teams',
                'Maximum Impact Leading to Election Win'
              ].map((text, i, arr) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-gray-800 font-medium text-[15px]">{text}</span>
                  {i < arr.length - 1 && (
                    <span className="text-[#c8102e] font-bold">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Advertisement Section */}
      <section className="bg-white pb-24 border-t border-gray-100">
        <div className="bg-[#c8102e] py-8 px-6 text-white shadow-md text-center">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Digital Advertisement</h2>
            <p className="text-red-50 text-lg md:text-xl font-medium opacity-90">
              Targeted messaging across SMS, IVRS, WhatsApp, rich media
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <h3 className="text-gray-900 font-bold text-[16px] uppercase tracking-wide mb-12">
            TARGETED POLITICAL MESSAGING ACROSS DIGITAL PLATFORMS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               {
                 icon: (
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                       <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                       <path d="M16 2v4M8 2v4M3 10h18"></path>
                       <path d="M3 10l9 6 9-6" strokeWidth="1.5"></path>
                    </svg>
                 ),
                 title: 'SMS TEXT',
                 desc: 'Reach voters directly with targeted SMS alerts'
               },
               {
                 icon: (
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                       <path strokeLinecap="round" strokeLinejoin="round" d="M8 8h8M8 12h8" />
                    </svg>
                 ),
                 title: 'IVRS',
                 desc: 'Interactive voice response for specific voter interactions'
               },
               {
                 icon: (
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                 ),
                 title: 'BULK WHATSAPP',
                 desc: 'Broadcast messages to groups for engagement'
               },
               {
                 icon: (
                    <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                       <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                 ),
                 title: 'AI AUDIO/VIDEO MESSAGES',
                 desc: 'AI-generated voice or video messages at scale'
               }
             ].map((card, i) => (
                <div key={i} className="bg-white border-[1.5px] border-[#c8102e]/30 rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="text-[#c8102e] mb-6">
                     {card.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-[14px] uppercase tracking-wide mb-6">{card.title}</h3>
                  <ul className="text-gray-700 text-[14px] font-medium leading-relaxed text-left w-full">
                     <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-2 shrink-0"></div>
                        <span>{card.desc}</span>
                     </li>
                  </ul>
                </div>
             ))}
          </div>

          <div className="mt-16 text-center">
             <h3 className="text-gray-600 font-bold text-[14px] uppercase tracking-widest border-t border-gray-200 pt-8 inline-block px-8">
               DELIVERING PERSONALIZED MESSAGES FOR MAXIMUM OUTREACH
             </h3>
          </div>
        </div>
      </section>

      {/* Project Gallery Section */}
      <section className="bg-white py-20 px-6 lg:px-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Showcase</h2>
            <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto">A detailed look at our recent electoral and research assignments.</p>
            <div className="w-12 h-[3px] bg-[#c8102e] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? 'bg-[#c8102e] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="block h-56 w-full overflow-hidden relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-[#c8102e] rounded-full uppercase tracking-widest shadow-sm">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{project.location}</p>
                  <h3 className="font-bold text-gray-900 text-xl leading-snug mb-4 group-hover:text-[#c8102e] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="text-[#c8102e] font-bold text-sm inline-flex items-center gap-2 group/btn mt-auto">
                    View Project Details
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-[#c8102e] rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-8 md:px-12 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[#c8102e]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-tight">
              Want to see how we can help in your constituency?
            </h3>
          </div>
          <Link to="/contact" className="w-full md:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#c8102e] text-white font-bold py-3.5 px-8 rounded transition-colors whitespace-nowrap text-center text-lg shrink-0">
            Request a Meeting
          </Link>
        </div>
      </section>

    </main>
  )
}
