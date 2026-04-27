import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-white border-t-[6px] border-[#c8102e] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative">
        
        {/* Floating WhatsApp Icon */}
        <a href="https://wa.me/919936599267" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform z-50">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 items-start">
          
          {/* Column 1: Logo & Name */}
          <div className="flex flex-col pr-8">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="CPCR Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
              Providing reliable ground intelligence for better political decision-making.
            </p>
            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#c8102e] hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#c8102e] hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#c8102e] hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#c8102e] hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:border-l-2 border-gray-100 lg:pl-10 flex flex-col">
            <h4 className="text-gray-900 font-bold text-[13px] mb-6 uppercase tracking-widest">Our Services</h4>
            <ul className="space-y-2.5">
              <li><Link to="/services" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Voter Data Analysis</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Campaign Strategy</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Ground Intelligence</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Digital Media Management</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Survey & Research</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col lg:pl-10">
            <h4 className="text-gray-900 font-bold text-[13px] mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Services</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Blog</Link></li>
              <li><Link to="/about" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-[#c8102e] text-[13px] font-medium transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col lg:pl-10">
            <h4 className="text-gray-900 font-bold text-[13px] mb-6 uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-500 text-[13px] font-medium">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+919936599267" className="hover:text-[#c8102e] transition-colors">+91 9936599267</a>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-[13px] font-medium">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:connect@cpcr.in" className="hover:text-[#c8102e] transition-colors">connect@cpcr.in</a>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-[13px] font-medium">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
               Lucknow Uttar Pradesh, India
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Section */}
        <div className="mt-12 pt-6 border-t border-gray-50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.25em]">
            © 2026 CPCR. All Rights Reserved . Crafted with ❤️ by <a href="https://digicoders.in" target="_blank" rel="noopener noreferrer" className="text-[#c8102e] hover:text-[#c8102e] hover:underline text-[11px] font-bold uppercase tracking-widest transition-colors">
              Team Digicoders
            </a> 
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#c8102e] text-[11px] font-bold uppercase tracking-widest transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-gray-400 hover:text-[#c8102e] text-[11px] font-bold uppercase tracking-widest transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
