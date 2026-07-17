import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { useAdSenseScript } from './useAdSenseScript';

const updateMetaTags = (post: typeof BLOG_POSTS[0] | null) => {
  const defaultTitle = "Daniel Samuel | Global Tech Insights & Elite Frontend Architecture";
  const defaultDesc = "Deep tech analysis, hardware engineering reviews, and elite custom web development architectures. Discover the intersection of high-performance logic and visual aesthetics.";
  const defaultUrl = "https://yourtechguyng.com";
  const defaultImage = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200";

  const title = post ? `${post.title} | Daniel Samuel` : defaultTitle;
  const desc = post ? post.excerpt : defaultDesc;
  const url = post ? `${defaultUrl}/blog/${post.slug}` : defaultUrl;
  const image = post ? post.imageUrl : defaultImage;

  // Title
  document.title = title;

  // Primary Metas
  const metaTitle = document.querySelector('meta[name="title"]');
  if (metaTitle) metaTitle.setAttribute("content", title);

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", desc);

  // Canonical Link
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) canonical.setAttribute("href", url);

  // Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", desc);

  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute("content", url);

  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) ogImage.setAttribute("content", image);

  // Twitter
  const twTitle = document.querySelector('meta[property="twitter:title"]');
  if (twTitle) twTitle.setAttribute("content", title);

  const twDesc = document.querySelector('meta[property="twitter:description"]');
  if (twDesc) twDesc.setAttribute("content", desc);

  const twUrl = document.querySelector('meta[property="twitter:url"]');
  if (twUrl) twUrl.setAttribute("content", url);

  const twImage = document.querySelector('meta[property="twitter:image"]');
  if (twImage) twImage.setAttribute("content", image);
};

const Blog: React.FC = () => {
  const [activePost, setActivePost] = React.useState<typeof BLOG_POSTS[0] | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Dynamically load AdSense script on blogs only
  useAdSenseScript();

  // On mount or location change, parse slug
  React.useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'blog' && pathParts[2]) {
      const slug = pathParts[2];
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        setActivePost(post);
        // Scroll to blog section when deep-linked
        const blogSec = document.getElementById('blog');
        if (blogSec) {
          blogSec.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setActivePost(null);
      }
    } else {
      setActivePost(null);
    }
  }, [location.pathname]);

  // Handle activePost changes to update URL & dynamic SEO metadata
  React.useEffect(() => {
    updateMetaTags(activePost);

    if (activePost) {
      const expectedPath = `/blog/${activePost.slug}`;
      if (location.pathname !== expectedPath) {
        navigate(expectedPath, { replace: false });
      }
    } else {
      if (location.pathname.startsWith('/blog/')) {
        navigate('/', { replace: false });
      }
    }
  }, [activePost, navigate, location.pathname]);

  // Disable body scroll when modal is active
  React.useEffect(() => {
    if (activePost) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('popup-open');
      window.dispatchEvent(new CustomEvent('popup-state', { detail: { open: true } }));
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('popup-open');
      window.dispatchEvent(new CustomEvent('popup-state', { detail: { open: false } }));
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('popup-open');
      window.dispatchEvent(new CustomEvent('popup-state', { detail: { open: false } }));
    };
  }, [activePost]);
  
  // Distribute the 10 blog posts logically
  const featured = BLOG_POSTS[0];
  const sidePosts = BLOG_POSTS.slice(1, 3);
  const gridPosts = BLOG_POSTS.slice(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 18 
      } 
    }
  };

  return (
    <section id="blog" className="py-16 md:py-28 bg-white px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(139,69,19,0.02),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(165,42,42,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto align-top">
        {/* Title and Intro Paragraph */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-7xl lg:text-[7.5vw] font-display font-extrabold tracking-tighter text-[#000000] leading-[0.95] lg:leading-[0.9]">
              IDEAS &<br/><span className="text-[#A52A2A]">INSIGHTS.</span>
            </h2>
          </div>
        </div>
        
        {/* CSS selector 1 targets this outer container */}
        <div>
          {/* Animated Parent Container */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12 lg:space-y-16"
          >
            {/* CSS Selector 2 targets this div */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              
              {/* Left Column: Big Featured Spotlight Card (CSS Selector 3 targets article:nth-of-type(1)) */}
              <motion.article 
                id="blog-spotlight"
                variants={itemVariants}
                className="lg:col-span-8 group relative bg-[#0F211D] border border-[#0F211D]/10 rounded-[2.5rem] p-6 sm:p-8 md:p-10 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-emerald-950/25 overflow-hidden cursor-pointer flex flex-col justify-between" 
                onClick={() => setActivePost(featured)}
              >
                {/* Image Container for Featured Blog */}
                <div className="w-full h-48 sm:h-64 md:h-72 overflow-hidden rounded-2xl relative mb-6 border border-white/15 group-hover:border-white/25 transition-all duration-500 flex-shrink-0">
                  <img 
                    src={featured.imageUrl} 
                    alt={featured.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F211D]/85 via-[#0F211D]/10 to-transparent" />
                </div>

                {/* Ambient Background Spotlights */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(165,42,42,0.3),transparent_65%)] pointer-events-none transition-all duration-500 group-hover:opacity-80" />
                
                <div className="relative z-10 flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-[#8B4513] tracking-[0.3em] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B4513] animate-pulse"></span>
                        {featured.date}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-3.5xl font-display font-extrabold text-white mb-3 leading-tight group-hover:text-[#8B4513] transition-colors duration-300">
                      {featured.title}
                    </h3>
                    
                    <p className="text-sm font-normal text-white/70 leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePost(featured);
                      }}
                      className="group/btn inline-flex items-center gap-2.5 bg-[#8B4513] text-[#FFFFFF] font-mono font-black text-[10px] uppercase tracking-[0.2em] py-3.5 px-6 rounded-full shadow-lg hover:bg-white hover:text-[#000000] transition-all duration-300 transform active:scale-95 group-hover:gap-4"
                    >
                      Read Full Essay
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:rotate-45" />
                    </button>
                  </div>
                </div>
              </motion.article>

              {/* Right Column: Symmetrical Stack of 2 Sideposts */}
              <div id="blog-sidebar" className="lg:col-span-4 flex flex-col justify-between gap-6">
                {sidePosts.map((post, idx) => (
                  <motion.article 
                    key={post.id} 
                    variants={itemVariants}
                    id={`blog-side-card-${post.id}`}
                    className="w-full group relative bg-white hover:bg-[#A52A2A]/[0.02] border border-[#000000]/8 hover:border-[#A52A2A]/35 rounded-[2rem] p-5 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#000000]/3 flex flex-col justify-between"
                    onClick={() => setActivePost(post)}
                  >
                    <div>
                      {/* Thumbnail Image inside side-card */}
                      <div className="w-full h-36 overflow-hidden rounded-xl relative mb-4 border border-[#0F211D]/5">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      <div className="flex items-center justify-between gap-4 mb-2.5">
                        <span className="text-[8px] font-mono font-semibold text-[#2D5A27] tracking-[0.25em] uppercase bg-[#2D5A27]/6 py-1 px-3 rounded-full">
                          {post.date}
                        </span>
                        <span className="text-xs font-mono font-medium text-[#0F211D]/25 group-hover:text-[#2D5A27]/40 tracking-wider transition-colors duration-300">
                          0{idx + 2}
                        </span>
                      </div>
                      
                      <h4 className="text-lg md:text-xl lg:text-lg xl:text-xl font-display font-extrabold text-[#0F211D] mb-2 leading-tight tracking-tight group-hover:text-[#2D5A27] transition-colors duration-300">
                        {post.title}
                      </h4>
                      
                      <p className="text-xs font-sans font-normal text-[#0F211D]/65 line-clamp-2 leading-relaxed mb-1">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-[9px] font-mono font-extrabold uppercase tracking-[0.2em] text-[#0F211D]/50 group-hover:text-[#2D5A27] mt-4 transition-all duration-300">
                      Explore Post
                      <ArrowUpRight className="w-3 h-3 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
            
            {/* Section Transition Header */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between border-b border-[#0F211D]/10 pb-4">
                <p className="text-[10px] font-mono font-black tracking-[0.4em] uppercase text-[#0F211D]/55 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#2D5A27]" />
                  Technical Library
                </p>
              </div>
            </div>
            
            {/* Bottom Grid: Remaining 3 Articles distributed side-by-side */}
            <div 
              id="blog-grid" 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {gridPosts.map((post, idx) => (
                <motion.article 
                  key={post.id} 
                  variants={itemVariants}
                  id={`blog-grid-card-${post.id}`}
                  className="w-full group relative bg-white hover:bg-[#2D5A27]/[0.02] border border-[#0F211D]/8 hover:border-[#2D5A27]/35 rounded-[2rem] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0F211D]/3 flex flex-col justify-between"
                  onClick={() => setActivePost(post)}
                >
                  <div>
                    {/* Grid card Image Container */}
                    <div className="w-full h-44 overflow-hidden rounded-xl relative mb-5 border border-[#0F211D]/5">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-[9px] font-mono font-bold text-[#2D5A27] tracking-[0.2em] uppercase bg-[#2D5A27]/5 py-0.5 px-2.5 rounded">
                        {post.date}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#0F211D]/15 group-hover:text-[#2D5A27]/30 transition-colors duration-300">
                        {(idx + 4) < 10 ? `0${idx + 4}` : idx + 4}
                      </span>
                    </div>
                    
                    <h4 className="text-base md:text-lg font-display font-extrabold text-[#0F211D] mb-3 leading-snug group-hover:text-[#2D5A27] transition-colors duration-300">
                      {post.title}
                    </h4>
                    
                    <p className="text-xs text-[#0F211D]/60 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-[#0F211D]/5 flex items-center justify-between text-[9px] font-mono font-bold uppercase tracking-wider text-[#0F211D]/40 group-hover:text-[#2D5A27] transition-all duration-300">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal for viewing blog post detail natively without changing the URL */}
      <AnimatePresence>
        {activePost && (
          <div 
            className="fixed inset-0 z-[2000] flex items-center justify-center bg-[#0F211D]/80 backdrop-blur-md p-4 sm:p-6 md:p-10"
            onClick={() => setActivePost(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white text-[#0F211D] w-full max-w-4xl h-full max-h-[90vh] overflow-y-auto rounded-[2rem] border border-[#0F211D]/10 shadow-2xl relative flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header/Sticky Controls */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md z-30 px-6 sm:px-10 py-5 border-b border-[#0F211D]/10 flex justify-between items-center">
                <span className="text-[10px] font-mono font-bold text-[#2D5A27] tracking-[0.3em] uppercase">
                  {activePost.date}
                </span>
                <button 
                  onClick={() => setActivePost(null)}
                  className="p-2 rounded-full bg-[#0F211D]/5 hover:bg-[#A52A2A]/10 text-[#0F211D] hover:text-[#A52A2A] transition-all duration-300"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 sm:p-10 space-y-8 flex-grow">
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold leading-tight text-[#0F211D]">
                    {activePost.title}
                  </h3>
                  <p className="text-base sm:text-lg font-medium text-[#0F211D]/60 leading-relaxed max-w-3xl pt-2">
                    {activePost.excerpt}
                  </p>
                </div>

                {/* Premium Blog Image Banner */}
                <div className="w-full h-48 sm:h-72 md:h-96 overflow-hidden rounded-[1.5rem] relative my-6 border border-[#0F211D]/10">
                  <img 
                    src={activePost.imageUrl} 
                    alt={activePost.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="pt-6 border-t border-[#0F211D]/10">
                  <div className="prose prose-zinc max-w-none font-sans space-y-6 text-sm sm:text-base md:text-lg text-[#0F211D]/80 leading-relaxed font-normal">
                    {activePost.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;
