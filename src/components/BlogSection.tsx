import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
}

export const BlogSection: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'post-1',
      title: 'The Art of Tactile Minimalism: Layering Light Wood and Raw Linen',
      excerpt: 'How thoughtful material pairings create warmth without visual clutter in modern living rooms.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      category: 'Design Philosophy',
      readTime: '4 min read',
      date: 'April 2026',
    },
    {
      id: 'post-2',
      title: 'Acoustic Architecture: Softening Hard Surfaces with Natural Rugs',
      excerpt: 'Balancing sound reflections and sensory comfort in open-plan Scandinavian residences.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      category: 'Interior Guide',
      readTime: '6 min read',
      date: 'March 2026',
    },
  ];

  return (
    <section id="blog" aria-label="Journal and Design Stories" className="py-16 md:py-24 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Intersection Observer Reveal */}
        <ScrollReveal direction="up" distance={30} duration={650} className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D97E4A] mb-2 block">
                The Atelier Journal
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#221F1B] font-normal">
                Design Perspectives
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#6C675E] max-w-md mt-3 md:mt-0">
              Insights on proportion, lighting, sustainable materiality, and the quiet beauty of intentional living.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {posts.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              direction="up"
              delay={idx * 150}
              distance={36}
              duration={700}
              className="h-full"
            >
              <motion.article
                id={`blog-card-${post.id}`}
                whileHover={{ y: -6 }}
                onClick={() => setActivePost(post)}
                className="group bg-white rounded-3xl overflow-hidden border border-[#ECE5DA] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer h-full"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EFEAE1]">
                    <img
                      src={post.image}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[10px] font-semibold tracking-wider uppercase text-[#885232] shadow-xs">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-3 text-xs text-[#8A847A] mb-2.5">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#D97E4A]" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#221F1B] group-hover:text-[#D97E4A] transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6A645B] leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-[#F5EFE6] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#7D776D] group-hover:text-[#D97E4A] transition-colors">
                    Read Article
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F5EFE6] group-hover:bg-[#D97E4A] group-hover:text-white text-[#524D46] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Article Reading Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl overflow-hidden shadow-2xl border border-[#E7E0D2]"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={activePost.image}
                alt={activePost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#2C2925] flex items-center justify-center shadow-md transition-colors"
                aria-label="Close article"
              >
                ✕
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-[#8A847A] mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-[#EFE9DD] font-semibold text-[#885232]">
                  {activePost.category}
                </span>
                <span>{activePost.date}</span>
                <span>•</span>
                <span>{activePost.readTime}</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#221F1B] mb-4">
                {activePost.title}
              </h3>
              <p className="text-sm text-[#5B554D] leading-relaxed mb-4">
                {activePost.excerpt}
              </p>
              <p className="text-sm text-[#666056] leading-relaxed mb-6">
                When curating spaces, minimalism is not about subtraction for the sake of emptiness; it is the deliberate elevation of textures that invite human touch. By layering natural unbleached flax linens with honed white oak and hand-thrown earthenware, every piece tells a quiet story of patience, balance, and acoustic stillness.
              </p>
              <div className="pt-4 border-t border-[#EAE3D5] flex justify-end">
                <button
                  type="button"
                  onClick={() => setActivePost(null)}
                  className="px-6 py-2.5 rounded-full text-xs font-medium text-white bg-[#D97E4A] hover:bg-[#C56F3D] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
