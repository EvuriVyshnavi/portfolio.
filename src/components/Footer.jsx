

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-sans text-sm tracking-wide">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8 mb-12">
          <div className="space-y-2">
            <p className="text-white font-black text-lg">Vyshnavi</p>
            <p className="text-gray-400">CSE</p>
            <p className="text-gray-400">Guntur, India</p>
          </div>

          <div className="space-y-2">
            <p className="text-white font-semibold">Connect</p>
            <a href="mailto:vyshnavi9026@gmail.com" className="block text-gray-400 hover:text-white transition">vyshnavi9026@gmail.com</a>
            <a href="https://www.linkedin.com/in/evuri-vyshnavi" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="https://github.com/EvuriVyshnavi" target="_blank" rel="noreferrer" className="block text-gray-400 hover:text-white transition">GitHub</a>
          </div>

          <div className="space-y-2 md:items-end md:text-right">
            <p className="text-white font-semibold">Navigation</p>
            <a href="#projects" className="block text-gray-400 hover:text-white transition">Projects</a>
            <a href="#about" className="block text-gray-400 hover:text-white transition">About</a>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-white/70">&copy; {new Date().getFullYear()} Vyshnavi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
