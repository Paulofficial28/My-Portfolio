import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'DevOps/Cloud', icon: <Server className="w-8 h-8 text-primary" />, description: 'AWS, Docker, Kubernetes, Terraform, GitLab CI/CD' },
        { name: 'Backend & AI', icon: <Database className="w-8 h-8 text-secondary" />, description: 'Python, REST APIs, OpenAI APIs, ChromaDB' },
        { name: 'Frontend', icon: <Layout className="w-8 h-8 text-primary" />, description: 'React.js, Jest, Cypress' },
        { name: 'Core CS', icon: <Code className="w-8 h-8 text-secondary" />, description: 'DSA, System Design, OOP, SQL' },
    ];

    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                    <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
                        Backend / Full-Stack Software Engineer with experience building production-grade APIs, cloud-native systems, and automated
                        CI/CD pipelines. Focused on scalable backend development, infrastructure automation on AWS, and reliable engineering practices,
                        with exposure to applied AI features delivering measurable business value.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 border border-white/5"
                        >
                            <div className="bg-dark/50 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white text-center mb-2">{skill.name}</h3>
                            <p className="text-gray-400 text-center text-sm">{skill.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-lg font-semibold text-primary">Government College of Engineering, Erode</h4>
                                <p className="text-white">B.E. in Computer Science and Engineering</p>
                                <p className="text-gray-400 text-sm">Nov 2020 - June 2024 | CGPA: 8.3</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white/5 p-8 rounded-2xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Cloud Computing on AWS - Udemy</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Docker for Beginners - Udemy</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Kubernetes Fundamentals - Udemy</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>Problem Solving - Hackerrank</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>SQL - Hackerrank</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
