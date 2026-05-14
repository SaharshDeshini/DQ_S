import { faculty, currentteam, pastteams } from '../data/team';
import { useState, useEffect } from 'react';
import Reveal from '../components/Reveal';
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X } from "lucide-react";

// Helper function to get image path from filename
const getImageSrc = (filename) => {
  return filename ? `/teamImages/${filename}` : "https://picsum.photos/200";
};

const FacultyCard = ({
  name,
  role,
  image,
  linkedin,
  onImageClick,
}) => {
  return (
    <div className="flex flex-col items-center text-center max-w-[340px] w-full p-8 bg-white/80 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out rounded-[2.5rem] group relative overflow-hidden mx-auto">
      
      {/* Decorative gradient blur in background */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-300/40 blur-3xl rounded-full pointer-events-none group-hover:bg-indigo-400/50 transition-colors duration-500" />
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-teal-300/40 blur-3xl rounded-full pointer-events-none group-hover:bg-teal-400/50 transition-colors duration-500" />

      {/* Avatar Container */}
      <div className="w-40 h-40 shrink-0 rounded-full p-[4px] mb-6 cursor-pointer relative z-10" onClick={onImageClick}>
        {/* Base Gradient Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-200 to-teal-200" />
        {/* Hover Gradient Border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
        
        {/* Image */}
        <img
          className="relative z-10 w-full h-full object-cover rounded-full bg-white group-hover:scale-[0.97] transition-transform duration-500 ease-out"
          src={getImageSrc(image)}
          alt={name + " image"}
          draggable={false}
          loading="lazy"
        />
      </div>
      
      <div className="w-full flex-grow flex flex-col relative z-10 mt-2">
        <h3 className="text-xl font-medium text-black tracking-wide mb-1">{name}</h3>
        <p className="text-xs font-normal text-black/60 uppercase tracking-widest">{role}</p>
      </div>

      {linkedin && (
        <div className="mt-6 pt-6 border-t border-neutral-200/80 w-full flex justify-center relative z-10">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-indigo-600 hover:-translate-y-1 transition-all duration-300"
            aria-label={`LinkedIn of ${name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin size={24} />
          </a>
        </div>
      )}
    </div>
  );
};

const Image = ({
  name,
  role,
  creativeRole,
  image,
  linkedin,
  bio,
  onImageClick,
  notClickable = false
}) => {
  return (
    <div 
      className="relative w-full max-w-[300px] h-[360px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out bg-neutral-800 mx-auto flex-shrink-0"
      onClick={onImageClick}
    >
      {/* Image (Normal Flow) */}
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        src={getImageSrc(image)}
        alt={name + " image"}
        loading="lazy"
        draggable={false}
      />
      
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Glowing Outline Overlay */}
      <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-indigo-500/80 group-hover:shadow-[inset_0_0_20px_rgba(79,70,229,0.3)] transition-all duration-500 pointer-events-none z-30" />
      
      {/* Content wrapper */}
      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end items-center z-10 pointer-events-none">
        <h3 className="text-xl font-bold text-white tracking-tight leading-tight mb-1 group-hover:text-indigo-200 transition-colors duration-300">{name}</h3>
        {role && <p className="text-[11px] font-bold text-indigo-400 uppercase tracking-widest">{role}</p>}
        {creativeRole && (
          <p className="text-[10px] text-teal-400 font-bold uppercase tracking-widest mt-1">{creativeRole}</p>
        )}
      </div>

      {/* LinkedIn Button inside the card (appears on hover) */}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20 hover:bg-indigo-600 hover:border-indigo-600"
          aria-label={`LinkedIn of ${name}`}
          onClick={(e) => e.stopPropagation()}
        >
          <Linkedin size={18} />
        </a>
      )}
    </div>
  );
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit:   { opacity: 0 }
};

const modalVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
  exit:   { opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.15 } }
};

const BioModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex justify-center items-center p-4 sm:p-6"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/20 backdrop-blur-sm"
        variants={backdropVariants}
        onClick={onClose}
        aria-label="Close Modal"
      />
      
      <motion.div
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden shadow-2xl flex flex-col md:flex-row"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-neutral-100 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* Modal Header / Image Area */}
        <div className="w-full md:w-2/5 bg-neutral-50 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-neutral-100">
           <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
             <img
                className="w-full h-full object-cover"
                src={getImageSrc(member.image)}
                alt={member.name + " image"}
              />
           </div>
           
           <div className="text-center">
              <h2 className="text-2xl font-bold text-neutral-950 mb-1">{member.name}</h2>
              <p className="text-sm font-medium text-indigo-600 mb-1">{member.role}</p>
              {member.creativeRole && (
                <p className="text-xs text-neutral-400 font-medium uppercase tracking-widest">{member.creativeRole}</p>
              )}
           </div>

           {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors"
                title="View LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
            )}
        </div>

        {/* Modal Content Area */}
        <div className="w-full md:w-3/5 p-8 md:p-10 overflow-y-auto">
          <div className="prose prose-neutral max-w-none">
            <h3 className="text-lg font-semibold text-neutral-950 mb-4 border-b border-neutral-100 pb-2">About</h3>
            <p className="text-neutral-600 leading-relaxed text-[15px] whitespace-pre-line text-justify">
              {member.bio || "No biography available."}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Team() {
  const [pastMembers, setPastMembers] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleYearChange = (year) => {
    if(selectedYear === year){
      setPastMembers([]);
      setSelectedYear(null);
      return;
    }
    setPastMembers(pastteams[year]);
    setSelectedYear(year);
  };

  const handleImageClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="bg-neutral-50 min-h-screen relative overflow-hidden flex flex-col pt-36 pb-24 z-0">
      
      {/* Ultra-Light Clean Background */}
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

      <AnimatePresence>
        {selectedMember && (
          <BioModal member={selectedMember} onClose={closeModal} />
        )}
      </AnimatePresence>
      
      <div className="container-custom max-w-7xl relative z-10">
        
        {/* Section: Faculty */}
        <section className="mb-32 text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/60 shadow-sm text-neutral-600 text-xs font-bold uppercase tracking-widest mb-6">
            Leadership
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 mb-4">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-teal-500">Mentors</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-16">
            The visionary faculty guiding VJ Data Questers toward excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {faculty.map((member, index) => (
              <Reveal key={index}>
                <FacultyCard
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedin={member.linkedin}
                  onImageClick={() => handleImageClick(member)}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Section: Current Team */}
        <section className="mb-32 text-center">
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px bg-neutral-200 flex-grow max-w-[100px]" />
            <h2 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-teal-500 m-0" id="coreteam">Core Team</h2>
            <div className="h-px bg-neutral-200 flex-grow max-w-[100px]" />
          </div>
          
          {(() => {
            const topTierRoles = ["Chair person", "President", "General Secretary"];
            const topTierMembers = currentteam.filter(m => topTierRoles.includes(m.role)).sort((a, b) => topTierRoles.indexOf(a.role) - topTierRoles.indexOf(b.role));
            const otherMembers = currentteam.filter(m => !topTierRoles.includes(m.role));
            
            const groupedOthers = otherMembers.reduce((acc, member) => {
              if (!acc[member.role]) acc[member.role] = [];
              acc[member.role].push(member);
              return acc;
            }, {});

            return (
              <>
                {/* Top Tier */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-20 relative z-10">
                  {topTierMembers.map((member, index) => (
                    <Reveal key={`top-${index}`}>
                      <Image
                        name={member.name}
                        role={member.role}
                        creativeRole={member.creativeRole}
                        image={member.image}
                        linkedin={member.linkedin}
                        bio={member.bio}
                        onImageClick={() => handleImageClick(member)}
                      />
                    </Reveal>
                  ))}
                </div>

                {/* Other Designations */}
                <div className="flex flex-col gap-20">
                  {Object.entries(groupedOthers).map(([roleName, members], idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <Reveal>
                        <div className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-neutral-200/60 text-indigo-600 font-bold uppercase tracking-widest text-sm mb-10 shadow-sm">
                          {roleName + 's'} 
                        </div>
                      </Reveal>
                      <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full">
                        {members.map((member, index) => (
                          <Reveal key={`${roleName}-${index}`}>
                            <Image
                              name={member.name}
                              // role={member.role}
                              creativeRole={member.creativeRole}
                              image={member.image}
                              linkedin={member.linkedin}
                              bio={member.bio}
                              onImageClick={() => handleImageClick(member)}
                            />
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </section>

        {/* Section: Past Teams */}
        <section className="mb-12 text-center bg-white/60 backdrop-blur-xl p-8 md:p-16 rounded-[2.5rem] border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
          {/* Decorative glows inside past teams box */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-300/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-300/10 rounded-full blur-[100px] pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 mb-6 relative z-10">Past Teams</h2>
          <p className="text-neutral-500 mb-12 max-w-xl mx-auto text-lg relative z-10">
            Our legacy is built on the hard work and dedication of these individuals.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
            {Object.keys(pastteams).map((year) => {
              const isActive = selectedYear === year;
              return (
                <button
                  key={year}
                  className={`px-6 py-3 font-bold text-sm rounded-full transition-all duration-300 border shadow-sm hover:-translate-y-0.5 ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-teal-500 text-white border-transparent hover:shadow-[0_8px_20px_rgb(79,70,229,0.3)]"
                      : "bg-white text-neutral-600 border-neutral-200 hover:border-indigo-200 hover:text-indigo-600"
                  }`}
                  onClick={() => handleYearChange(year)}
                >
                  {year}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {pastMembers.length > 0 && (
              <motion.div 
                key={selectedYear}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-wrap justify-center gap-6 md:gap-8"
              >
                {pastMembers.map((member, index) => (
                  <Reveal key={index}>
                    <Image
                      name={member.name}
                      role={member.role}
                      creativeRole={member.creativeRole}
                      image={member.image}
                      linkedin={member.linkedin}
                      bio={member.bio}
                      onImageClick={() => handleImageClick(member)}
                    />
                  </Reveal>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </div>
    </div>
  );
}
