import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, X } from "lucide-react";
import eventsData from "../data/events";

const MascotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  // Auto-open on mount after a delay if not explicitly closed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasClosed) setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [hasClosed]);

  const upcomingEvent = eventsData.upcoming.length > 0 ? eventsData.upcoming[0] : null;
  // Get the most recent past event if no upcoming events
  // Assuming e2026 is the most recent in the data structure
  const latestPastYear = Object.keys(eventsData.past).sort((a, b) => b.localeCompare(a))[0];
  const mostRecentPastEvent = eventsData.past[latestPastYear]?.[0];

  const handleClose = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    setHasClosed(true);
  };

  return (
    <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 z-50 flex flex-col items-end">
      
      {/* Speech Bubble Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className="mb-4 relative max-w-[280px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-indigo-100 p-5 origin-bottom-right"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-2 right-2 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                <Calendar size={18} />
              </div>
              <h4 className="font-bold text-neutral-800 text-sm">
                {upcomingEvent ? "Upcoming Event!" : "Recent Highlights"}
              </h4>
            </div>

            {upcomingEvent ? (
              <div className="flex flex-col gap-2">
                <p className="text-neutral-600 text-sm font-medium leading-snug">
                  Don't miss out on <strong>{upcomingEvent.name}</strong> happening on {upcomingEvent.date}!
                </p>
                <Link 
                  to={upcomingEvent.link}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-neutral-600 text-sm font-medium leading-snug">
                  No upcoming events right now. Check out the highlights from <strong>{mostRecentPastEvent?.name}</strong>!
                </p>
                <Link 
                  to={mostRecentPastEvent?.link || "/events"}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  See Highlights <ArrowRight size={14} />
                </Link>
              </div>
            )}

            {/* Speech Bubble Arrow */}
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white/90 border-b border-r border-indigo-100 transform rotate-45 backdrop-blur-xl" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mascot Image */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full" />
        <img 
          src="/mascot.png" 
          alt="DataQuesters Mascot" 
          className="w-32 h-32 md:w-48 md:h-48 object-contain relative z-10 drop-shadow-2xl"
        />
      </motion.div>

    </div>
  );
};

export default MascotWidget;
