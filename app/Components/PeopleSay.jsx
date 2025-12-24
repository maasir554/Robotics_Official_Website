"use client";

import React from "react";
import { motion } from "framer-motion";

const PeopleSay = () => {
    const testimonials = [
        {
            id: "1",
            name: "Alice Johnson",
            role: "Software Engineer, Google",
            feedback: "Joining this robotics program was a game-changer. The hands-on experience and complex projects transformed my understanding of technology and gave me practical, invaluable skills for my career.",
        },
        {
            id: "2",
            name: "Rahul Sharma",
            role: "Aerospace Student",
            feedback: "The mentorship here is exceptional. We dove deep into machine learning for autonomous systems—knowledge that is directly applicable to aerospace engineering. The community support is fantastic.",
        },
        {
            id: "3",
            name: "Priya Verma",
            role: "Data Scientist, IBM",
            feedback: "I was impressed by the level of technical detail in the workshops. This club not only builds robots but builds future innovators. It truly bridges the gap between theory and real-world application.",
        },
    ];

    // Card Entrance Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.7,
                ease: "easeOut",
            },
        }),
    };

    return (
        <section className="py-16 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* Header Section Animation */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4 mb-16"
                >
                    <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white">
                        What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">People Say</span>
                    </h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "6rem" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                    ></motion.div>
                </motion.div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testi, index) => (
                        <motion.div 
                            key={testi.id} 
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="
                                bg-gray-800/80 p-8 rounded-2xl shadow-xl border border-indigo-500/10 
                                backdrop-blur-sm transition-all duration-300
                                flex flex-col justify-between min-h-[350px]
                                hover:border-indigo-500/40 hover:shadow-indigo-500/10
                            "
                        >
                            {/* Animated Quote Icon */}
                            <motion.svg 
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="w-10 h-10 text-indigo-400 mb-4 opacity-50" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M13.5 13.5C13.5 14.3284 14.1716 15 15 15H17C17.8284 15 18.5 14.3284 18.5 13.5V8.5C18.5 7.67157 17.8284 7 17 7H15C14.1716 7 13.5 7.67157 13.5 8.5V13.5ZM5.5 13.5C5.5 14.3284 6.17157 15 7 15H9C9.82843 15 10.5 14.3284 10.5 13.5V8.5C10.5 7.67157 9.82843 7 9 7H7C6.17157 7 5.5 7.67157 5.5 8.5V13.5Z"/>
                            </motion.svg>
                            
                            <p className="text-gray-200 text-lg italic leading-relaxed mb-6">
                                "{testi.feedback}"
                            </p>
                            
                            {/* Author Section with Subtle Entrance */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 + (index * 0.2) }}
                                className="flex items-center mt-auto"
                            >
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                                        {testi.name[0]}
                                    </div>
                                    {/* Pulse effect around avatar */}
                                    <div className="absolute inset-0 w-12 h-12 bg-indigo-500 rounded-full animate-ping opacity-20 pointer-events-none"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-lg">{testi.name}</h3>
                                    <p className="text-indigo-300 text-sm">{testi.role}</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PeopleSay;