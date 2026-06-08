const ProjectCard = ({ title, description, techs, delay }) => (
  <div data-aos="zoom-in" data-aos-delay={delay} className="relative rounded-[2rem] border border-[#F31113]/30 bg-[#111111] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-2">
    <h3 className="text-2xl font-black text-white mb-4">{title}</h3>
    <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
    <div className="flex flex-wrap gap-2">
      {techs.map((tech) => (
        <span key={tech} className="rounded-full border border-[#F31113]/20 bg-[#1b1b1b] px-4 py-2 text-sm font-semibold text-[#F31113]">
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const Projects = () => {
  const projectData = [
      {
        title: 'Fake News Detection API',
        description: 'BERT classifier trained on 10K articles. Flask API deployed on AWS EC2 handling 500 requests/day.',
        techs: ['Python', 'BERT', 'AWS', 'Flask'],
      },
      {
        title: 'E-commerce Sentiment Dashboard',
        description: 'Scraped 10K+ Amazon reviews, trained LSTM model. Power BI dashboard used by 3 local businesses.',
        techs: ['Python', 'LSTM', 'Selenium', 'Power BI'],
      },
      {
        title: 'Sentiment Analysis Classifier',
        description: 'Trained a sentiment classification pipeline for social text with validation and visualization.',
        techs: ['Python', 'NLTK', 'scikit-learn', 'Data Visualization'],
      }
    ];

  return (
    <section id="projects" className="bg-black py-24 px-6 md:px-12 w-full font-sans text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">Projects</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 120} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
