const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-bold text-gray-900 dark:text-white text-lg">AR.</span>
      <p className="text-sm">{new Date().getFullYear()} Abdur Rehman Tariq · Cloud & DevSecOps Architect</p>
      <div className="flex gap-5 text-sm">
        <a href="#problems-i-solve" className="hover:text-gray-900 dark:hover:text-white transition-colors">Problems I Solve</a>
        <a href="#architectural-reference" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work</a>
        <a href="https://github.com/AbdurRehman924" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
