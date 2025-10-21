import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlogGrid from "./components/BlogCard";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";

// ✅ Scroll to top + Popunder Ad integration
function ScrollToTop() {
  const { pathname } = useLocation();

  // Scroll instantly to top when route changes
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  // ✅ Load Popunder Ad Script (runs once)
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27896976.effectivegatecpm.com/4b/d9/42/4bd9423ef0504bc93a348a4999cc93bd.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

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
        style={{ marginTop: "-1px" }} // Remove gap between sections
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
        {/* ✅ Global Popunder & Scroll reset */}
        <ScrollToTop />

        {/* Header */}
        <header className="flex-shrink-0">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            {/* Home Route */}
            <Route path="/" element={<Home />} />

            {/* Blog Post Route */}
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
