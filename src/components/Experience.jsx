import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Lightcast',
            role: 'Software Engineer',
            location: 'Dharmapuri',
            period: 'Jan 2024 - Present',
            description: [
                'Developed production-grade backend services using Python, reducing data processing time by 35%.',
                'Automated AWS infrastructure provisioning via Terraform; reduced deployment time by 40%.',
                'Integrated OpenAI API for document analysis, cutting manual validation workload by 50%.',
                'Built robust CI/CD pipelines using GitLab, decreasing release cycle time by 30%.',
                'Deployed containerized microservices with Docker and Kubernetes (Minikube), ensuring scalable testing environments.',
                'Led debugging and optimization of platform build/test systems; improved operational stability.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
                        >
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />

                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex items-center text-gray-400 text-sm mt-2 md:mt-0">
                                        <Calendar size={16} className="mr-2" />
                                        {exp.period}
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start">
                                            <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
