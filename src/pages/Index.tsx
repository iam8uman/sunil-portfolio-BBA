
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import YouTubeSection from "@/components/YouTubeSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Check system preference or localStorage on initial load
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Apply theme (default to light if no preference)
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      // Ensure light theme is applied by default
      localStorage.setItem('theme', 'light');
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground relative overflow-hidden"
      >
        <SmoothScroll>
          <ParticlesBackground />
          <Navbar />
          
          <main className="relative z-10">
            <HeroSection />
            <div className="py-8 md:py-12 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10">
              <AboutSection />
            </div>
            <ExperienceSection />
            <div className="py-8 md:py-12">
              <YouTubeSection />
            </div>
            <div className="py-8 md:py-12 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10">
              <SkillsSection />
            </div>
            <ContactSection />
          </main>
          
          <Footer />
        </SmoothScroll>
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
