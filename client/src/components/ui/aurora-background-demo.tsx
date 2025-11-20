"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Users } from "lucide-react";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-6xl font-bold dark:text-white text-center leading-tight">
          Meet Jenny — Your AI Insurance Coordinator
        </div>
        <div className="font-extralight text-lg md:text-2xl dark:text-neutral-200 py-4 text-center max-w-4xl">
          Jenny handles benefits verification, copay checks, deductibles, eligibility, and more by calling insurance companies for you — so your team stays focused on patient care, not hold lines.
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm mb-6">
          <Badge variant="secondary" className="px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            HIPAA Compliant
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            24/7
          </Badge>
          <Badge variant="secondary" className="px-4 py-2">
            <Users className="w-4 h-4 mr-2" />
            Works With Any Clinic Size
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
            Book a Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10–15 minutes</div>
            <div className="text-gray-600 dark:text-gray-300">saved per patient</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">automated verification</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600 dark:text-gray-300">HIPAA-ready architecture</div>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}