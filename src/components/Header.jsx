import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about", hasDropdown: true },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Team", path: "/team" },
    { name: "Newsletter", path: "/newsletter" },
  ];

  return (
    <>
      {/* Desktop & Mobile Floating Navbar */}
      <div className="fixed top-4 left-0 right-0 z-[100] px-4 md:px-0 flex justify-center pointer-events-none">
        <nav className="w-full max-w-5xl bg-white/40 backdrop-blur-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full px-5 py-2 flex items-center justify-between pointer-events-auto transition-all duration-300">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group"
            >
              <img
                src="/icon-logo.jpg"
                alt="DataQuesters Logo"
                className="w-8 h-8 rounded-full object-cover shadow-sm group-hover:scale-110 transition-transform duration-200"
              />
              <span className="relative inline-block font-extrabold tracking-tight text-neutral-950 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-indigo-700 hover:to-teal-500 transition-colors hidden sm:block text-lg">
                DataQuesters
              </span>
            </Link>
          </div>

          {/* Right: Navigation and Actions */}
          <div className="flex items-center gap-4">
            {/* Center: Navigation (Desktop) */}
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setIsAboutOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setIsAboutOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`text-[13px] font-semibold transition-colors duration-200 flex items-center gap-1 ${
                      isActive(link.path)
                        ? "text-indigo-600"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <span className="text-[10px] opacity-70 group-hover:rotate-180 transition-transform">
                        ▼
                      </span>
                    )}
                  </Link>

                  {/* Dropdown for About */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {isAboutOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden py-2"
                        >
                          <Link
                            to="/about"
                            className="block px-4 py-2 text-sm text-neutral-600 hover:text-indigo-600 hover:bg-neutral-50/50 font-medium transition-colors"
                          >
                            About Us
                          </Link>
                          <Link
                            to="/testimonials"
                            className="block px-4 py-2 text-sm text-neutral-600 hover:text-indigo-600 hover:bg-neutral-50/50 font-medium transition-colors"
                          >
                            Our Alumni
                          </Link>
                          <Link
                            to="/about#foundersBlock"
                            className="block px-4 py-2 text-sm text-neutral-600 hover:text-indigo-600 hover:bg-neutral-50/50 font-medium transition-colors"
                          >
                            Founders Block
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-neutral-950 hover:bg-white/50 rounded-full transition-colors"
              onClick={handleMenuToggle}
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-neutral-950/20 backdrop-blur-sm z-[101] md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-[100dvh] w-full max-w-sm bg-white shadow-2xl z-[102] md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-neutral-100">
                <span className="font-bold text-neutral-950 tracking-tight">
                  Navigation
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 bg-neutral-100 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-200 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={closeMenu}
                      className={`block py-4 text-xl font-semibold tracking-tight transition-colors border-b border-neutral-50 ${
                        isActive(link.path)
                          ? "text-indigo-600"
                          : "text-neutral-950 hover:text-indigo-600"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {/* Mobile Dropdown items inline */}
                    {link.hasDropdown && (
                      <div className="pl-6 py-2 flex flex-col gap-3 border-b border-neutral-50">
                        <Link
                          to="/about"
                          onClick={closeMenu}
                          className="text-neutral-500 font-medium hover:text-indigo-600"
                        >
                          About Us
                        </Link>
                        <Link
                          to="/testimonials"
                          onClick={closeMenu}
                          className="text-neutral-500 font-medium hover:text-indigo-600"
                        >
                          Testimonials
                        </Link>
                        <Link
                          to="/about#foundersBlock"
                          onClick={closeMenu}
                          className="text-neutral-500 font-medium hover:text-indigo-600"
                        >
                          Founders Block
                        </Link>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-neutral-100">
                <Link
                  to="/events"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full px-6 py-4 rounded-xl bg-coral-500 text-white font-semibold hover:bg-coral-600 active:scale-95 transition-all shadow-md"
                >
                  Join us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
