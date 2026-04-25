import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const blogPosts = [
  {
    id: 1,
    title: 'The Shift in Voter Sentiments: 2024 Election Analysis',
    excerpt: 'An in-depth look at how regional issues and economic policies are reshaping the voter base across northern states.',
    category: 'Elections',
    date: 'March 15, 2024',
    img: '/work-4.png'
  },
  {
    id: 2,
    title: 'Data-Driven Campaigning: Moving Beyond Traditional Rallies',
    excerpt: 'Why modern political campaigns must rely on booth-level data analytics to target specific demographics effectively.',
    category: 'Strategy',
    date: 'February 28, 2024',
    img: '/work-2.png'
  },
  {
    id: 3,
    title: 'Understanding the Youth Vote: Key Drivers in 2025',
    excerpt: 'What the newest generation of voters expects from their representatives, based on our latest extensive survey.',
    category: 'Research',
    date: 'January 10, 2024',
    img: '/work-3.png'
  },
  {
    id: 4,
    title: 'The Impact of Social Media on Rural Electorates',
    excerpt: 'How digital penetration has altered the landscape of political communication in remote constituencies.',
    category: 'Digital',
    date: 'December 05, 2023',
    img: '/work-1.png'
  },
  {
    id: 5,
    title: 'Micro-Targeting: The Future of Grassroots Mobilization',
    excerpt: 'A case study on how localized messaging strategies yielded unprecedented results in recent state elections.',
    category: 'Case Study',
    date: 'November 18, 2023',
    img: '/hero-survey.png'
  },
  {
    id: 6,
    title: 'Caste Dynamics vs. Development Politics',
    excerpt: 'Analyzing the tug-of-war between traditional voting patterns and the rising demand for infrastructural growth.',
    category: 'Analysis',
    date: 'October 22, 2023',
    img: '/work-2.png'
  }
]

export default function Blog() {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all cursor-pointer"
            >
              <Link to={`/blog/${post.id}`} className="block h-56 w-full overflow-hidden relative">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#c8102e] rounded-full uppercase tracking-wide shadow-sm">
                  {post.category}
                </div>
              </Link>
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <p className="text-gray-400 text-sm font-medium mb-3">{post.date}</p>
                <Link to={`/blog/${post.id}`}>
                  <h3 className="font-extrabold text-gray-900 text-xl leading-snug mb-3 group-hover:text-[#c8102e] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-[#c8102e] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  Read Article
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
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
