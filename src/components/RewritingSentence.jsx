import { useEffect, useState } from 'react';
import { rewrites } from './heroData';

const RewritingSentence = () => {
  const [i, setI] = useState(0);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [phase, setPhase] = useState('typing-from'); // typing-from | pause | deleting-from | typing-to | hold

  useEffect(() => {
    const { from: f, to: t } = rewrites[i];
    if (phase === 'typing-from') {
      if (from.length < f.length) {
        const timer = setTimeout(() => setFrom(f.slice(0, from.length + 1)), 50);
        return () => clearTimeout(timer);
      }
      const timer = setTimeout(() => setPhase('deleting-from'), 900);
      return () => clearTimeout(timer);
    }
    if (phase === 'deleting-from') {
      if (from.length > 0) {
        const timer = setTimeout(() => setFrom(from.slice(0, -1)), 30);
        return () => clearTimeout(timer);
      }
      setPhase('typing-to');
    }
    if (phase === 'typing-to') {
      if (to.length < t.length) {
        const timer = setTimeout(() => setTo(t.slice(0, to.length + 1)), 50);
        return () => clearTimeout(timer);
      }
      const timer = setTimeout(() => setPhase('hold'), 1800);
      return () => clearTimeout(timer);
    }
    if (phase === 'hold') {
      setFrom(''); setTo('');
      setI(n => (n + 1) % rewrites.length);
      setPhase('typing-from');
    }
  }, [phase, from, to, i]);

  return (
    <span className="text-xs sm:text-sm tracking-wider text-gray-600 dark:text-gray-300 block">
      turning{' '}
      <span className="text-red-500 dark:text-red-400">
        {phase === 'typing-from' || phase === 'deleting-from' ? from : ''}
      </span>
      <span className="inline-block w-0.5 h-3.5 bg-blue-500 ml-0.5 align-middle animate-pulse" />
      {(phase === 'typing-to' || phase === 'hold') && (
        <> into <span className="text-emerald-600 dark:text-emerald-400">{to}</span></>
      )}
    </span>
  );
};

export default RewritingSentence;
