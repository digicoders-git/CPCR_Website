import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { blogPosts } from './Blog'

export default function BlogDetail() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
        <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
        <Link to="/blog" className="text-[#c8102e] font-bold hover:underline">Return to Blog</Link>
      </div>
    )
  }

  return (
    <main className="font-sans bg-white text-gray-900 pb-20 md:pb-24 pt-24 min-h-screen">
      
      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-6 pt-12 md:pt-20 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#c8102e] uppercase tracking-widest mb-10 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block bg-red-50 text-[#c8102e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            {post.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.15] tracking-tight">
            {post.title}
          </h1>
          <p className="text-gray-500 font-medium text-lg max-w-2xl mx-auto mb-10">
            {post.date}
          </p>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative"
        >
          <img src={post.img} alt={post.title} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Article Content */}
      <section className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg md:prose-xl prose-red max-w-none text-gray-700 font-medium leading-relaxed">
          <p className="text-xl md:text-2xl text-gray-900 font-semibold mb-10 leading-snug">
            {post.excerpt}
          </p>
          <p className="mb-6">
            Elections are complex systems where millions of localized variables converge into a singular mandate. As the political landscape evolves, traditional methods of mass-messaging and large-scale rallies are increasingly being supplemented—and often replaced—by hyper-targeted, data-driven strategies. 
          </p>
          <p className="mb-6">
            In our recent research, we found that constituencies previously considered 'safe seats' are now highly competitive due to the rapid dissemination of digital information and shifting demographic priorities. Our comprehensive analysis of recent trends indicates that leaders who rely on real-time ground intelligence and robust data infrastructure have a significant electoral advantage.
          </p>
          
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">The Importance of Micro-Targeting</h2>
          <p className="mb-6">
            By leveraging deep analytics, campaigns can now understand voter sentiment at the booth level. This allows for the creation of customized communication strategies that address the specific socio-economic concerns of small voter clusters rather than relying on a generalized manifesto.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-[#c8102e] shrink-0" />
              <span><strong>Sentiment Analysis:</strong> Real-time tracking of public reaction to policy announcements.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-[#c8102e] shrink-0" />
              <span><strong>Demographic Shifts:</strong> Monitoring the changing expectations of first-time voters.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1.5 w-2 h-2 rounded-full bg-[#c8102e] shrink-0" />
              <span><strong>Resource Allocation:</strong> Directing campaign funds and volunteers to areas with the highest swing potential.</span>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="mb-10">
            The era of instinct-based politics is fading. Success in modern elections demands a rigorous, scientific approach to understanding the electorate. Organizations like CPCR are at the forefront of this transformation, providing the crucial insights needed to navigate the complexities of contemporary democracy.
          </p>
        </div>

        {/* Share & Tags */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex gap-2">
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-bold">#PoliticalStrategy</span>
            <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-bold">#DataAnalytics</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm font-bold text-gray-900 uppercase tracking-widest">Share:</span>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#c8102e] hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-[#c8102e] hover:bg-red-50 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
