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
      className="w-full min-h-screen overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-10">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-6 relative">
          <div
            className="pointer-events-none absolute -left-8 top-16 h-36 w-36 rounded-full bg-white/10 blur-3xl hidden md:block"
            style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
          />
          <div className="max-w-xl w-full mx-auto md:mx-0">
            <h1 data-aos="fade-right" className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block text-3xl sm:text-4xl md:text-5xl font-normal">Hi I'm</span>
              <span className="block">Vyshnavi</span>
            </h1>

            <p data-aos="fade-right" data-aos-delay="120" className="text-white/90 text-base sm:text-lg md:text-lg leading-relaxed max-w-2xl mb-6 mx-auto md:mx-0">
              Passionate about transforming complex data into meaningful insights and intelligent solutions.
              Driven by curiosity, continuous learning, and the power of data-driven decision making.
            </p>

            <div data-aos="fade-up" data-aos-delay="240" className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/20 px-6 py-3 text-base font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-white/20">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-1">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-0">
          <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-12 bottom-10 h-24 w-24 rounded-full bg-white/10 blur-3xl hidden md:block" style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }} />
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
      </div>
    </section>
  );
};

export default Hero;
