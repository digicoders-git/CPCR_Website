import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

// Standardized Section Header Component (Matching About.jsx style)
const SectionHeader = ({ title, subtitle }) => (
  <div className="bg-[#c8102e] py-10 px-6 text-white text-center shadow-md">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-wide uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="text-red-50 text-xl md:text-2xl font-medium opacity-90">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  </div>
)

const FadeInWhenVisible = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
)


export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [projects, setProjects] = useState([])
  const [posts, setPosts] = useState([])
  const categories = ['All', 'Surveys', 'Research', 'Analysis', 'Reports']
  const [activeTab, setActiveTab] = useState('All')
  const API_URL = (import.meta.env.VITE_API_URL || 'https://cpcr-website-backend.onrender.com').replace(/\/$/, '')

  useEffect(() => {
    const fetchData = async (retries = 3) => {
      try {
        const [projectsRes, blogsRes] = await Promise.all([
          axios.get(`${API_URL}/api/assignments`),
          axios.get(`${API_URL}/api/blogs`)
        ])
        setProjects(projectsRes.data)
        setPosts(blogsRes.data)
      } catch (err) {
        if (retries > 0) {
          console.warn(`Retrying data fetch... (${retries} left)`)
          setTimeout(() => fetchData(retries - 1), 3000)
          return
        }
        console.error('Failed to fetch data:', err)
      }
    }
    fetchData()
  }, [])

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  const getImageUrl = (img) => {
    if (!img) return '/work-1.png';
    if (img.startsWith('http')) return img;
    const cleanBaseUrl = API_URL.replace(/\/$/, '');
    const cleanImgPath = img.startsWith('/') ? img : `/${img}`;
    return `${cleanBaseUrl}${cleanImgPath}`;
  }

  return (
    <main className="font-sans bg-white text-gray-900">
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

              <div className="w-full md:w-1/2 h-72 md:h-auto relative">
                <img src={getImageUrl(selectedProject.img)} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
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
                    <p className="text-gray-900 font-bold text-sm">{selectedProject.date || '2024-25'}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">CLIENT</p>
                    <p className="text-gray-900 font-bold text-sm">{selectedProject.client || 'Confidential'}</p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex-grow">
                  <h4 className="text-gray-900 font-bold text-base mb-4">Project Overview</h4>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">
                    {selectedProject.description || 'A comprehensive constituency-wide engagement conducted to understand ground sentiments and electoral dynamics.'}
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
              <Link to="/services" className="w-full sm:w-auto bg-white border-2 border-gray-900 hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded flex items-center justify-center gap-3 transition-all group shadow-sm">
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

      {/* 360 Ecosystem Section */}
      <section id="ecosystem" className="bg-white overflow-hidden pt-10 pb-20">
        <SectionHeader 
          title="The 360° Campaign Ecosystem" 
          subtitle="An Integrated Model for Research, Influence, and Execution"
        />

        <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center">
          <FadeInWhenVisible>
            <div className="relative w-[800px] h-[800px] mb-12 hidden lg:block mt-8">
              {/* Rotating Background Track */}
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full z-0" 
                viewBox="0 0 100 100"
              >
                 <defs>
                   <marker id="arrow-red-track" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                     <polygon points="0 0, 5 2.5, 0 5" fill="#c8102e" />
                   </marker>
                 </defs>
                 
                 {/* Outer light border */}
                 <circle cx="50" cy="50" r="38" fill="none" stroke="#fef2f2" strokeWidth="6" />
                 
                 {/* 7 rotating arrow segments */}
                 {[0, 1, 2, 3, 4, 5, 6].map(i => {
                   const startAngle = (i * 360/7) * Math.PI / 180;
                   const endAngle = ((i + 0.85) * 360/7) * Math.PI / 180; 
                   const r = 34;
                   const x1 = 50 + r * Math.cos(startAngle);
                   const y1 = 50 + r * Math.sin(startAngle);
                   const x2 = 50 + r * Math.cos(endAngle);
                   const y2 = 50 + r * Math.sin(endAngle);
                   return <path key={`track-${i}`} d={`M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`} fill="none" stroke="#c8102e" strokeWidth="1.8" markerEnd="url(#arrow-red-track)" />
                 })}
              </motion.svg>

              {/* Static Central Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center z-20">
                 <div className="w-[230px] h-[230px] rounded-full border-[1.5px] border-[#c8102e] flex flex-col items-center justify-center text-center px-8 shadow-inner">
                    <span className="text-gray-900 text-[24px] font-bold leading-[1.2]">360° Campaign <br/> Ecosystem</span>
                 </div>
              </div>

              {/* Static Nodes with External Text Boxes */}
              {[
                { 
                  angle: -90, 
                  title: 'VOTER CALL INTELLIGENCE', 
                  desc: 'Direct voter outreach, call-based data', 
                  icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                  boxStyle: 'bottom-[120%] mb-2 left-1/2 -translate-x-1/2 text-center items-center w-64'
                },
                { 
                  angle: -38, 
                  title: 'DIGITAL INFLUENCE ECOSYSTEM', 
                  desc: 'Social media strategy, narrative shaping', 
                  icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                  boxStyle: 'left-[130%] top-1/2 -translate-y-1/2 text-left items-start w-[240px]'
                },
                { 
                  angle: 13, 
                  title: 'DIGITAL ADVERTISEMENT', 
                  desc: 'Targeted political messaging across digital platforms', 
                  icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
                  boxStyle: 'left-[130%] top-1/2 -translate-y-1/2 text-left items-start w-[240px]'
                },
                { 
                  angle: 64, 
                  title: 'STRATEGIC ELECTION ENGINEERING', 
                  desc: 'Campaign design and execution', 
                  icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
                  boxStyle: 'left-[130%] top-1/2 -translate-y-1/2 text-left items-start w-[260px]'
                },
                { 
                  angle: 116, 
                  title: 'GROUND CONNECT OPERATIONS', 
                  desc: 'Outreach activities, cadre mobilization booth-level engagement', 
                  icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
                  boxStyle: 'right-[130%] top-1/2 -translate-y-1/2 text-right items-end w-[280px]'
                },
                { 
                  angle: 167, 
                  title: 'QUALITATIVE SURVEY', 
                  desc: 'Community perceptions & local issue priorities', 
                  icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
                  boxStyle: 'right-[130%] top-1/2 -translate-y-1/2 text-right items-end w-[240px]'
                },
                { 
                  angle: 218, 
                  title: 'PUBLIC OPINION INTELLIGENCE', 
                  desc: 'Opinion polling, voter sentiment research', 
                  icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
                  boxStyle: 'right-[130%] top-1/2 -translate-y-1/2 text-right items-end w-[260px]'
                }
              ].map((node, i) => {
                const radius = 280; // Adjusted radius to prevent overflow
                const x = radius * Math.cos((node.angle * Math.PI) / 180);
                const y = radius * Math.sin((node.angle * Math.PI) / 180);
                
                return (
                  <div 
                    key={i} 
                    className="absolute flex items-center justify-center z-30" 
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: 'translate(-50%, -50%)' }}
                  >
                    {/* The Circular Node */}
                    <div className="w-[60px] h-[60px] rounded-full bg-[#c8102e] text-white border-[3px] border-white shadow-[0_8px_20px_rgba(200,16,46,0.25)] flex items-center justify-center relative z-10 hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d={node.icon}/></svg>
                    </div>

                    {/* The External Text Box */}
                    <div className={`absolute flex flex-col bg-gray-50/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-gray-200 pointer-events-none ${node.boxStyle}`}>
                      <h4 className="font-bold text-gray-900 text-[11px] uppercase tracking-wide mb-1 leading-tight">{node.title}</h4>
                      <p className="text-gray-600 text-[10px] leading-snug">{node.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeInWhenVisible>

          {/* Mobile Fallback Grid (Unchanged functionally, light theme) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mb-16 w-full">
             {[
               { title: 'Voter Call Intelligence', desc: 'Direct voter outreach, call-based data' },
               { title: 'Digital Influence Ecosystem', desc: 'Social media strategy, narrative shaping' },
               { title: 'Digital Advertisement', desc: 'Targeted political messaging' },
               { title: 'Strategic Election Engineering', desc: 'Campaign design and execution' },
               { title: 'Ground Connect Operations', desc: 'Booth-level engagement' },
               { title: 'Qualitative Survey', desc: 'Community perceptions & issues' },
               { title: 'Public Opinion Intelligence', desc: 'Opinion polling, sentiment research' }
             ].map((item, idx) => (
               <div key={idx} className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#c8102e] text-white flex items-center justify-center mb-4 shadow-md border-4 border-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                  </div>
                  <h4 className="font-bold text-gray-900 text-[13px] uppercase mb-1">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
               </div>
             ))}
          </div>

          {/* Bottom Feature Cards (Light Theme matching image) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-4">
             {[
               { title: 'Why integration matters', desc: 'Research, communication, and execution must reinforce one another.\n\nA unified system turns voter insight into field action and message discipline.' },
               { title: 'Core outputs', items: ['Constituency intelligence', 'Targeted messaging', 'Mobilization plans'] },
               { title: 'Use cases', items: ['Candidate positioning', 'Narrative control', 'Turnout optimization'] }
             ].map((card, i) => (
               <FadeInWhenVisible key={i} delay={i * 0.1}>
                 <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold mb-4 text-gray-900">{card.title}</h3>
                    {card.desc ? (
                      <p className="text-gray-600 text-[13px] leading-relaxed whitespace-pre-line">{card.desc}</p>
                    ) : (
                      <ul className="space-y-3">
                        {card.items.map((item, idx) => (
                          <li key={idx} className="flex items-start text-[13px] text-gray-600">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                 </div>
               </FadeInWhenVisible>
             ))}
          </div>
        </div>
      </section>

      {/* Survey Section */}
      <section className="bg-white pb-32">
        <SectionHeader 
          title="Survey" 
          subtitle="Scientific Survey Research for Constituency-Level decision support"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeInWhenVisible>
              <div className="space-y-8">
                <div className="p-10 bg-gray-50 rounded-2xl border border-gray-100 relative">
                   <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#c8102e] rounded-3xl flex items-center justify-center text-white shadow-xl rotate-3">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-4">Understanding the Real Political Condition</h3>
                   <div className="space-y-4 text-gray-600 font-medium leading-relaxed mb-6">
                      <p>Surveys are among the most effective tools for understanding the real political condition of a constituency.</p>
                      <p>They help capture voter sentiment, local issues, and political inclination at the ground level.</p>
                      <p>Survey outputs can reveal caste and community dynamics, panchayat-wise winnability, and opponent strongholds. These insights help leaders finalize a clear, data-driven election strategy.</p>
                   </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <div className="space-y-10">
              {[
                { title: 'Scientific Survey Methodology', items: ['Caste & community dynamics', 'Male-Female voter ratio', 'Panchayat-wise representation', 'Balanced demographic sampling'] },
                { title: 'Survey Report Helps You Understand', items: ['Panchayat-wise winnability', 'Caste-wise support / voter inclination', 'Opponent\'s strong Panchayats', 'Overall winnability & key focus areas'] }
              ].map((box, i) => (
                <FadeInWhenVisible key={i} delay={i * 0.2}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#c8102e] rounded-3xl blur opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div className="relative bg-white border-2 border-gray-100 p-8 rounded-3xl shadow-sm hover:border-[#c8102e]/30 transition-all">
                      <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-widest flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#c8102e]"></span>
                        {box.title}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {box.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#c8102e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 font-bold text-sm leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Survey Methodology Section */}
      <section className="bg-gray-50/50 pb-32">
        <SectionHeader 
          title="Survey Methodology" 
          subtitle="A structured quantitative workflow from sampling to validated insight"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "COLLATING CASTE & DEMOGRAPHY DATA",
                subtitle: "RETRO DATA ANALYSIS",
                desc: "Analysis of the last three election results is conducted to derive caste-wise and demographic insights. This forms the foundation for accurate voter profiling at the Assembly Constituency.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              },
              {
                title: "DATA COLLECTION",
                subtitle: "(FIELD & CATI)",
                desc: "Voter opinions are collected through a mix of field surveys and CATI calling. Ensures coverage across diverse voter segments and geographic regions.",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              },
              {
                title: "INFLUENCER CALLING",
                subtitle: "STAKEHOLDER INTERVIEWS",
                desc: "Key stakeholders at village and block levels are interviewed. Provides insights on influence patterns, local demands, and ground narratives.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              {
                title: "RANDOM STRATIFIED SAMPLING",
                subtitle: "SCIENTIFIC SAMPLING",
                desc: "A scientifically stratified sample (2000-3000 respondents per AC). Based on age, gender, caste, and demographics for balanced representation.",
                icon: "M11 4a2 2 0 114 0 2 2 0 01-4 0zM4.5 8h15a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5zM3 12a2 2 0 00-2 2v4a2 2 0 002 2h18a2 2 0 002-2v-4a2 2 0 00-2-2H3z"
              },
              {
                title: "DATA VERIFICATION",
                subtitle: "QUALITY CONTROL",
                desc: "25% of collected data is verified within 24 hours. Conducted through a dedicated calling team to ensure accuracy.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "DATA ANALYSIS & REPORTING",
                subtitle: "NORMALISATION",
                desc: "Data is analysed across multiple parameters and normalised. Delivered in a clear, decision-ready format for strategic use.",
                icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H5a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              }
            ].map((item, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 -mr-16 -mt-16 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#c8102e] flex items-center justify-center mb-8 relative z-10 border border-red-100 group-hover:bg-[#c8102e] group-hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>

                  <div className="relative z-10 flex-grow">
                    <h4 className="text-[10px] font-bold text-[#c8102e] uppercase tracking-[0.2em] mb-2">{item.subtitle}</h4>
                    <h3 className="text-lg font-bold text-gray-900 mb-6 leading-tight uppercase">{item.title}</h3>
                    <div className="w-10 h-1 bg-gray-100 mb-6 group-hover:bg-red-200 transition-colors"></div>
                    <p className="text-gray-500 font-medium text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Qualitative Research Section */}
      <section className="bg-white pb-32">
        <SectionHeader 
          title="Qualitative Research" 
          subtitle="Understanding the motivations behind voter behavior"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <FadeInWhenVisible>
              <div className="space-y-8">
                <div className="relative">
                   <h3 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight">Deeper Insights into Stakeholder Sentiments</h3>
                   <div className="space-y-6 text-gray-600 font-medium leading-relaxed">
                      <p>
                        Qualitative research is the most effective tool to understand the real on-ground sentiments, perceptions, and lived experiences of stakeholders.
                      </p>
                      <p>
                        Our qualitative surveys help uncover deep-rooted issues, motivations, and behavioral drivers that quantitative data alone cannot capture. These insights play a critical role in shaping clear, evidence-based strategies and informed decision-making.
                      </p>
                   </div>

                   <div className="mt-12 p-10 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-red-100 transition-colors">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 -mr-12 -mt-12 rounded-full"></div>
                      <h4 className="text-base font-bold text-gray-900 mb-8 uppercase tracking-widest flex items-center gap-3">
                        <span className="w-2 h-2 rounded-full bg-[#c8102e]"></span>
                        Qualitative Report Helps You Understand
                      </h4>
                      <ul className="space-y-4">
                        {[
                          'Community perceptions & local issue priorities',
                          'Stakeholder attitudes & behavioral patterns',
                          'Influence networks & opinion leaders',
                          'Area / group-wise sentiment strength',
                          'Risk zones, opportunity areas & focus segments'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <svg className="w-5 h-5 text-[#c8102e] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700 font-bold text-sm leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="bg-white border-2 border-gray-100 p-10 md:p-14 rounded-[3.5rem] shadow-xl relative overflow-hidden group hover:border-[#c8102e]/30 transition-all">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#c8102e]"></div>
                <h4 className="text-xl font-bold text-gray-900 mb-10 uppercase tracking-widest text-center md:text-left">Scientific Qualitative Methodology</h4>
                
                <div className="space-y-10">
                  {[
                    { t: 'Open-Ended Interactions', d: 'One-to-one, conversational engagements' },
                    { t: 'Focus Group Discussions (FGDs)', d: 'Moderated group discussions' },
                    { t: 'Key Informant Interviews (KIIs)', d: 'Interviews with experts, leaders & stakeholders. High-value, experience-driven insights.' },
                    { t: 'Exploratory Issue Mapping', d: 'Identification of emerging, hidden & sensitive issues. Helps structure themes before large-scale studies.' }
                  ].map((item, i) => (
                    <div key={i} className="group/item">
                      <h5 className="text-gray-900 font-bold text-base mb-2 flex items-center gap-3 group-hover/item:text-[#c8102e] transition-colors">
                        <span className="w-6 h-[2px] bg-[#c8102e]/20 group-hover/item:w-10 transition-all"></span>
                        {item.t}
                      </h5>
                      <p className="text-gray-500 font-bold text-sm leading-relaxed pl-9">
                        {item.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Voter Calling Section */}
      <section className="bg-gray-50/50 pb-32">
        <SectionHeader 
          title="Voter Calling" 
          subtitle="Fast, scalable voter intelligence through direct contact"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'TARGETED VOTER CALLING', desc: 'Voters across all Constituencies were called, focusing on demographic mix.' },
              { step: '2', title: 'DETAILED QUESTIONNAIRE', desc: 'Questions designed to gather insight on issues and candidate preferences.' },
              { step: '3', title: 'DATA ANALYSIS & INSIGHT', desc: 'Rigorous analysis to identify voting patterns and concerns.' },
              { step: '4', title: 'STRATEGIC ACTION PLAN', desc: 'Findings compiled into a report with actionable recommendations.' }
            ].map((card, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm relative group hover:shadow-2xl transition-all h-full">
                  <span className="text-6xl font-bold text-gray-100 absolute top-8 right-8 group-hover:text-red-50 transition-colors">{card.step}</span>
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#c8102e] flex items-center justify-center mb-8 relative z-10 border border-red-100">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-4 relative z-10 uppercase">{card.title}</h3>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed relative z-10">{card.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Strategy */}
      <section className="bg-white pb-32">
        <SectionHeader 
          title="Social Media Strategy" 
          subtitle="Strategic narrative control and digital influence"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="text-center mb-16">
            <p className="text-gray-700 text-lg font-medium leading-relaxed max-w-4xl mx-auto">
              Social media is a critical battleground for shaping voter perception. Our approach integrates clear messaging and disciplined narrative control to ensure consistent communication across all segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'DAILY CREATIVE STRATEGY', points: ['Vision-driven storytelling', 'Issue-based content', 'Platform-optimized designs'] },
              { step: '2', title: 'VIDEO CONTENT ENGINE', points: ['Short-form videos/Reels', 'Speech & event clips', 'Professional editing'] },
              { step: '3', title: 'DISTRIBUTION SYSTEM', points: ['Multi-platform dissemination', 'WhatsApp integration', 'Time-optimized posting'] },
              { step: '4', title: 'HANDLE MANAGEMENT', points: ['End-to-end management', 'Real-time monitoring', 'Broadcast ecosystems'] },
              { step: '5', title: 'INFLUENCER ECOSYSTEM', points: ['Local influencer coordination', 'Support page network', 'Trusted voice amplification'] }
            ].map((card, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-red-50 -mr-12 -mt-12 rounded-full transition-transform group-hover:scale-150"></div>
                  <div className="w-10 h-10 rounded-xl bg-[#c8102e] text-white font-bold flex items-center justify-center mb-6 relative z-10 text-xs">
                    {card.step}
                  </div>
                  <h3 className="text-[11px] font-bold text-gray-900 mb-6 uppercase tracking-[0.2em] relative z-10 border-b border-gray-100 pb-4 min-h-[50px] flex items-center">{card.title}</h3>
                  <ul className="space-y-3 relative z-10">
                    {card.points.map((p, idx) => (
                      <li key={idx} className="text-gray-500 text-[11px] font-bold leading-snug flex items-start gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1 shrink-0"></div>
                         {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Outreach Section */}
      <section className="bg-gray-50/50 pb-32">
        <SectionHeader 
          title="Strategic Outreach" 
          subtitle="A phased plan for voter engagement and persuasion"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="text-center mb-20">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 uppercase tracking-tight">Targeted, Phased Outreach Ensures Effective Voter Engagement</h3>
            <p className="text-gray-500 font-medium text-lg max-w-4xl mx-auto leading-relaxed">
              Our outreach is designed in three phases to systematically engage voters, build anti-incumbency sentiment, and deliver the campaign message effectively. A dedicated campaign manager coordinates end-to-end execution.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Arrows */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
              <div className="flex justify-around items-center px-20">
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-100 border-2 border-[#c8102e] animate-ping"></div>
                </div>
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-red-200 to-transparent relative">
                   <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-100 border-2 border-[#c8102e] animate-ping"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
              {[
                {
                  step: '1',
                  title: 'BUILD ANTI-INCUMBENCY',
                  points: [
                    'Identifying & amplifying local issues',
                    'Mobilizing discontent against the incumbent',
                    'Framing a winning narrative to unsettle the opposition'
                  ],
                  icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                },
                {
                  step: '2',
                  title: 'EXECUTE OUTREACH PROGRAM',
                  points: [
                    'Executing door-to-door, public meetings, & small group mobilizations',
                    'Utilizing trained field teams for direct voter interaction',
                    'Gathering actionable voter data & insights'
                  ],
                  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                },
                {
                  step: '3',
                  title: 'DELIVER CORE MESSAGE',
                  points: [
                    'Communicating key campaign messages',
                    'Addressing local concerns & aspirations',
                    'Providing a compelling vision for the future'
                  ],
                  icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z'
                }
              ].map((phase, i) => (
                <FadeInWhenVisible key={i} delay={i * 0.2}>
                  <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all h-full group relative overflow-hidden flex flex-col">
                    <div className="w-16 h-16 rounded-2xl bg-red-50 text-[#c8102e] flex items-center justify-center mb-10 shadow-sm border border-red-100 group-hover:bg-[#c8102e] group-hover:text-white transition-colors duration-500">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={phase.icon} />
                      </svg>
                    </div>
                    <span className="text-4xl font-bold text-gray-50 absolute top-8 right-8 group-hover:text-red-50 transition-colors">{phase.step}</span>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-8 uppercase tracking-wider leading-tight">{phase.title}</h4>
                    
                    <ul className="space-y-6 flex-grow">
                      {phase.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#c8102e] mt-2 shrink-0 group-hover:scale-150 transition-transform"></div>
                          <span className="text-gray-600 font-bold text-[15px] leading-relaxed">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 bg-gray-900 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8102e] opacity-10 blur-[80px] -mr-32 -mt-32"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
               <span className="text-[#c8102e] font-bold text-xl uppercase tracking-widest italic">Outcome:</span>
               <div className="flex flex-wrap items-center justify-center gap-4 text-white font-bold text-sm md:text-lg uppercase tracking-tight">
                  <span>Sustained engagement</span>
                  <svg className="w-6 h-6 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
                  <span>Increased support</span>
                  <svg className="w-6 h-6 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path d="M9 5l7 7-7 7" /></svg>
                  <span>Maximum vote conversion</span>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Campaign Management */}
      <section className="bg-gray-50/50 pb-32">
        <SectionHeader 
          title="Campaign Management" 
          subtitle="From planning and logistics to real-time monitoring"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'PLANNING', points: ['Electoral roadmap', 'Objective setting'] },
              { step: '2', title: 'RESOURCE', points: ['Logistics management', 'Optimal allocation'] },
              { step: '3', title: 'FIELD TEAMS', points: ['Grassroots mobilization', 'Team supervision'] },
              { step: '4', title: 'CRISIS/PR', points: ['Media management', 'Narrative control'] },
              { step: '5', title: 'MONITORING', points: ['Real-time tracking', 'Feedback systems'] }
            ].map((card, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col h-full hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 text-gray-300 font-bold flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-[#c8102e] group-hover:text-white transition-colors">
                    {card.step}
                  </div>
                  <h3 className="text-[13px] font-bold text-gray-900 mb-6 uppercase tracking-wider">{card.title}</h3>
                  <div className="h-0.5 bg-gray-100 w-full mb-6 group-hover:bg-red-100 transition-colors"></div>
                  <ul className="space-y-3 mt-auto">
                    {card.points.map((p, idx) => (
                      <li key={idx} className="text-gray-500 text-[11px] font-bold leading-snug flex items-start gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#c8102e] mt-1 shrink-0"></div>
                         {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Voter Segmentation Section */}
      <section className="bg-white overflow-hidden pt-24 pb-32">
        <SectionHeader 
          title="Voter Segmentation" 
          subtitle="Sharper targeting through voter-type specific messaging"
        />

        <div className="max-w-7xl mx-auto px-6 pt-24 flex flex-col items-center relative">
          <div data-aos="fade-in" data-aos-duration="1000" className="w-full">
            <div className="relative w-[1000px] h-[750px] max-w-full hidden lg:block mx-auto font-sans mb-4">
              
              {/* Dashed Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1000 750">
                 {[ 
                   "M500,350 Q 500,200 500,120",
                   "M500,350 Q 700,250 820,220",
                   "M500,350 Q 700,450 820,520",
                   "M500,350 Q 500,450 500,620",
                   "M500,350 Q 300,450 180,520",
                   "M500,350 Q 300,250 180,220"
                 ].map((pathD, idx) => (
                   <path 
                     key={idx}
                     d={pathD} 
                     fill="none" 
                     stroke="#b91c1c" 
                     strokeWidth="1" 
                     strokeDasharray="5 5" 
                     opacity="0.6"
                     data-aos="fade-in"
                     data-aos-delay={800 + idx * 100}
                     data-aos-duration="1000"
                   />
                 ))}
              </svg>

              {/* Central Target Area */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[450px] h-[250px] z-10 flex flex-col items-center justify-center">
                 {/* 3D Target */}
                 <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-md">
                    {[
                      { rx: 190, ry: 80, fill: '#f8fafc', stroke: '#e2e8f0', delay: 100 },
                      { rx: 150, ry: 60, fill: '#f1f5f9', stroke: '#cbd5e1', delay: 200 },
                      { rx: 110, ry: 40, fill: '#e2e8f0', stroke: '#94a3b8', delay: 300 },
                      { rx: 70, ry: 25, fill: '#cbd5e1', stroke: '#64748b', delay: 400 },
                      { rx: 30, ry: 10, fill: '#64748b', stroke: 'none', delay: 500 }
                    ].map((ring, idx) => (
                      <ellipse 
                        key={idx}
                        cx="200" 
                        cy="100" 
                        rx={ring.rx} 
                        ry={ring.ry} 
                        fill={ring.fill} 
                        stroke={ring.stroke} 
                        strokeWidth="8"
                        style={{ transformOrigin: '200px 100px' }}
                        data-aos="zoom-in"
                        data-aos-delay={ring.delay}
                        data-aos-duration="800"
                      />
                    ))}
                 </svg>
                 
                 {/* Red Arrow Piercing Target */}
                 <div 
                    data-aos="fade-down-left"
                    data-aos-delay="600"
                    data-aos-duration="1000"
                    className="absolute inset-0 w-full h-full z-20 drop-shadow-2xl pointer-events-none"
                 >
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      <g transform="translate(200, 100) rotate(155)">
                        <path d="M0,0 L120,0" stroke="#c8102e" strokeWidth="8" strokeLinecap="round" />
                        <polygon points="0,0 25,-12 25,12" fill="#c8102e" />
                        <polygon points="90,0 120,-20 130,-12 110,0" fill="#8f0b20" />
                        <polygon points="90,0 120,20 130,12 110,0" fill="#8f0b20" />
                      </g>
                    </svg>
                 </div>
              </div>

              {/* Central Text (Swing Voters) */}
              <div 
                 data-aos="fade-up"
                 data-aos-delay="800"
                 data-aos-duration="800"
                 className="absolute top-[58%] left-1/2 -translate-x-1/2 text-center w-full max-w-[350px] z-20"
              >
                 <h4 className="font-bold text-gray-900 text-[22px] tracking-wide mb-1 uppercase">SWING VOTERS</h4>
                 <p className="text-gray-700 text-[13px] font-medium leading-snug">Identify high-potential swing voters for targeted persuasion</p>
              </div>

              {/* Nodes */}
              {[
                { id: 'core', x: 500, y: 120, title: 'CORE VOTERS', desc: 'Identify and strengthen base support', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { id: 'silent', x: 820, y: 220, title: 'SILENT VOTERS', desc: 'Understand & address concerns of silent & undecided voters', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
                { id: 'first', x: 820, y: 520, title: 'FIRST TIME VOTERS', desc: 'Engage & inform new & young voters', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z' },
                { id: 'inf1', x: 500, y: 620, title: 'INFLUENCED VOTERS', desc: 'Counter opposing influences & narratives', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
                { id: 'inf2', x: 180, y: 520, title: 'INFLUENCED VOTERS', desc: 'Counter opposing influences & narratives', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
                { id: 'issue', x: 180, y: 220, title: 'ISSUE-BASED TARGETING', desc: 'Tailor messaging to local and issue-based concerns', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' }
              ].map((node, idx) => (
                <div 
                  key={node.id} 
                  className="absolute z-30" 
                  style={{ left: `${node.x}px`, top: `${node.y}px`, transform: 'translate(-50%, -50%)' }}
                >
                  <div 
                    data-aos="zoom-in-up"
                    data-aos-delay={1000 + idx * 100}
                    data-aos-duration="800"
                    className="flex flex-col items-center text-center w-[200px]"
                  >
                    <div className="w-[120px] h-[120px] rounded-full border-[2px] border-[#911624] p-[3px] bg-white mb-4 shadow-sm group cursor-pointer hover:scale-105 transition-transform">
                       <div className="w-full h-full rounded-full border-[2px] border-[#911624] flex items-center justify-center bg-white group-hover:bg-red-50 transition-colors">
                          <svg className="w-10 h-10 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                             <path strokeLinecap="round" strokeLinejoin="round" d={node.icon}/>
                          </svg>
                       </div>
                    </div>
                    <h4 className="font-bold text-gray-900 text-[14px] uppercase tracking-wide leading-tight mb-2">{node.title}</h4>
                    <p className="text-gray-600 text-[12px] leading-snug font-medium">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Fallback */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden mb-12 w-full">
            {[
              { title: 'Core Voters', desc: 'Identify and strengthen base support' },
              { title: 'Silent Voters', desc: 'Understand & address concerns of silent & undecided voters' },
              { title: 'First Time Voters', desc: 'Engage & inform new & young voters' },
              { title: 'Influenced Voters', desc: 'Counter opposing influences & narratives' },
              { title: 'Issue-Based Targeting', desc: 'Tailor messaging to local and issue-based concerns' },
              { title: 'Swing Voters', desc: 'Identify high-potential swing voters for targeted persuasion' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                data-aos="fade-up" 
                data-aos-delay={idx * 100} 
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center"
              >
                <h4 className="font-bold text-[#c8102e] uppercase text-[15px] mb-2">{item.title}</h4>
                <p className="text-gray-600 font-medium text-[13px]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div 
            data-aos="fade-up"
            data-aos-delay="200"
            className="w-full max-w-[800px] mt-4 p-6 bg-transparent relative overflow-hidden text-center"
          >
             <div className="flex items-center justify-center gap-6 mb-6">
                <div className="h-px bg-gray-300 w-12 md:w-24"></div>
                <h3 className="text-gray-800 font-bold text-[16px] md:text-xl uppercase tracking-[0.2em] text-center whitespace-nowrap">
                  RESULTS
                </h3>
                <div className="h-px bg-gray-300 w-12 md:w-24"></div>
             </div>
            
             <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-gray-800 font-bold text-[13px] md:text-[16px] tracking-wide">
                <span>Seamless Execution</span>
                <span className="text-[#c8102e] font-light text-xl">→</span>
                <span>Coordination of Teams</span>
                <span className="text-[#c8102e] font-light text-xl">→</span>
                <span>Maximum Impact Leading to Election Win</span>
             </div>
          </div>
        </div>
      </section>

      {/* Digital Advertisement Section */}
      <section className="bg-gray-50/50 pb-32">
        <SectionHeader 
          title="Digital Advertisement" 
          subtitle="Targeted messaging across SMS, IVRS, WhatsApp, rich media"
        />

        <div className="max-w-7xl mx-auto px-6 mt-24">
          <div className="text-center mb-16">
            <h3 className="text-xl font-bold text-gray-900 uppercase tracking-widest">Targeted Political Messaging Across Digital Platforms</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'SMS TEXT',
                desc: 'Reach voters directly with targeted SMS alerts.',
                icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
              },
              {
                title: 'IVRS',
                desc: 'Interactive voice response for specific voter interactions.',
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              },
              {
                title: 'BULK WHATSAPP',
                desc: 'Broadcast messages to groups for engagement.',
                icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
              },
              {
                title: 'AI AUDIO/VIDEO MESSAGES',
                desc: 'AI-generated voice or video messages at scale.',
                icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z'
              }
            ].map((card, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all h-full group text-center flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-red-50 text-[#c8102e] flex items-center justify-center mb-8 border border-red-100 group-hover:bg-[#c8102e] group-hover:text-white transition-all duration-500 shadow-sm">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-6 uppercase tracking-widest">{card.title}</h4>
                  <div className="w-8 h-1 bg-red-100 mb-6 group-hover:w-16 group-hover:bg-[#c8102e] transition-all"></div>
                  <p className="text-gray-500 font-bold text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <div className="mt-16 text-center">
            <span className="text-[#c8102e] font-bold text-sm md:text-base uppercase tracking-[0.3em] italic">
              Delivering Personalized Messages for Maximum Outreach
            </span>
          </div>
        </div>
      </section>
      {/* Why Partner With Us Section */}
      <section className="bg-white pb-24 border-t border-gray-100">
        <SectionHeader 
          title="Why Partner With Us?" 
          subtitle="Research-led strategy. Execution-driven outcomes."
        />

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

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm font-bold text-gray-400 lowercase tracking-widest pb-20">
               <a href="https://cpcr.in" className="flex items-center gap-2 hover:text-[#c8102e] transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
                 cpcr.in
               </a>
               <a href="mailto:connect@cpcr.in" className="flex items-center gap-2 hover:text-[#c8102e] transition-colors">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 connect@cpcr.in
               </a>
               <div className="flex items-center gap-2">
                 <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                 9936599267
               </div>
            </div>
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
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === tab ? 'bg-[#c8102e] text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{tab}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: index * 0.05 }} onClick={() => setSelectedProject(project)} className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-xl transition-all cursor-pointer">
                <div className="block h-56 w-full overflow-hidden relative">
                  <img src={getImageUrl(project.img)} alt={project.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-[#c8102e] rounded-full uppercase tracking-widest shadow-sm">{project.category}</div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">{project.location}</p>
                  <h3 className="font-bold text-gray-900 text-xl leading-snug mb-4 group-hover:text-[#c8102e] transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6 line-clamp-2">{project.description}</p>
                  <div className="text-[#c8102e] font-bold text-sm inline-flex items-center gap-2 group/btn mt-auto">
                    View Project Details
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Insights Section */}
      <section className="bg-white py-20 px-6 lg:px-20 border-t border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-[13px] font-extrabold text-gray-900 uppercase tracking-widest">LATEST INSIGHTS</h2>
          </div>

          {/* Constrained Marquee Container */}
          <div className="relative group overflow-hidden">
            {/* Gradient masks for smooth fade at edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
            
            <div className="animate-marquee flex gap-8">
              {[...posts, ...posts, ...posts, ...posts].map((post, index) => (
                <div 
                  key={`${post._id}-${index}`} 
                  className="w-[300px] md:w-[400px] shrink-0 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all cursor-pointer group/card"
                >
                  <Link to={`/blog/${post._id}`} className="block h-48 md:h-56 w-full overflow-hidden relative">
                    <img src={getImageUrl(post.img)} alt={post.title} className="w-full h-full object-cover transform transition-transform duration-700 group-hover/card:scale-110" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-[#c8102e] rounded-full uppercase tracking-widest shadow-sm">
                      {post.category}
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-3">{post.date}</p>
                    <Link to={`/blog/${post._id}`}>
                      <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover/card:text-[#c8102e] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link to={`/blog/${post._id}`} className="text-[#c8102e] font-bold text-[13px] inline-flex items-center gap-2 group/btn">
                      Read More
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
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
