import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    src: "/BTP0.jpg",
    alt: "Projet de construction Bati-Pro",
  },
  {
    src: "/BTP1.jpg",
    alt: "Chantier Bati-Pro",
  },
  {
    src: "/BTP2.jpg",
    alt: "Réalisation Bati-Pro",
  },
  {
    src: "/BTP3.jpg",
    alt: "Construction Bati-Pro",
  },
  {
    src: "/BTP4.jpg",
    alt: "Bâtiment Bati-Pro",
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 600 : -600,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 600 : -600,
    opacity: 0,
    scale: 0.95,
  }),
};

export default function Carousel() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const imageIndex = ((page % slides.length) + slides.length) % slides.length;

  const paginate = useCallback(
    (newDirection) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, paginate]);

  const goToSlide = (index) => {
    const newDirection = index > imageIndex ? 1 : -1;
    setPage([index, newDirection]);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl select-none"
      style={{ aspectRatio: "16 / 9" }}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={slides[imageIndex].src}
          alt={slides[imageIndex].alt}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />

      {/* Previous Button */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
        aria-label="Image précédente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={() => paginate(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 transition-all duration-300 cursor-pointer"
        aria-label="Image suivante"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              index === imageIndex
                ? "w-8 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}