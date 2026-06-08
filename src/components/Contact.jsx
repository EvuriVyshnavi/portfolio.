import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0a0a0a] w-full min-h-screen flex items-center py-24 px-6 md:px-12 text-white">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 data-aos="fade-up" className="text-4xl font-black mb-6">Contact</h2>
        <p data-aos="fade-up" data-aos-delay="120" className="text-gray-300 mb-10">I’m exploring opportunities in data science and machine learning. Please reach out by email.</p>

        <a
          data-aos="zoom-in"
          data-aos-delay="220"
          href="mailto:vyshnavi9026@gmail.com"
          className="group relative overflow-hidden inline-flex items-center justify-center rounded-full bg-[#F31113] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#d10f12] hover:-translate-y-1"
        >
          <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          Email: vyshnavi9026@gmail.com
        </a>

      </div>
    </section>
  );
};

export default Contact;
