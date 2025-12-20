import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Trophy, TrendingUp } from 'lucide-react';

const Achievements = () => {
    const achievements = [
        {
            icon: Code,
            title: '300+ DSA Problems',
            description: 'Solved 300+ Data Structures and Algorithms problems on LeetCode',
            iconColor: 'text-orange-500',
            color: 'from-orange-500 to-red-500',
            bgColor: 'bg-orange-500/10',
            borderColor: 'border-orange-500/50'
        },
        {
            icon: TrendingUp,
            title: '100-Day Streak',
            description: 'Achieved a 100-day consistent problem-solving streak on LeetCode',
            iconColor: 'text-green-500',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-500/10',
            borderColor: 'border-green-500/50'
        },
        {
            icon: Trophy,
            title: 'Hackathon Winner',
            description: 'Won internal company hackathon at Lightcast for AttriSense - Employee Attrition Prediction System',
            iconColor: 'text-yellow-500',
            color: 'from-yellow-500 to-amber-500',
            bgColor: 'bg-yellow-500/10',
            borderColor: 'border-yellow-500/50'
        }
    ];

    return (
        <section id="achievements" className="py-20 bg-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative bg-white/5 rounded-2xl p-6 border ${achievement.borderColor} hover:border-opacity-100 transition-all duration-300 overflow-hidden`}
                            >
                                {/* Background Gradient Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container with prominent logo */}
                                    <div className={`${achievement.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <div className="relative">
                                            <Icon
                                                className={`w-10 h-10 ${achievement.iconColor} drop-shadow-lg`}
                                                strokeWidth={2}
                                            />
                                            {/* Glow effect behind icon */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} blur-xl opacity-50`} />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                                        {achievement.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {achievement.description}
                                    </p>
                                </div>

                                {/* Decorative Element */}
                                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${achievement.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-gray-300 text-sm">
                            Committed to continuous learning and excellence in software engineering
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
