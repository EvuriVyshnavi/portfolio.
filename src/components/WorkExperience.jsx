const WorkExperience = () => {
  return (
    <section id="work" className="bg-black py-24 px-6 md:px-12 w-full font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8" data-aos="fade-up">
          <h2 className="text-4xl font-black text-white">Work Experience</h2>
        </div>

        <div className="flex flex-col gap-8">
          <div data-aos="fade-up" data-aos-delay="100" className="rounded-[1rem] border border-[#F31113]/30 p-8 bg-[#111111] transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2 text-white">Intern — ServiceNow</h3>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-4">
              <p className="text-sm text-gray-400">May 2026 - Jun 2026</p>
              </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Built ServiceNow workflows and reports for platform automation and insights.</li>
              <li>Completed ServiceNow Administration Fundamentals and Micro Certification modules.</li>
              <li>Practiced Automated Test Framework essentials to validate ServiceNow instances.</li>
              <li>Explored Agentic AI use cases in the ServiceNow ecosystem.</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="180" className="rounded-[1rem] border border-[#F31113]/30 p-8 bg-[#111111] transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2 text-white">Data Science Intern — EduSkills Foundation</h3>
            <p className="text-sm text-gray-400 mb-4">Apr 2026 - Jun 2026</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Completed the Siemens Data Science Master cohort with weekly assessments.</li>
              <li>Worked through data preprocessing, EDA, machine learning, and model deployment.</li>
              <li>Delivered project documentation and final assessment reports for the program.</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="260" className="rounded-[1rem] border border-[#F31113]/30 p-8 bg-[#111111] transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2 text-white">AI & ML Intern — Infosys Springboard</h3>
            <p className="text-sm text-gray-400 mb-4">Dec 2025 - Feb 2026</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Built an organization-wide chatbot prototype with role-based access controls.</li>
              <li>Focused on secure workflow design, model integration, and conversational UX.</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="340" className="rounded-[1rem] border border-[#F31113]/30 p-8 bg-[#111111] transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-2 text-white">AI & Machine Learning Intern — Edunet Foundation</h3>
            <p className="text-sm text-gray-400 mb-4">Jun 2025 - Jul 2025</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Completed a 6-week virtual internship on AI and machine learning.</li>
              <li>Practiced model development, evaluation, and industry-aligned ML workflows.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
