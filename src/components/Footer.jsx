const Footer = () => (
  <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-100 dark:bg-gray-950">
    <div className="max-w-5xl mx-auto px-6 text-center text-[10px] tracking-wider text-gray-400 dark:text-gray-500">
      {new Date().getFullYear()}{" "}
      <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">
        a
      </span>
      bdur{" "}
      <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">
        r
      </span>
      ehman{" "}
      <span className="text-xs text-gray-600 dark:text-gray-300 font-bold">
        tariq
      </span>
    </div>
  </footer>
);

export default Footer;
