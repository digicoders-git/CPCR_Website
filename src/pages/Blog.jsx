import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_API_URL;
const API_URL = `${BASE_URL}/api/blogs`;

// We keep the export for structural compatibility, but it will be empty by default 
// or we can keep it as a fallback if the API fails.
export const blogPosts = [] 

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(API_URL)
        setPosts(res.data)
      } catch (err) {
        console.error('Error fetching blogs:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  return (
    <main className="font-sans bg-white text-gray-900 pb-20 md:pb-24">
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-24 px-6 text-center border-b border-gray-100 mb-16 flex flex-col items-center justify-center">
        {/* Background Overlay Image (faded & grayscale) */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.10] grayscale">
           <img src="/portfolio-hero-bg.png" alt="Background" className="w-full h-full object-cover" />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Latest Insights</h1>
          <p className="text-gray-500 font-medium text-lg mb-6">Expert analysis, research findings, and political strategy updates</p>
          <div className="w-12 h-[3px] bg-[#c8102e] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 border-4 border-[#c8102e] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post, index) => (
              <motion.article 
                key={post._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all cursor-pointer"
              >
                <Link to={`/blog/${post._id}`} className="block h-56 w-full overflow-hidden relative">
                  <img 
                    src={post.img.startsWith('http') ? post.img : `${BASE_URL}${post.img}`} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#c8102e] rounded-full uppercase tracking-wide shadow-sm">
                    {post.category}
                  </div>
                </Link>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <p className="text-gray-400 text-sm font-medium mb-3">{post.date}</p>
                  <Link to={`/blog/${post._id}`}>
                    <h3 className="font-extrabold text-gray-900 text-xl leading-snug mb-3 group-hover:text-[#c8102e] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post._id}`} className="text-[#c8102e] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Read Article
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-4xl mx-auto px-6 mt-24">
        <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Never Miss an Update</h3>
          <p className="text-gray-600 font-medium mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter to receive the latest political research and strategic insights directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-grow px-5 py-3.5 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:border-[#c8102e] focus:ring-1 focus:ring-[#c8102e] transition-colors"
            />
            <button 
              type="submit" 
              className="bg-[#c8102e] hover:bg-red-800 text-white font-bold py-3.5 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
