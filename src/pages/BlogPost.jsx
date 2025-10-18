import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the blog post by slug
  const blog = blogs.find(b => b.slug === slug);

  // If blog not found
  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0014] to-[#1a001a] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-3xl font-bold text-[#ffb3d9] mb-4 font-['Inter']">Story Not Found</h1>
          <p className="text-[#ffb3d9]/80 mb-8 font-['Inter']">This passionate tale seems to have wandered off...</p>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300 font-['Inter']"
          >
            Return to Stories
          </button>
        </div>
      </div>
    );
  }

  const handleBackToStories = () => {
    navigate('/#stories');
  };

  const handleRelatedStoryClick = (relatedSlug) => {
    navigate(`/blog/${relatedSlug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0014] to-[#1a001a] font-['Inter']">
      {/* Empty nav for spacing */}
      <nav className="border-b border-[#ff0080]/20 py-4 bg-[#0a0014]"></nav>

      {/* Blog Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {/* Enhanced Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff0080]/20 to-[#ff4da6]/20 border border-[#ff0080]/30 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-[#ff0080] text-sm font-semibold uppercase tracking-wider font-['Inter']">{blog.category}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight font-['Playfair_Display']">
            {blog.title}
          </h1>

          {/* Enhanced Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#ffb3d9]/80 mb-8">
            <div className="flex items-center gap-3 bg-[#1a001a] px-4 py-3 rounded-xl border border-[#ff0080]/20">
              <span className="w-10 h-10 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] rounded-full flex items-center justify-center text-white text-sm font-bold font-['Inter']">
                {blog.author.charAt(0)}
              </span>
              <div className="flex flex-col">
                <span className="font-semibold font-['Inter']">{blog.author}</span>
                <span className="text-xs text-[#ffb3d9]/60 font-['Inter']">Author</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-[#ff0080]/10 px-4 py-2 rounded-full">
                <span className="text-[#ff0080] text-lg">⏱️</span>
                <span className="font-semibold font-['Inter']">{blog.readTime}</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#ff4da6]/10 px-4 py-2 rounded-full">
                <span className="text-yellow-400 text-lg">⭐</span>
                <span className="font-semibold font-['Inter']">{blog.rating}</span>
              </div>
              
              <div className="flex items-center gap-2 bg-[#ff0080]/10 px-4 py-2 rounded-full">
                <span className="text-[#ff4da6] text-lg">📅</span>
                <span className="font-semibold font-['Inter']">{new Date(blog.publishedDate).toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          {/* Enhanced Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#ff0080]/10 border border-[#ff0080]/20 text-[#ffb3d9] text-sm rounded-full font-medium hover:bg-[#ff0080]/20 transition-colors duration-300 font-['Inter']"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Enhanced Featured Image */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl border border-[#ff0080]/30 group">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014] via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full font-['Inter']">
              Featured Image
            </span>
          </div>
        </div>

        {/* Enhanced Blog Content */}
        <div className="max-w-none mb-12">
          <div className="bg-gradient-to-br from-[#1a001a]/50 to-[#330033]/30 rounded-2xl p-8 border border-[#ff0080]/10">
            <div 
              className="text-[#ffb3d9] leading-relaxed text-lg space-y-6 font-['Inter']"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#ff0080]/40 font-['Inter']">
            <span className="text-xl group-hover:scale-110 transition-transform duration-300">❤️</span>
            <span>Save to Favorites</span>
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-transparent text-[#ffb3d9] border-2 border-[#ff0080]/50 rounded-xl hover:bg-[#ff0080]/10 hover:border-[#ff0080] transition-all duration-300 font-['Inter']">
            <span className="text-xl group-hover:scale-110 transition-transform duration-300">💬</span>
            <span>Leave Comment</span>
          </button>
          
          <button className="group flex items-center gap-3 px-8 py-4 bg-transparent text-[#ffb3d9] border-2 border-[#ff0080]/50 rounded-xl hover:bg-[#ff0080]/10 hover:border-[#ff0080] transition-all duration-300 font-['Inter']">
            <span className="text-xl group-hover:scale-110 transition-transform duration-300">📤</span>
            <span>Share Story</span>
          </button>
        </div>
      </article>

      {/* Discover More Stories Section */}
      <section className="border-t border-[#ff0080]/20 py-20 bg-gradient-to-b from-transparent to-[#0a0014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6 font-['Playfair_Display']">
              <span className="bg-gradient-to-r from-[#ff0080] via-[#ff4da6] to-[#ff0080] bg-clip-text text-transparent">
                Discover More Stories
              </span>
            </h2>
            <p className="text-lg text-[#ffb3d9]/80 max-w-2xl mx-auto mb-12 font-['Inter']">
              Explore our collection of passionate tales that will ignite your imagination
            </p>
          </div>

          {/* Related Stories Grid */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#ffb3d9] mb-4 font-['Playfair_Display']">You Might Also Like</h3>
            <p className="text-[#ffb3d9]/60 font-['Inter']">Continue your journey with these captivating tales</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {blogs
              .filter(b => b.slug !== slug)
              .slice(0, 3)
              .map(relatedBlog => (
                <div 
                  key={relatedBlog.id}
                  className="group bg-gradient-to-br from-[#1a001a] to-[#330033] rounded-2xl p-6 border border-[#ff0080]/20 hover:border-[#ff0080]/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0080]/20"
                  onClick={() => handleRelatedStoryClick(relatedBlog.slug)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] rounded-full flex items-center justify-center text-white text-xs font-bold font-['Inter']">
                      {relatedBlog.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium font-['Inter']">{relatedBlog.author}</p>
                      <p className="text-[#ffb3d9]/60 text-xs font-['Inter']">{relatedBlog.readTime}</p>
                    </div>
                  </div>
                  
                  <h3 className="text-white font-bold mb-3 group-hover:text-[#ff4da6] transition-colors duration-300 line-clamp-2 text-lg font-['Playfair_Display']">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-[#ffb3d9]/70 text-sm mb-4 line-clamp-3 leading-relaxed font-['Inter']">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#ffb3d9]/50 font-['Inter']">⭐ {relatedBlog.rating}</span>
                    <span className="text-[#ff0080] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300 font-['Inter']">
                      Read More →
                    </span>
                  </div>
                </div>
              ))}
          </div>

          {/* Professional Return to Stories Button */}
          <div className="text-center mt-16">
            <button 
              onClick={handleBackToStories}
              className="group relative overflow-hidden px-16 py-6 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white rounded-2xl hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-[#ff0080]/40 mx-auto font-['Inter'] font-bold"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              
              <div className="relative flex items-center gap-4">
                <span className="text-2xl group-hover:-translate-x-2 transition-transform duration-300">←</span>
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-semibold tracking-tight">Explore All Stories</span>
                  <span className="text-sm opacity-90 font-medium">Discover our complete collection</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;