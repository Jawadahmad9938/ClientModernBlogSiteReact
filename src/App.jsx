import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogGrid from "./components/BlogCard";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";

// Scroll to top component for route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" // Instant scroll for fast loading
    });
  }, [pathname]);

  return null;
}

// Home component for better code organization
function Home() {
  return (
    <main className="overflow-hidden"> {/* Prevent any unwanted scrolling */}
      <section id="hero">
        <Hero />
      </section>
      <section 
        id="stories" 
        className="bg-gradient-to-b from-[#330033] to-[#1a001a]"
        style={{ marginTop: '-1px' }} // Remove gap between sections
      >
        <BlogGrid />
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-accent text-secondary min-h-screen flex flex-col">
        <ScrollToTop /> {/* Add scroll to top on route change */}
        
        {/* Header */}
        <header className="flex-shrink-0">
          <Navbar />
        </header>
        
        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route - Optimized with separate component */}
            <Route 
              path="/" 
              element={<Home />} 
            />
            
            {/* Blog Post Route - Direct rendering for fast loading */}
            <Route 
              path="/blog/:slug" 
              element={
                <div className="min-h-screen">
                  <BlogPost />
                </div>
              } 
            />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="flex-shrink-0">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;