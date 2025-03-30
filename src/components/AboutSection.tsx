
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const AboutSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const timeline = [
    {
      year: '2020 - Present',
      title: 'Bachelor in BBA-BI',
      description: 'Pursuing my degree at Apex College, Pokhara University',
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: '2022 - 2023',
      title: 'Workshop Organizer',
      description: 'Organized the Apex Career Workshop at Apex College',
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      year: '2023',
      title: 'Best Team Award',
      description: 'Led the winning team in the Apex Summer Project',
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: '2023 - 2024',
      title: 'Insurance Agent',
      description: 'Working as an insurance agent at Prabhu Life Insurance',
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: '2024',
      title: 'Banking Internship',
      description: 'Interning at Prabhu Bank, Customer Service Department',
      icon: <Briefcase className="h-5 w-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-50/50 to-purple-50/50 dark:from-blue-950/10 dark:to-purple-950/10" />
      <div className="absolute -z-10 top-1/3 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/3 right-1/4 w-64 h-64 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">About Me</h2>
          <div className="h-1 w-20 bg-primary/20 dark:bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              I am a dedicated Sales and Accounting Officer with over 1.5 years of experience in managing financial records, handling transactions, and driving sales growth. My diverse background spans multiple domains, combining academic excellence with practical experience.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently pursuing a Bachelor's in Business Administration with Banking and Insurance at Apex College, I'm simultaneously gaining hands-on experience through my internship at Prabhu Bank and role as an Insurance Agent at Prabhu Life Insurance.
            </p>
            <p className="text-muted-foreground">
              Recognized for my communication and presentation skills, I was awarded "Best Presenter" in the Apex Smart Program and led the "Best Team" in the Apex Summer Project, demonstrating my leadership abilities and collaborative approach.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-6">My Timeline</h3>
            
            {timeline.map((timelineItem, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-white/10 text-primary dark:text-white">
                    {timelineItem.icon}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/10 dark:bg-white/10 my-2"></div>
                  )}
                </div>
                <div className="glass-card flex-1 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">{timelineItem.year}</div>
                  <h4 className="text-lg font-semibold mb-2">{timelineItem.title}</h4>
                  <p className="text-sm text-muted-foreground">{timelineItem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
