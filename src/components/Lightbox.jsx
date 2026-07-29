const Lightbox = ({ src, alt, invert, onClose }) => (
  <div className="fixed inset-0 z-[70] bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
    <img src={src} alt={alt}
      className={`max-w-full max-h-[90vh] rounded shadow-2xl ${invert ? 'dark:invert-[.85]' : ''}`}
      onClick={e => e.stopPropagation()} />
    <button className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-gray-300" onClick={onClose}>✕</button>
  </div>
);

export default Lightbox;
