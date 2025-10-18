import React from 'react';
import { useRouter } from 'next/router';
import { blogs } from '../../data/blogs';

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the blog post by slug
  const blog = blogs.find(b => b.slug === slug);

  // If blog not found or still loading
  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0a0014] to-[#1a001a] flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-3xl font-bold text-[#ffb3d9] mb-4">Story Not Found</h1>
          <p className="text-[#ffb3d9]/80 mb-8">This passionate tale seems to have wandered off...</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-full hover:scale-105 transition-transform duration-300"
          >
            Return to Stories
          </button>
        </div>
      </div>
    );
  }

  const handleBackToStories = () => {
    window.location.href = '/#stories';
  };

  const handleRelatedStoryClick = (relatedSlug) => {
    window.location.href = `/blog/${relatedSlug}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0014] to-[#1a001a]">
      {/* Navigation */}
      <nav className="border-b border-[#ff0080]/20 py-4 backdrop-blur-lg bg-[#0a0014]/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackToStories}
            className="flex items-center gap-2 text-[#ffb3d9] hover:text-[#ff0080] transition-all duration-300 group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span className="font-semibold">Back to Stories</span>
          </button>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff0080]/20 to-[#ff4da6]/20 border border-[#ff0080]/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-[#ff0080] text-sm font-semibold">{blog.category}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#ffb3d9]/80 mb-8">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] rounded-full flex items-center justify-center text-white text-sm font-bold">
                {blog.author.charAt(0)}
              </span>
              <span className="font-medium">{blog.author}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#ff0080]/10 px-3 py-1 rounded-full">
              <span className="text-[#ff0080]">⏱️</span>
              <span className="font-medium">{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#ff4da6]/10 px-3 py-1 rounded-full">
              <span className="text-yellow-400">⭐</span>
              <span className="font-medium">{blog.rating}</span>
            </div>
            <div className="flex items-center gap-1 bg-[#ff0080]/10 px-3 py-1 rounded-full">
              <span className="text-[#ff4da6]">📅</span>
              <span className="font-medium">{new Date(blog.publishedDate).toLocaleDateString()}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-[#ff0080]/10 border border-[#ff0080]/20 text-[#ffb3d9] text-sm rounded-full font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border border-[#ff0080]/20">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014] via-transparent to-transparent"></div>
        </div>

        {/* Blog Content */}
        <div className="max-w-none">
          <div 
            className="text-[#ffb3d9] leading-relaxed text-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-[#ff0080]/20">
          <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
            <span className="group-hover:scale-110 transition-transform duration-300">❤️</span>
            Save to Favorites
          </button>
          <button className="group flex items-center gap-2 px-6 py-3 bg-transparent text-[#ffb3d9] border border-[#ff0080]/50 rounded-full hover:bg-[#ff0080]/10 hover:border-[#ff0080] transition-all duration-300">
            <span className="group-hover:scale-110 transition-transform duration-300">💬</span>
            Leave Comment
          </button>
          <button className="group flex items-center gap-2 px-6 py-3 bg-transparent text-[#ffb3d9] border border-[#ff0080]/50 rounded-full hover:bg-[#ff0080]/10 hover:border-[#ff0080] transition-all duration-300">
            <span className="group-hover:scale-110 transition-transform duration-300">📤</span>
            Share Story
          </button>
        </div>
      </article>

      {/* Related Stories Section */}
      <section className="border-t border-[#ff0080]/20 py-16 bg-gradient-to-b from-transparent to-[#0a0014]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-[#ff0080] via-[#ff4da6] to-[#ff0080] bg-clip-text text-transparent">
              More Passionate Stories
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {blogs
              .filter(b => b.slug !== slug)
              .slice(0, 3)
              .map(relatedBlog => (
                <div 
                  key={relatedBlog.id}
                  className="group bg-gradient-to-br from-[#1a001a] to-[#330033] rounded-2xl p-6 border border-[#ff0080]/20 hover:border-[#ff0080]/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0080]/20"
                  onClick={() => handleRelatedStoryClick(relatedBlog.slug)}
                >
                  <h3 className="text-white font-bold mb-2 group-hover:text-[#ff4da6] transition-colors duration-300 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-[#ffb3d9]/70 text-sm mb-3 line-clamp-2">
                    {relatedBlog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#ffb3d9]/50">
                    <span className="flex items-center gap-1">
                      <span>⏱️</span>
                      {relatedBlog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>⭐</span>
                      {relatedBlog.rating}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;