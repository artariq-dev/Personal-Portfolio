import { useEffect, useState } from "react";

const WORDS = ["design", "code", "build"];
const TYPE_SPEED  = 80;
const ERASE_SPEED = 50;
const PAUSE       = 1800;

const CyclingWord = () => {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIndex];

    if (!erasing && displayed.length < word.length) {
      const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), TYPE_SPEED);
      return () => clearTimeout(t);
    }

    if (!erasing && displayed.length === word.length) {
      const t = setTimeout(() => setErasing(true), PAUSE);
      return () => clearTimeout(t);
    }

    if (erasing && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), ERASE_SPEED);
      return () => clearTimeout(t);
    }

    if (erasing && displayed.length === 0) {
      setErasing(false);
      setWordIndex((i) => (i + 1) % WORDS.length);
    }
  }, [displayed, erasing, wordIndex]);

  return (
    <span className="text-blue-600 dark:text-blue-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default CyclingWord;
