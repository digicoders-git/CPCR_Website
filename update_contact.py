import os
path = 'd:/Desktop/AI_Portfolio/portfolio/src/pages/Contact.jsx'
with open(path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = """      <section className="py-24 bg-white relative">
        {/* Floating text left */}
        <div className="absolute left-8 bottom-32 hidden md:block z-10">
          <span className="text-gray-400 text-[10px] tracking-[0.4em] font-bold uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>CONTACT</span>
        </div>
        
        {/* Floating text right */}
        <div className="absolute right-8 bottom-32 hidden md:flex flex-col items-center gap-4 z-10">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <span className="text-gray-400 text-[10px] tracking-[0.4em] font-bold uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>BACK TO TOP</span>
        </div>

        {/* Floating gray dot */}
        <div className="absolute left-[20%] top-32 w-3 h-3 rounded-full bg-gray-200 hidden md:block" />

        <div className="max-w-4xl mx-auto px-6 lg:px-20 w-full flex flex-col items-center">
          
          {/* Top Section: Contact Information */}
          <div className="text-center mb-24 w-full">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-black mb-16">
              Contact <span className="font-light text-gray-400">Information</span>
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-32 w-full">
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-black mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-[15px] font-semibold text-black tracking-wide">7007700577</span>
              </div>
              
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 text-black mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-[15px] font-semibold text-black tracking-wide">connect@cpcr.in</span>
              </div>
            </div>
          </div>

          {/* Form Section: Let's Talk */}
          <div className="w-full text-center mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-black mb-16">
              Let's <span className="font-light text-gray-400">Talk</span>
            </h2>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-12 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <input 
                  type="text" 
                  placeholder="WHAT'S YOUR NAME" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 pb-4 text-[9px] font-bold text-black uppercase tracking-[0.2em] placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="YOUR EMAIL" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 pb-4 text-[9px] font-bold text-black uppercase tracking-[0.2em] placeholder:text-gray-400 outline-none focus:border-black transition-colors"
                  required 
                />
              </div>
              
              <div className="relative">
                <textarea 
                  placeholder="TELL US ABOUT OUR PROJECT" 
                  rows={2}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b border-gray-200 pb-4 text-[9px] font-bold text-black uppercase tracking-[0.2em] placeholder:text-gray-400 outline-none focus:border-black transition-colors resize-none overflow-hidden"
                  required 
                />
                <div className="absolute right-0 bottom-4 pointer-events-none">
                  <svg className="w-3 h-3 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15L15 21M21 8L8 21" /></svg>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFB800] text-lg leading-none">*</span>
                  <span className="text-[10px] text-gray-400 font-light">We promise not to disclose your personal information to third parties.</span>
                </div>
                <button type="submit" className="group flex items-center bg-[#FFB800] rounded-full pl-6 pr-1.5 py-1.5 hover:bg-yellow-400 transition-colors shrink-0">
                  <span className="text-[9px] font-bold text-black uppercase tracking-[0.2em] mr-4">SEND MESSAGE</span>
                  <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                    <svg className="w-3.5 h-3.5 text-[#FFB800]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7-7m7-7H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
"""

top_lines = lines[:97]
with open(path, 'w', encoding='utf-8') as f:
    f.writelines(top_lines)
    f.write(new_content)
