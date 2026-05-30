import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      setProgress((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-14 left-0 w-full h-0.5 z-[60] bg-gray-200 pointer-events-none">
      <div
        className="h-full bg-blue-500 transition-all duration-75"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
