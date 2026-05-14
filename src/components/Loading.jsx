import { motion } from "framer-motion";

export default function Loading(props) {
  if (!props.load) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-[999999] pointer-events-none flex items-center justify-center bg-[#FAFAFA]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.0, ease: "easeInOut" }}
    >
      {/* Glowing Aura Background */}
      <motion.div
        className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 blur-3xl opacity-60"
        style={{ willChange: "transform, opacity" }}
        initial={{ scale: 0.8 }}
        animate={{ 
          scale: [0.8, 1.2, 0.8, 10],
          opacity: [0, 0.4, 0.4, 0.5]
        }}
        transition={{ 
          duration: 2.5, 
          times: [0, 0.3, 0.6, 1],
          ease: ["easeInOut", "easeInOut", "circIn"] 
        }}
      />

      {/* Logo Container */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: [0.9, 1, 1, 0.5], opacity: [0, 1, 1, 0] }}
        transition={{ 
          duration: 2.5,
          times: [0, 0.2, 0.7, 1],
          ease: "easeInOut" 
        }}
      >
        <img
          src="/logo.png"
          className="w-56 md:w-72 object-contain drop-shadow-2xl"
          draggable={false}
          alt="Loading..."
        />
      </motion.div>
    </motion.div>
  );
}
