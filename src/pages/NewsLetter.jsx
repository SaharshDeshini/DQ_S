import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const NewsLetter = () => {
  const driveUrl =
    "https://drive.google.com/file/d/12FzHpeT4QCZ_E_QuObW8WBUnsrmgeR4l/preview";

  return (
    <div className="bg-neutral-50 min-h-screen relative overflow-hidden flex flex-col pt-36 pb-24 z-0">
      
      {/* Ultra-Light Clean Background (Matches Team Page) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-neutral-50/50">
        {/* Extremely soft, slow-moving glows */}
        <div className="absolute inset-0 w-full h-full filter blur-[150px] opacity-[0.12]">
          <motion.div 
            animate={{ y: [0, -20, 0], x: [0, 15, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-indigo-400 rounded-full" 
          />
          <motion.div 
            animate={{ y: [0, 20, 0], x: [0, -15, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-teal-300 rounded-full" 
          />
        </div>
      </div>

      <div className="container-custom max-w-6xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <section className="mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/60 shadow-sm text-neutral-600 text-xs font-bold uppercase tracking-widest mb-6">
            Latest Issue
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 mb-4">
            VJDQ <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-teal-500">Newsletter</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto">
            Stay up to date with the latest events, insights, and achievements from our community.
          </p>
        </section>

        {/* Newsletter Frame */}
        <div className="w-full max-w-5xl bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem] overflow-hidden p-2 md:p-4 mb-12">
          <div className="w-full h-[70vh] md:h-[80vh] rounded-[2rem] overflow-hidden bg-neutral-100/50 shadow-inner">
            <iframe
              src={driveUrl}
              className="w-full h-full"
              title="Newsletter PDF Preview"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Action Button */}
        <a
          href="https://drive.google.com/file/d/12FzHpeT4QCZ_E_QuObW8WBUnsrmgeR4l/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold rounded-full shadow-[0_8px_20px_rgb(79,70,229,0.3)] hover:shadow-[0_12px_25px_rgb(79,70,229,0.4)] hover:-translate-y-1 transition-all duration-300"
        >
          <span>Open in Google Drive</span>
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  );
};

export default NewsLetter;
