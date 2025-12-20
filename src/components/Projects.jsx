import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            title: 'AttriSense – Employee Attrition Prediction System',
            description: 'Hackathon Winner – A robust, full-stack system designed to proactively manage human capital risk by predicting employee turnover.',
            features: [
                'Developed and deployed an employee attrition prediction model using XGBoost, providing a high-accuracy, data-driven approach to identify at-risk employees.',
                'Built a complete web application featuring interactive dashboards for real-time visualization of attrition trends and workforce analytics.',
                'The system\'s successful technical execution and clear business value led to it being awarded Winner in the internal company hackathon.'
            ],
            tags: ['Python', 'XGBoost', 'React.js', 'TypeScript', 'Supabase'],
            image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            github: 'https://github.com/Paulofficial28/AttriSense.git',
            demo: '#'
        },
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

    // Auto-play carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % projects.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [projects.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="projects" className="py-20 bg-dark relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-purple-500 to-secondary mx-auto rounded-full shadow-lg shadow-primary/50" />
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        Showcasing innovative solutions and technical excellence
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 p-3 md:p-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/50 group"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 p-3 md:p-4 bg-gradient-to-r from-primary to-secondary rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/50 group"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 transition-transform" />
                    </button>

                    {/* Carousel Slides */}
                    <div className="relative h-[600px] md:h-[550px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                onClick={() => setSelectedProject(projects[currentSlide])}
                                className="absolute inset-0 cursor-pointer"
                            >
                                <div className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm shadow-2xl hover:shadow-primary/20 h-full">
                                    {/* Gradient Border Effect on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur-xl" />

                                    <div className="relative h-full flex flex-col md:flex-row">
                                        {/* Image Section */}
                                        <div className="relative h-64 md:h-full md:w-1/2 overflow-hidden">
                                            <img
                                                src={projects[currentSlide].image}
                                                alt={projects[currentSlide].title}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark via-dark/50 to-transparent opacity-80" />

                                            {/* Hover Overlay with Icon */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-600/90 to-secondary/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    whileInView={{ scale: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                                >
                                                    <ExternalLink className="w-8 h-8 text-white" />
                                                </motion.div>
                                                <span className="text-white font-semibold text-lg">View Details</span>
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-6 md:p-8 relative md:w-1/2 flex flex-col justify-center">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                                {projects[currentSlide].title}
                                            </h3>
                                            <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed line-clamp-3">
                                                {projects[currentSlide].description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {projects[currentSlide].tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/30 rounded-full hover:bg-primary/30 transition-colors duration-200"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Project number indicator */}
                                            <div className="text-6xl md:text-8xl font-bold text-white/5 absolute bottom-4 right-4 md:right-8">
                                                {String(currentSlide + 1).padStart(2, '0')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-3 mt-8">
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all duration-300 rounded-full ${index === currentSlide
                                        ? 'w-12 h-3 bg-gradient-to-r from-primary to-secondary'
                                        : 'w-3 h-3 bg-white/20 hover:bg-white/40'
                                    }`}
                                aria-label={`Go to project ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            layoutId={`project-${projects.indexOf(selectedProject)}`}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-gradient-to-br from-dark via-dark/95 to-dark/90 border border-white/20 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 z-50 backdrop-blur-sm border border-white/20 hover:scale-110"
                            >
                                <X size={24} />
                            </button>

                            {/* Hero Image */}
                            <div className="relative h-72 md:h-96 overflow-hidden">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay" />

                                {/* Floating Title */}
                                <div className="absolute bottom-8 left-8 right-8">
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg"
                                    >
                                        {selectedProject.title}
                                    </motion.h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map((tag, index) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-primary/30 to-secondary/30 text-white border border-primary/50 rounded-full backdrop-blur-sm shadow-lg"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Description */}
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-gray-300 text-lg leading-relaxed mb-8 bg-white/5 p-6 rounded-2xl border border-white/10"
                                >
                                    {selectedProject.description}
                                </motion.p>

                                {/* Key Features */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mb-8"
                                >
                                    <h4 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 flex items-center gap-2">
                                        <CheckCircle size={24} className="text-primary" />
                                        Key Features & Impact
                                    </h4>
                                    <div className="space-y-3">
                                        {selectedProject.features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + idx * 0.1 }}
                                                className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-colors duration-300 group"
                                            >
                                                <CheckCircle size={20} className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                                                <span className="text-gray-300 leading-relaxed">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Action Buttons */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    {selectedProject.github && selectedProject.github !== '#' && (
                                        <a
                                            href={selectedProject.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white rounded-xl font-semibold transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 shadow-lg backdrop-blur-sm group"
                                        >
                                            <Github size={22} className="group-hover:rotate-12 transition-transform" />
                                            View Source Code
                                        </a>
                                    )}
                                    {selectedProject.demo && selectedProject.demo !== '#' && (
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/30 group"
                                        >
                                            <ExternalLink size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                            View Live Demo
                                        </a>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
