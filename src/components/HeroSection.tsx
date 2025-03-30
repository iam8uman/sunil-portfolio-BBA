
import { motion } from 'framer-motion';
import { Download, Send, Linkedin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const roles = [
  "BBA-BI Student",
  "Accounting & Sales Officer",
  "Prabhu Bank Intern",
  "Insurance Agent",
];

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-10 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50/50 to-blue-50/50 dark:from-purple-950/10 dark:to-blue-950/10" />
      
      {/* Animated background shapes */}
      <div className="absolute -z-10 top-1/4 right-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -z-10 bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-primary/80 dark:text-white/80 mb-3 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4 text-gradient">
                Sunil Sharma
              </h1>
              
              <div className="h-8 md:h-10 mb-6">
                <motion.p 
                  className="text-lg md:text-2xl animate-role-cycle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {roles.map((role, index) => (
                    <span 
                      key={role} 
                      className={`absolute ${index === 0 ? 'text-primary dark:text-white' : 'opacity-0'}`}
                      style={{ 
                        animationDelay: `${index * 3}s`,
                        color: index === 0 ? 'currentColor' : 'currentColor'
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </motion.p>
              </div>
              
              <motion.p 
                className="text-muted-foreground mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Dedicated Sales and Accounting Officer with over 1.5 years of experience managing financial records, handling 
                transactions, and driving sales growth. Currently pursuing a BBA-BI at Apex College while interning at Prabhu Bank.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Button className="group relative overflow-hidden px-6 py-3 shadow-md">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-primary dark:bg-white group-hover:skew-x-12 group-hover:translate-x-full"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-600 dark:bg-purple-400 translate-x-full group-hover:skew-x-0 group-hover:translate-x-0"></span>
                  <span className="relative flex items-center justify-center gap-2 text-white dark:text-primary">
                    <Download className="h-4 w-4" /> Download CV
                  </span>
                </Button>
                
                <Button variant="outline" className="px-6 py-3 shadow-sm transition-all duration-300 hover:border-primary dark:hover:border-white">
                  <Send className="h-4 w-4 mr-2" /> Let's Connect
                </Button>
              </motion.div>
              
              <motion.div 
                className="flex gap-4 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <a 
                  href="https://www.linkedin.com/in/sunil-who-sale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/50 dark:bg-secondary/30 hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://sunilsharma01.com.np" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/50 dark:bg-secondary/30 hover:bg-primary/10 dark:hover:bg-white/10 transition-all duration-300"
                >
                  <Globe className="h-5 w-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Profile image container with animated border */}
              <div className="animated-border rounded-full w-full h-full overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-6xl font-playfair font-bold text-primary dark:text-white">SS</span>
                  </div>
                </div>
              </div>
              
              {/* Floating accent elements */}
              <motion.div 
                className="absolute -top-4 -right-4 glass-morphism p-3 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <p className="text-xs md:text-sm font-medium">Best Presenter Award 🏆</p>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 glass-morphism p-3 rounded-lg shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-xs md:text-sm font-medium">Insurance Agent 📊</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="text-primary/60 dark:text-white/60 hover:text-primary dark:hover:text-white transition-colors duration-300">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll Down</span>
            <div className="w-5 h-8 rounded-full border-2 border-current flex justify-center p-1">
              <motion.div 
                className="w-1 h-1 rounded-full bg-current"
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
