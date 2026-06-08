import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';
import videoThumbnail from '../assets/hero video/thumbnail.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const VIDEO_RED = '#F31113';

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });

    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMove);
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

  return (
    <section
      id="home"
      style={{ backgroundColor: VIDEO_RED }}
      className="w-full overflow-hidden"
    >
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-stretch">
        
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-6 lg:px-12 py-12 lg:py-20 relative order-2 lg:order-1">
          <div
            className="pointer-events-none absolute -left-8 top-16 h-36 w-36 rounded-full bg-white/10 blur-3xl hidden lg:block"
            style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
          />
          <div className="max-w-[560px] w-full">
            <h1 data-aos="fade-right" className="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
              <span className="block text-2xl lg:text-4xl font-normal">Hi I'm</span>
              <span className="block">Vyshnavi</span>
            </h1>

            <p data-aos="fade-right" data-aos-delay="120" className="text-white/90 text-sm lg:text-lg leading-relaxed mb-6">
              I work with data to find patterns and build predictive models. 
              I enjoy cleaning messy datasets, training machine learning models, and 
              presenting insights through dashboards.
            </p>

            <div data-aos="fade-up" data-aos-delay="240" className="flex items-center gap-3 lg:gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white text-red-600 px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-bold shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-100">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-5 lg:px-6 py-2.5 lg:py-3 text-sm lg:text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative order-1 lg:order-2">
          <div className="pointer-events-none absolute -right-12 bottom-10 h-24 w-24 rounded-full bg-white/10 blur-3xl hidden lg:block" style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }} />
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
              <div className="w-14 h-14 lg:w-24 lg:h-24 rounded-full border-2 border-white/50 bg-black/25 backdrop-blur-md flex justify-center items-center hover:scale-105 hover:bg-white/30 transition duration-300">
                <svg className="w-6 h-6 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
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