const Services = () => {
  const technical = [
    { name: 'C', icon: 'code' },
    { name: 'Python', icon: 'snake' },
    { name: 'Java', icon: 'cup' },
    { name: 'Data Structures', icon: 'layers' },
    { name: 'Tableau', icon: 'chart' },
    { name: 'NumPy', icon: 'matrix' },
    { name: 'Pandas', icon: 'data' },
    { name: 'Power BI', icon: 'dashboard' },
    { name: 'SQL', icon: 'database' },
    { name: 'MongoDB', icon: 'leaf' },
    { name: 'ML Algorithms', icon: 'brain' },
    { name: 'AI Fundamentals', icon: 'spark' }
  ];

  const soft = [
    { name: 'Communication', icon: 'chat' },
    { name: 'Problem-solving', icon: 'lightbulb' },
    { name: 'Collaboration', icon: 'handshake' },
    { name: 'Adaptability', icon: 'repeat' },
    { name: 'Attention to detail', icon: 'eye' }
  ];

  const renderIcon = (type) => {
    const iconMap = {
      code: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      snake: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 9c2 0 2-2 4-2s3 1 4 3 2 3 4 3 3-1 4-3" />
          <path d="M20 16c-1.5-1.5-3-1-4-1s-2.5.5-3.5 2-2 3-4 3" />
          <circle cx="20" cy="5" r="1.5" />
        </svg>
      ),
      cup: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F31113" stroke="#F31113" strokeWidth="1.5">
          <path d="M6 7h10v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7z" />
          <path d="M16 8h3a2 2 0 0 1 0 4h-3" fill="none" />
        </svg>
      ),
      layers: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 3 3 8 12 13 21 8 12 3" />
          <polygon points="3 13 12 18 21 13" />
          <polygon points="3 18 12 23 21 18" />
        </svg>
      ),
      chart: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17h18" />
          <path d="M6 13v4" />
          <path d="M12 9v8" />
          <path d="M18 5v12" />
        </svg>
      ),
      matrix: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F31113">
          <rect x="3" y="3" width="5" height="5" />
          <rect x="10" y="3" width="5" height="5" />
          <rect x="17" y="3" width="4" height="5" />
          <rect x="3" y="10" width="5" height="5" />
          <rect x="10" y="10" width="5" height="5" />
          <rect x="17" y="10" width="4" height="5" />
          <rect x="3" y="17" width="5" height="4" />
          <rect x="10" y="17" width="5" height="4" />
          <rect x="17" y="17" width="4" height="4" />
        </svg>
      ),
      data: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12v18H6z" />
          <path d="M6 8h12" />
          <path d="M6 13h8" />
        </svg>
      ),
      dashboard: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 18a8 8 0 1 1 16 0" />
          <path d="M12 14V8" />
          <path d="M12 8l3 3" />
        </svg>
      ),
      database: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
        </svg>
      ),
      leaf: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F31113" stroke="#F31113" strokeWidth="1.5">
          <path d="M5 19c6-6 8-14 14-14-1 6-6 11-12 13" />
          <path d="M15 6c1.5 1.5 2 4 0 6" fill="none" />
        </svg>
      ),
      brain: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F31113" stroke="#F31113" strokeWidth="1.5">
          <path d="M8 5c-2 0-3 2-3 4s1 4 3 4h8c2 0 3-2 3-4s-1-4-3-4H8z" />
          <path d="M11 9v6" fill="none" stroke="#F31113" strokeLinecap="round" />
          <path d="M7 8v4" fill="none" stroke="#F31113" strokeLinecap="round" />
          <path d="M17 8v4" fill="none" stroke="#F31113" strokeLinecap="round" />
        </svg>
      ),
      spark: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#F31113">
          <polygon points="12 2 13.5 8.5 20 9.5 14.5 14 16 20.5 12 16 8 20.5 9.5 14 4 9.5 10.5 8.5 12 2" />
        </svg>
      ),
      chat: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
      lightbulb: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-4 12.9V17h8v-2.1A7 7 0 0 0 12 2z" />
        </svg>
      ),
      handshake: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12l5 5 5-5-5-5-5 5z" />
          <path d="M17 12l5 5 0-10-5 5z" />
          <path d="M7 12l5 5" />
          <path d="M12 7l5 5" />
        </svg>
      ),
      repeat: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11h14a4 4 0 0 1 0 8H7" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13H7a4 4 0 0 1 0-8h14" />
        </svg>
      ),
      eye: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    };

    return (
      <span className="text-[#F31113] inline-flex h-5 w-5 items-center justify-center" aria-hidden="true">
        {iconMap[type] || <span className="text-[#F31113]">•</span>}
      </span>
    );
  };

  return (
    <section id="skills" className="bg-black pt-24 pb-32 px-6 md:px-12 w-full font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-10 flex flex-col gap-4 md:gap-2 relative">
          <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-white/10 via-[#F31113]/40 to-white/10" />
          <div className="relative z-10 inline-flex items-center gap-3">
            <div className="h-10 w-1 rounded-full bg-[#F31113]" />
            <h2 className="text-4xl font-black text-white">Skills</h2>
          </div>
          <p className="text-gray-300 text-lg max-w-3xl">
            Technical and interpersonal skills I apply to <span className="text-[#F31113] font-semibold">ML engineering</span> work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] border border-[#F31113]/20 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
            <div className="pointer-events-none absolute -top-4 -right-8 h-28 w-28 rounded-full bg-[#F31113]/10 blur-3xl" />
            <div className="mb-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F31113]/10 text-[#F31113] border border-[#F31113]/25 shadow-sm">
                <span className="text-xl">&lt;/&gt;</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
                <div className="mt-2 h-1.5 w-16 rounded-full bg-[#F31113]" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {technical.map((skill, index) => (
                <div key={skill.name} data-aos="zoom-in" data-aos-delay={80 + index * 40} className="flex items-center gap-3 rounded-3xl border border-[#333] bg-[#111111] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:border-[#F31113] hover:bg-[#161616]">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#F31113]/15 text-[#F31113]">
                    {renderIcon(skill.icon)}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-[#111111] border border-[#F31113]/20 p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)]">
            <div className="pointer-events-none absolute -top-4 -right-8 h-28 w-28 rounded-full bg-[#F31113]/10 blur-3xl" />
            <div className="mb-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[#F31113]/10 text-[#F31113] border border-[#F31113]/25 shadow-sm">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#F31113" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Soft Skills</h3>
                <div className="mt-2 h-1.5 w-16 rounded-full bg-[#F31113]" />
              </div>
            </div>
            <div className="space-y-3">
              {soft.map((skill, index) => (
                <div key={skill.name} data-aos="zoom-in" data-aos-delay={80 + index * 50} className="flex items-center gap-3 rounded-3xl border border-[#333] bg-[#111111] px-3 py-3 text-sm font-medium text-white shadow-sm transition hover:border-[#F31113] hover:bg-[#161616]">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#F31113]/15 text-[#F31113]">
                    {renderIcon(skill.icon)}
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
