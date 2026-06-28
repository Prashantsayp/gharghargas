"use client";

import { useState, useEffect } from "react";
import { Minimize2, Maximize2 } from "lucide-react";
// import Head from "next/head";
import { Header } from "@/components/Header";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";
import { HeroSection } from "@/components/HeroSection";
import { TrustBadges } from "@/components/TrustBadges";
import { NewConnectionSection } from "@/components/NewConnectionSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ApplicationForms } from "@/components/ApplicationForms";
import { StrategiesCarousel } from "@/components/StrategiesCarousel";
import { PlansSection } from "@/components/PlansSection";
import { FAQSection } from "@/components/FAQSection";
import { RefillpreneurSection } from "@/components/RefillpreneurSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EMICalculator } from "@/components/EmiCalculator";
import { FloatingApplyButton } from "@/components/FloatingApplyButton";
import { useLanguage } from "@/hooks/useLanguage";
import { useAudio } from "@/hooks/useAudio";

export default function GharGharGasWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLiteMode, setIsLiteMode] = useState(false);
  const [isApplyNowVisible, setIsApplyNowVisible] = useState(false);

  const { t } = useLanguage();
  const { audioRef, triggerHapticFeedback, playClickSound } = useAudio();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsApplyNowVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hidden audio element for click sounds */}
      <audio ref={audioRef} preload="auto">
        <source
          src="data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT"
          type="audio/wav"
        />
      </audio>


      {/* Fixed UI Components */}
      <Header isScrolled={isScrolled} />
      <LanguageSwitcher />
      <AccessibilityMenu />

      {/* Lite Mode Toggle */}
      <div className="fixed top-16 right-4 z-50">
        <button
          onClick={() => {
            setIsLiteMode(!isLiteMode);
            triggerHapticFeedback();
            playClickSound(true);
          }}
          className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label={t.liteMode}
        >
          {isLiteMode ? (
            <Maximize2 className="w-4 h-4" />
          ) : (
            <Minimize2 className="w-4 h-4" />
          )}
          <span className="text-xs font-medium">{t.liteMode}</span>
        </button>
      </div>

      {/* Main Content Sections */}
      <HeroSection isLiteMode={isLiteMode} />
      <TrustBadges />
      <NewConnectionSection />
      <TimelineSection />
      <ApplicationForms />
      {/* <StrategiesCarousel isLiteMode={isLiteMode} /> */}
      {/* <PlansSection /> */}
      <RefillpreneurSection />
      <TestimonialsSection />
      <ContactSection />
      {/* <Footer /> */}

      {/* Floating Components */}
      <EMICalculator />
      <FAQSection />
      <FloatingApplyButton isVisible={isApplyNowVisible} />

      {/* Global Styles */}
      <style jsx global>{`
        .high-contrast {
          filter: contrast(150%) brightness(120%);
        }

        .font-small {
          font-size: 0.875rem;
        }

        .font-normal {
          font-size: 1rem;
        }

        .font-large {
          font-size: 1.125rem;
        }

        .font-xl {
          font-size: 1.25rem;
        }

        .screen-reader-mode {
          line-height: 1.8;
          letter-spacing: 0.05em;
        }

        .screen-reader-mode * {
          outline: 2px solid transparent;
          outline-offset: 2px;
        }

        .screen-reader-mode *:focus {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
}
