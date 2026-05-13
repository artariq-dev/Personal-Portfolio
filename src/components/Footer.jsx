const linkCls = "text-xs tracking-wider uppercase hover:text-gray-900 dark:hover:text-white transition-colors";

const Footer = () => (
  <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 py-8">
    <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs tracking-wider">{new Date().getFullYear()} · CLOUD-NATIVE DEVSECOPS ARCHITECT</p>
      <div className="flex gap-5">
        <a href="#expertise" className={linkCls}>Problems I Solve</a>
        <a href="#case-stories" className={linkCls}>Case Stories</a>
        <a href="https://github.com/AbdurRehman924" target="_blank" rel="noopener noreferrer" className={linkCls}>GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
