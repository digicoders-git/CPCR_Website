import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  // { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setIsOpen(false) }, [location])
  useEffect(() => { document.body.style.overflow = isOpen ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white/95 backdrop-blur-xl shadow-sm' : 'py-6 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="CPCR Logo" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`text-[13px] font-bold transition-colors ${isActive ? 'text-[#c8102e]' : 'text-gray-700 hover:text-[#c8102e]'}`}
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Link to="/contact" className="bg-[#c8102e] hover:bg-red-800 text-white text-[13px] font-bold py-2.5 px-6 rounded transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <button onClick={() => setIsOpen(!isOpen)} className="w-12 h-12 flex flex-col items-end justify-center gap-[6px] relative z-50" aria-label="Menu">
              <span className={`block h-[1.5px] transition-all bg-black ${isOpen ? 'w-6 rotate-45 translate-y-[7.5px]' : 'w-8'}`} />
              <span className={`block h-[1.5px] transition-all bg-black ${isOpen ? 'w-6 -rotate-45 -translate-y-[7.5px]' : 'w-6'}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile/Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }} 
            animate={{ x: 0 }} 
            exit={{ x: '100%' }} 
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white flex flex-col overflow-y-auto"
          >
            <div className="flex-1 w-full max-w-7xl mx-auto px-6 pt-32 pb-10 flex flex-col justify-between relative z-10">
              
              {/* Navigation Links */}
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div 
                      key={link.name} 
                      initial={{ opacity: 0, x: 20 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ delay: 0.1 + (i * 0.1), duration: 0.4 }}
                    >
                      <Link 
                        to={link.path} 
                        className={`block text-3xl font-bold tracking-tight transition-colors ${isActive ? 'text-[#c8102e]' : 'text-gray-900'}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Mobile CTA */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-12"
              >
                <Link to="/contact" className="block w-full bg-[#c8102e] text-white text-center text-lg font-bold py-4 rounded transition-colors">
                  Contact
                </Link>
                
                <div className="mt-10 pt-10 border-t border-gray-100 grid grid-cols-2 gap-8">
                   <div>
                    <h3 className="text-gray-400 font-medium mb-4 text-xs uppercase tracking-wider">Contact</h3>
                    <ul className="space-y-2 text-sm text-gray-800 font-medium">
                      <li>info@cpcr.in</li>
                      <li>+91 00000 00000</li>
                    </ul>
                   </div>
                   <div>
                    <h3 className="text-gray-400 font-medium mb-4 text-xs uppercase tracking-wider">Address</h3>
                    <ul className="space-y-2 text-sm text-gray-800 font-medium">
                      <li>Jaipur, Rajasthan</li>
                      <li>India</li>
                    </ul>
                   </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
