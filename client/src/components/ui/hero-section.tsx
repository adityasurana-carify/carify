'use client';

import React from 'react';
import { Shield, Clock, Users, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  // Close on ESC & click outside (mobile overlay)
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    function onClickOutside(e: MouseEvent) {
      if (!menuRef.current) return;
      if (menuRef.current.contains(e.target as Node)) return;
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('click', onClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClickOutside);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section className="bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] w-full bg-no-repeat bg-cover bg-center text-sm py-20 md:py-32">


        <div className="flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-8">
          <Shield className="w-4 h-4 text-blue-600" />
          <span>HIPAA Compliant & Secure</span>
        </div>

        <h1 className="text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-8">
          Meet Jenny — Your AI Insurance Coordinator
        </h1>

        <p className="text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
          Jenny handles benefits verification, copay checks, deductibles, eligibility, and more by calling insurance companies for you — so your team stays focused on patient care, not hold lines.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8">
          <button className="flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 rounded-full px-6 py-3">
            <span>Book a Demo</span>
            <span className="text-xs text-gray-500">10–15 minutes</span>
          </button>
        </div>

        {/* Key Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-2xl font-bold">10–15 minutes</span>
            </div>
            <span className="text-sm text-gray-600">saved per patient</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-2xl font-bold">24/7</span>
            </div>
            <span className="text-sm text-gray-600">automated verification</span>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-2xl font-bold">100%</span>
            </div>
            <span className="text-sm text-gray-600">HIPAA-ready architecture</span>
          </div>
        </div>

        {/* Feature badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 max-w-2xl mx-auto px-4">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 border border-slate-200">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 border border-slate-200">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">24/7</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 border border-slate-200">
            <Users className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium">Works With Any Clinic Size</span>
          </div>
        </div>
      </section>
    </>
  );
}