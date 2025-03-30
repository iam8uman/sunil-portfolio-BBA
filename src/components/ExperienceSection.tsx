
import { motion } from 'framer-motion';
import { Briefcase, Building, ShieldCheck } from 'lucide-react';

const experiences = [
  {
    title: 'Insurance Agent',
    company: 'Prabhu Life Insurance',
    period: 'May 2023 - Oct 2024',
    description: 'Successfully enrolled 7+ individuals in insurance plans while working as an insurance agent at Prabhu Life Insurance Pvt. Ltd.',
    icon: <ShieldCheck className="h-6 w-6" />,
    color: 'from-blue-500/20 to-blue-600/20 dark:from-blue-500/10 dark:to-blue-600/10',
    borderColor: 'border-blue-500/20 dark:border-blue-500/20',
  },
  {
    title: 'Internship',
    company: 'Prabhu Bank Pvt Ltd',
    period: 'Apr 2024 - Jul 2024',
    description: 'Completed an internship at Prabhu Bank, gaining hands-on experience in the Customer Service Department. Responsibilities included handling customer requests, cold calling, assisting with account inquiries, and supporting day-to-day banking operations.',
    icon: <Building className="h-6 w-6" />,
    color: 'from-purple-500/20 to-purple-600/20 dark:from-purple-500/10 dark:to-purple-600/10',
    borderColor: 'border-purple-500/20 dark:border-purple-500/20',
  },
  {
    title: 'Workshop Organizer',
    company: 'Apex Career Workshop',
    period: 'May 2022 - Jan 2023',
    description: 'Organized the Apex Career Workshop at Apex College, taking leadership to ensure its successful execution. Coordinated planning, managed logistics, and collaborated with teams to deliver a valuable experience for participants.',
    icon: <Briefcase className="h-6 w-6" />,
    color: 'from-emerald-500/20 to-emerald-600/20 dark:from-emerald-500/10 dark:to-emerald-600/10',
    borderColor: 'border-emerald-500/20 dark:border-emerald-500/20',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-purple-50/50 to-blue-50/50 dark:from-purple-950/10 dark:to-blue-950/10" />
      <div className="absolute -z-10 top-1/4 right-1/3 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/4 left-1/3 w-72 h-72 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">Professional Experience</h2>
          <div className="h-1 w-20 bg-primary/20 dark:bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`glass-card overflow-hidden group border border-opacity-50 ${exp.borderColor}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-60 group-hover:opacity-80 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center text-primary dark:text-white mb-6 shadow-md">
                  {exp.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-primary/70 dark:text-white/70 font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-primary/60 dark:text-white/60 mb-4">{exp.period}</p>
                
                <div className="w-12 h-0.5 bg-primary/20 dark:bg-white/20 rounded mb-4"></div>
                
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
