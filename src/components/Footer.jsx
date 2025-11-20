import React from 'react';
import { Github, Linkedin, Code, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            Paul Pandiyan K
                        </span>
                     
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Paulofficial28" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/paul-pandiyan-k-5474141ba/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://leetcode.com/u/Paul28Paul/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Code size={24} />
                        </a>
                    </div>
                </div>

               
            </div>
        </footer>
    );
};

export default Footer;
