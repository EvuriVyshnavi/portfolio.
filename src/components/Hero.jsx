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
    return () => window.removeEventListener('mousemove', handleMove);
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
      className="w-full min-h-[90vh] flex flex-col md:flex-row overflow-hidden"
    >
      <div
        style={{ backgroundColor: VIDEO_RED }}
        className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-16 relative"
      >
        <div
          className="pointer-events-none absolute -left-8 top-16 h-36 w-36 rounded-full bg-white/10 blur-3xl"
          style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
        />
        <div className="max-w-xl w-full">
          <h1 data-aos="fade-right" className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block text-4xl md:text-5xl font-normal">Hi I'm</span>
            <span className="block">Vyshnavi</span>
          </h1>

          <p data-aos="fade-right" data-aos-delay="120" className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
            Passionate about transforming complex data into meaningful insights and intelligent solutions.
            Driven by curiosity, continuous learning, and the power of data-driven decision making.
          </p>

          <div data-aos="fade-up" data-aos-delay="240" className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-[#F31113] px-6 py-3 text-sm font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: VIDEO_RED }}
        className="w-full md:w-1/2 relative flex items-center justify-center overflow-hidden group"
      >
        <div className="pointer-events-none absolute -right-12 bottom-10 h-36 w-36 rounded-full bg-white/10 blur-3xl transition-transform duration-1000 ease-out" style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }} />
        <div data-aos="zoom-in" data-aos-delay="300" className="relative w-full max-w-3xl aspect-[4/3] md:aspect-auto h-auto md:h-full transition-transform duration-700 group-hover:scale-[1.01]">
          <video
            ref={videoRef}
            loop
            playsInline
            poster={videoThumbnail}
            className="w-full h-full object-cover mix-blend-multiply cursor-pointer rounded-[2rem]"
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
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-white/50 bg-black/25 backdrop-blur-md flex justify-center items-center hover:scale-110 hover:bg-white/30 transition-all duration-500 animate-pulse">
                <svg className="w-6 h-6 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
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
