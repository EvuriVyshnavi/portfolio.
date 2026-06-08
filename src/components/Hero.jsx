import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';
import videoThumbnail from '../assets/hero video/thumbnail.jpg';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(false);

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

  const handleVideoClick = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.muted = false;
        videoRef.current.play()
.then(() => {
            setIsPlaying(true);
            setShowHint(true);
            setTimeout(() => setShowHint(false), 2500);
          })
.catch(err => console.log('Video play error:', err));
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
      className="w-full overflow-hidden pt-16 lg:pt-20"
    >
      <div className="w-full max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-stretch">

        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center px-6 lg:px-12 py-12 lg:py-20 relative order-2 lg:order-1">
          <div
            className="pointer-events-none absolute -left-8 top-16 h-36 w-36 rounded-full bg-white/10 blur-3xl hidden lg:block"
            style={{ transform: `translate(${cursor.x * 0.02}px, ${cursor.y * 0.02}px)` }}
          />
          <div className="max-w-[560px] w-full">
            <h1 data-aos="fade-right" className="text-4xl lg:text-6xl font-bold text-white mb-4 lg:mb-6 leading-tight">
            <span className="block">Data Speaks.</span>
            <span className="block">I Translate.</span>
          </h1>

<p data-aos="fade-right" data-aos-delay="120" className="text-white/90 text-sm lg:text-lg leading-relaxed mb-6">
  ML Engineer crafting predictive models & dashboards from complex datasets.
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
            muted
            poster={videoThumbnail}
            className="w-full h-full object-cover"
            style={{ backgroundColor: VIDEO_RED }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* PULSE RING - BIGGER */}
          {!isPlaying && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-6 lg:left-auto lg:right-6 lg:translate-x-0 lg:translate-y-0 pointer-events-none">
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>
            </div>
          )}

          {/* MAIN BUTTON - SIZE INCREASED */}
          <button
            type="button"
            onClick={handleVideoClick}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-6 lg:left-auto lg:right-6 lg:translate-x-0 lg:translate-y-0 w-20 h-20 lg:w-20 lg:h-20 rounded-full border-4 border-white bg-red-600 shadow-2xl shadow-black/50 flex justify-center items-center hover:scale-110 hover:bg-red-700 active:scale-95 transition-all duration-300 z-40 cursor-pointer"
          >
            {!isPlaying? (
              <svg className="w-9 h-9 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>

          {/* LABEL - ALWAYS VISIBLE BEFORE PLAY */}
          {!isPlaying && (
            <>
              {/* Mobile: Button kinda */}
              <div className="lg:hidden absolute top-1/2 left-1/2 -translate-x-1/2 mt-14 z-40">
                <div className="bg-white text-red-600 font-bold text-base px-6 py-2.5 rounded-full shadow-xl whitespace-nowrap animate-bounce">
                  ▶ Watch Intro
                </div>
              </div>

              {/* Desktop: Button pakkana */}
              <div className="hidden lg:block absolute top-6 right-28 z-40">
                <div className="bg-white text-red-600 font-bold text-base px-6 py-2.5 rounded-full shadow-xl whitespace-nowrap">
                  ▶ Watch Intro
                </div>
              </div>
            </>
          )}

          {/* PAUSE HINT */}
          {showHint && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-14 lg:top-28 lg:left-auto lg:right-6 lg:translate-x-0 lg:mt-0 bg-black/80 text-white text-xs px-3 py-1.5 rounded-md z-40 shadow-lg">
              Click to pause
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;