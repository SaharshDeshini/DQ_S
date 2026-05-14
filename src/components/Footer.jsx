import { Linkedin, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-neutral-200 py-12 px-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/icon-logo.jpg" 
                alt="DataQuesters Logo" 
                className="w-8 h-8 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-sm"
              />
              <span className="font-extrabold tracking-tight text-neutral-950 text-lg">
                DataQuesters
              </span>
            </Link>
            <p className="text-sm text-neutral-500 font-medium">
              © {new Date().getFullYear()} VJ Data Questers. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-row items-center gap-4">
            <a
              href="https://www.linkedin.com/company/vj-data-questers/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-50 text-neutral-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/vjdataquesters.club/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-50 text-neutral-400 hover:text-coral-500 hover:bg-coral-50 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:vjdataquesters@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full bg-neutral-50 text-neutral-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
