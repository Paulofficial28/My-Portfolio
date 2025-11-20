import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Gradient Blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8 relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-50 animate-pulse"></div>
                        <img
                            src={profileImage}
                            alt="Paul Pandiyan K"
                            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-dark mx-auto shadow-2xl"
                        />
                    </div>

                    <h2 className="text-lg md:text-xl text-primary font-semibold mb-4 tracking-wide uppercase">
                        Hello, I'm Paul Pandiyan K
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Software Engineer <br />
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            & DevOps Enthusiast
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Specializing in backend development, DevOps, and AI-integrated systems.
                        Building scalable solutions with Python, AWS, and Kubernetes.
                    </p>

                    <div className="flex justify-center gap-4">
                        <a
                            href="#projects"
                            className="group bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
                        >
                            View Work
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="#contact"
                            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact Me
                        </a>
                        <a
                            href="/Paul_resume_V3.1.pdf"
                            download
                            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm flex items-center gap-2"
                        >
                            Resume
                            <Download size={20} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
