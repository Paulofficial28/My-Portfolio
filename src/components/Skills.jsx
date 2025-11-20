import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Code2 className="w-8 h-8 text-primary" />,
            skills: ['React.js', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript (ES6+)', 'Jest', 'Cypress']
        },
        {
            title: 'Backend Development',
            icon: <Server className="w-8 h-8 text-secondary" />,
            skills: ['Python', 'FastAPI', 'Node.js', 'RESTful APIs', 'PostgreSQL']
        },
        {
            title: 'DevOps & Cloud',
            icon: <Cloud className="w-8 h-8 text-primary" />,
            skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD Pipelines']
        },
        {
            title: 'Tools & Methods',
            icon: <Wrench className="w-8 h-8 text-secondary" />,
            skills: ['Git/GitHub', 'VS Code', 'Agile/Scrum', 'Linux', 'System Design']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group"
                        >
                            <div className="mb-4 bg-dark/50 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
