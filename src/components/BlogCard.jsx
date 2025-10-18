import React from "react";
import { blogs } from "../data/blogs";
import { useNavigate } from "react-router-dom";

const BlogGrid = () => {
  const navigate = useNavigate();

  const handleReadMore = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <div className="relative bg-gradient-to-b from-[#1a001a] to-[#0a0014] py-20" id="stories">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ff0080]/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#ff0080]/20 to-[#ff4da6]/20 border border-[#ff0080]/30 backdrop-blur-sm mb-6">
            <span className="text-xl">🔥</span>
            <span className="text-[#ffb3d9] font-semibold tracking-widest text-sm uppercase">
              Premium Erotic Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-[#ff0080] via-[#ff4da6] to-[#ff0080] bg-clip-text text-transparent">
              Forbidden Tales
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#ffb3d9]/80 max-w-2xl mx-auto">
            Explore our collection of intimate stories designed to awaken your senses and ignite your imagination
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group relative bg-gradient-to-br from-[#1a001a] to-[#330033] rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_rgba(255,0,127,0.3)] transition-all duration-500 border border-[#ff0080]/20 hover:border-[#ff0080]/40 cursor-pointer"
              onClick={() => handleReadMore(blog.slug)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a001a] via-transparent to-transparent opacity-80"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white text-xs font-bold rounded-full shadow-lg">
                    {blog.category}
                  </span>
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                  <span className="text-yellow-400 text-sm">⭐</span>
                  <span className="text-white text-xs font-bold">{blog.rating}</span>
                </div>

                {/* Featured Badge */}
                {blog.featured && (
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-[#ff0080]/10 border border-[#ff0080]/20 text-[#ffb3d9] text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-white mb-3 leading-tight group-hover:text-[#ff4da6] transition-colors duration-300">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-[#ffb3d9]/80 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {blog.author.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{blog.author}</p>
                    <p className="text-[#ffb3d9]/60 text-xs">
                      {new Date(blog.publishedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Meta Info & CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#ffb3d9]/60">
                    <span className="flex items-center gap-1">
                      <span className="text-[#ff0080]">⏱️</span>
                      {blog.readTime}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#ff4da6]">❤️</span>
                      Hot
                    </span>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(blog.slug);
                    }}
                    className="group/btn relative px-6 py-2 bg-gradient-to-r from-[#ff0080] to-[#ff4da6] text-white font-bold rounded-full text-sm shadow-lg hover:shadow-[#ff0080]/40 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Read More
                    </span>
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ff0080]/0 via-[#ff0080]/5 to-[#ff0080]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-transparent text-[#ffb3d9] font-bold rounded-2xl border-2 border-[#ff0080]/50 hover:border-[#ff0080] hover:bg-[#ff0080]/10 transform hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-3 text-lg">
              Discover More Stories
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;