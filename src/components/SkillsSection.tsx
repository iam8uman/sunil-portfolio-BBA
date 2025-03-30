
import { motion } from 'framer-motion';

const skills = [
  {
    category: 'Communication',
    items: [
      { name: 'Presentation Skills', level: 95 },
      { name: 'Negotiation Skills', level: 85 },
      { name: 'Influensive Power', level: 90 },
    ]
  },
  {
    category: 'Technical',
    items: [
      { name: 'Accounting', level: 80 },
      { name: 'Computer Skills', level: 85 },
      { name: 'Social Media', level: 75 },
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Team Work', level: 90 },
      { name: 'Leadership', level: 85 },
      { name: 'Cold Emailing', level: 80 },
      { name: 'Relationship Building', level: 85 },
    ]
  },
];

const languages = [
  { name: 'Nepali', level: 'Native' },
  { name: 'Hindi', level: 'Fluent' },
  { name: 'English', level: 'Professional' },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm font-medium">{level}%</span>
      </div>
      <div className="h-2 bg-secondary/50 dark:bg-secondary/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary to-primary/70 dark:from-white dark:to-white/70 rounded-full"
        />
      </div>
    </div>
  );
};

const SkillTag = ({ name, index }: { name: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="bg-primary/10 dark:bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-primary dark:text-white hover:bg-primary/20 dark:hover:bg-white/20 transition-colors duration-300 cursor-default"
    >
      {name}
    </motion.div>
  );
};

const LanguageCard = ({ name, level, index }: { name: string; level: string; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card"
    >
      <h4 className="text-lg font-bold mb-1">{name}</h4>
      <p className="text-sm text-muted-foreground">{level}</p>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-blue-50/50 to-indigo-50/50 dark:from-blue-950/10 dark:to-indigo-950/10" />
      <div className="absolute -z-10 top-1/3 right-1/4 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-1/3 left-1/4 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary/20 dark:bg-white/20 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            {skills.map((skillGroup, index) => (
              <motion.div 
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="mb-10"
              >
                <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
                <div>
                  {skillGroup.items.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-6">Key Competencies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Problem Solving",
                  "Financial Analysis",
                  "Customer Service",
                  "Sales Strategy",
                  "Cold Calling",
                  "Account Management",
                  "Banking Operations",
                  "Insurance Planning",
                  "Marketing",
                  "Presentations"
                ].map((tag, index) => (
                  <SkillTag key={tag} name={tag} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10"
            >
              <h3 className="text-xl font-semibold mb-6">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((language, index) => (
                  <LanguageCard 
                    key={language.name} 
                    name={language.name} 
                    level={language.level} 
                    index={index} 
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6">Achievements</h3>
              <div className="glass-card">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-white mt-2 mr-3"></div>
                    <p>Led the Best Team in the Apex Summer Project 2023</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-white mt-2 mr-3"></div>
                    <p>Recognized as the "Best Presenter" in the Apex Smart Program 2022</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary dark:bg-white mt-2 mr-3"></div>
                    <p>Successfully enrolled 7+ individuals in insurance plans as a new agent</p>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
