import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'RAGnarok Chatbot',
            description: 'AI chatbot to answer internal queries using Retrieval-Augmented Generation (RAG).',
            features: [
                'Built a vector-search pipeline with ChromaDB and integrated Mistral-7B LLM for response generation.',
                'Reduced repetitive internal queries by 60% by surfacing contextual document-backed answers.',
                'Deployed Streamlit-based UI with query history, improving accessibility across teams.'
            ],
            tags: ['Python', 'Streamlit', 'HuggingFace', 'ChromaDB'],
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            github: 'https://github.com/Paulofficial28/RAGnarok',
            demo: '#'
        },
        {
            title: 'Cloud-native Deployment System',
            description: 'CI/CD pipeline setup and infrastructure provisioning.',
            features: [
                'Automated infrastructure creation using Terraform scripts on AWS.',
                'Deployed Dockerized apps to Kubernetes (Minikube), simulating scalable environments.',
                'Enabled zero-touch deployments via GitLab CI/CD.'
            ],
            tags: ['Docker', 'Kubernetes', 'Terraform', 'AWS'],
            image: 'https://th.bing.com/th/id/OIP.o4N8wUnGn78fDZq-SUH50AHaEv?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            github: '#',
            demo: '#'
        },
        {
            title: 'Crypto Price Tracker',
            description: 'Frontend application to track real-time cryptocurrency prices.',
            features: [
                'Built an interactive UI for live price monitoring using React.js.',
                'Integrated external API to show price trends and improve user decision-making.'
            ],
            tags: ['React.js', 'CoinGecko API', 'Chart.js'],
            image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            github: 'https://github.com/Paulofficial28/Crypto-Price-Analysis',
            demo: '#'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            layoutId={`project-${index}`}
                            onClick={() => setSelectedProject(project)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <span className="text-white font-medium">View Details</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`}
                            className="bg-dark border border-white/10 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={24} />
                            </button>

                            <div className="relative h-64 md:h-80">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8 space-y-3">
                                    <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                                    {selectedProject.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3 text-gray-400">
                                            <CheckCircle size={20} className="text-primary shrink-0 mt-1" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {selectedProject.github && selectedProject.github !== '#' && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors"
                                        >
                                            <Github size={20} />
                                            View Code
                                        </a>
                                    )}
                                    {selectedProject.demo && selectedProject.demo !== '#' && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
