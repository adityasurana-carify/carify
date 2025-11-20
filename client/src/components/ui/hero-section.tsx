'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { useDemoModal } from '@/hooks/use-demo-modal';

export default function HeroSection() {
  const { openModal } = useDemoModal();
  
  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 w-full text-sm pb-44 pt-20 relative overflow-hidden">
        {/* Grid background pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

        <div className="flex items-center gap-2 border border-blue-200 hover:border-blue-300 bg-white/80 backdrop-blur rounded-full w-max mx-auto px-4 py-2 mt-40 md:mt-32 animate-fade-in-up">
          <span>🎉 New: AI Insurance Coordinator Jenny is live</span>
          <button className="flex items-center gap-1 font-medium text-blue-600">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <h1 className="text-4xl md:text-7xl font-bold max-w-[850px] text-center mx-auto mt-8 text-gray-900 animate-fade-in-up animation-delay-200">
          Transform Healthcare with AI Agents
        </h1>

        <p className="text-sm md:text-lg mx-auto max-w-2xl text-center mt-6 max-md:px-2 text-gray-600 animate-fade-in-up animation-delay-400">
          Handle 75% of calls, save 2+ hours daily per staff, and reduce no-shows to less than 5%. 
          Experience the future of healthcare operations with Jenny, your AI coordinator.
        </p>

        <div className="mx-auto w-full flex items-center justify-center gap-3 mt-8 animate-fade-in-up animation-delay-600">
          <HoverBorderGradient
            as="button"
            onClick={openModal}
            className="dark:bg-blue-600 bg-blue-600 text-white dark:text-white px-8 py-4 font-medium"
          >
            Book Free Demo
          </HoverBorderGradient>
          <button className="flex items-center gap-2 border border-gray-300 hover:bg-gray-50 rounded-full px-8 py-4 transition-all hover:scale-105">
            <span>Watch Video</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto px-4">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=500&fit=crop" 
            alt="Healthcare AI Dashboard" 
            className="w-full rounded-2xl shadow-2xl border border-white/20"
          />
        </div>
      </section>
    </>
  );
}