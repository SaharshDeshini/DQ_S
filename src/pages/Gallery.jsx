import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "../data/galleryImages";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const openLightbox = (img, index) => {
    setSelectedImg(img);
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImg(null);
    document.body.style.overflow = "auto";
  };

  const goNext = (e) => {
    e?.stopPropagation();
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImg(galleryImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const goPrev = (e) => {
    e?.stopPropagation();
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImg(galleryImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const diffX = touchStartX.current - touchEndX.current;
    if (diffX > 50) {
      goNext();
    } else if (diffX < -50) {
      goPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImg) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowRight":
          goNext(e);
          break;
        case "ArrowLeft":
          goPrev(e);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImg, currentIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-coral-50 pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Blur Orbs for more color */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-300/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-300/20 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="container-custom relative z-10 text-center mb-16">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-coral-100 border border-coral-200 text-coral-700 text-xs font-semibold uppercase tracking-wider mb-6">
          Memories
        </div>
        <h1 className="mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-600">
          Our Gallery
        </h1>
        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
          A visual journey through our events, hackathons, and community gatherings. 
        </p>
      </div>

      {/* Masonry Layout Container */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300 relative border border-white"
              whileHover={{ scale: 1.02 }}
              onClick={() => openLightbox(img, index)}
              layout
            >
              <img
                src={img.src}
                alt={`Gallery Image ${img.id}`}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-sm drop-shadow-md">View Capture</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-neutral-950/90 backdrop-blur-xl flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10 backdrop-blur-md"
              aria-label="Close gallery"
            >
              <X size={24} />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center px-4 md:px-20"
              onClick={(e) => e.stopPropagation()}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button
                onClick={goPrev}
                className="hidden md:flex absolute left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all backdrop-blur-md"
                aria-label="Previous image"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.img
                key={selectedImg.src}
                src={selectedImg.src}
                alt="Selected Image"
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              <button
                onClick={goNext}
                className="hidden md:flex absolute right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all backdrop-blur-md"
                aria-label="Next image"
              >
                <ChevronRight size={32} />
              </button>

              {/* Mobile controls & indicator */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <button onClick={goPrev} className="md:hidden text-white/70 hover:text-white">
                  <ChevronLeft size={24} />
                </button>
                <span className="text-white font-medium tracking-wide text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </span>
                <button onClick={goNext} className="md:hidden text-white/70 hover:text-white">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
