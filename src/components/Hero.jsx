import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';
import videoThumbnail from '../assets/hero video/thumbnail.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showDesktopPrompt, setShowDesktopPrompt] = useState(false);

  const VIDEO_RED = '#F31113';

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    // Track cursor for background blur effects
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    // Check if user is on mobile viewport
    // If width < 1024px, show desktop site prompt
    const checkViewport = () => {
      setShowDesktopPrompt(window.innerWidth < 1024);
    };
    
    checkViewport();
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('resize', checkViewport);
    window.addEventListener('orientationchange', checkViewport);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('resize', checkViewport);
      window.removeEventListener('orientationchange', checkViewport);
    };
  }, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Show black screen with instructions until user enables desktop site
  if (showDesktopPrompt) {
    return (
      <div className="fixed inset-0 z-[9999] w-screen h-screen bg-black flex items-center justify-center p-6">
        <div className="max-w-sm text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-3">Switch to Desktop View</h1>
          
          <p className="text-white/80 mb-6 text-sm leading-relaxed">
            This portfolio is optimized for desktop. Please enable "Desktop site" in your browser menu to continue.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-left text-xs">
            <p className="font-semibold mb-2 text-white/90">Chrome / Edge:</p>
            <p className="text-white/60 mb-3">Tap ⋮ → Check "Desktop site"</p>
            
            <p className="font-semibold mb-2 text-white/90">Safari:</p>
            <p className="text-white/60">Tap aA → "Request Desktop Website"</p>
          </div>

          <p className="text-xs text-white/40 mt-6">
            Page will load automatically after switching
          </p>
        </div>
      </div>
    );
  }

  // Main Hero section - renders only when desktop site is enabled
  return (
    <section
      id="home"
      style={{ backgroundColor: VIDEO_RED }}
      className="w-full min-h-screen overflow-hidden"
    >
      <div className="w-full max-w-screen-2xl mx-auto flex items-stretch">
        
        {/* Left Section - Text Content 50% */}
        <div className="w-1/2 flex flex-col items-start justify-center px-12 py-16 relative">
          <div
            className="pointer-events-none absolute -left-8 top-16 h-36 w-36 rounded-full bg-white/10 blur-3xl"
            style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
          />
          <div className="max-w-[560px] w-full">
            <h1 data-aos="fade-right" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block text-3xl md:text-5xl font-normal">Hi I'm</span>
              <span className="block">Vyshnavi</span>
            </h1>

            <p data-aos="fade-right" data-aos-delay="120" className="text-white/90 text-lg leading-relaxed mb-6">
              I work with data to find patterns and build predictive models. 
              I enjoy cleaning messy datasets, training machine learning models, and 
              presenting insights through dashboards.
            </p>

            <div data-aos="fade-up" data-aos-delay="240" className="flex items-center gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white text-red-600 px-6 py-3 text-base font-bold shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-100">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Video 50% */}
        <div className="w-1/2 min-h-screen relative">
          <div className="pointer-events-none absolute -right-12 bottom-10 h-24 w-24 rounded-full bg-white/10 blur-3xl" style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }} />
          <video
            ref={videoRef}
            loop
            playsInline
            poster={videoThumbnail}
            className="w-full h-full object-cover cursor-pointer"
            style={{ backgroundColor: VIDEO_RED }}
            onClick={handleVideoClick}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 bg-black/25 backdrop-blur-md flex justify-center items-center hover:scale-105 hover:bg-white/30 transition duration-300">
                <svg className="w-6 h-6 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;