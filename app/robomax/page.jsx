"use client";

import React from 'react';
import { motion } from "framer-motion";

const AwardsPage = () => {
    const awardsList = [
        { id: 1, name: "RoboMax 2023", des: "Annual Robotics Competition with 200+ participants" },
        { id: 2, name: "TechFest Hackathon", des: "Top 3 finish in the IoT category" },
        { id: 3, name: "National Robotics Championship", des: "1st Place in Autonomous Navigation Challenge" },
        { id: 4, name: "State Level Line Following", des: "Winner in the advanced category" },
        { id: 5, name: "International RoboCup", des: "Participation in the European standard league" },
        { id: 6, name: "AI Summit", des: "Best Research Paper Presentation Award" },
    ];

    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1, // Stagger effect
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="bg-gray-900 min-h-screen py-20">
            <div className="flex flex-wrap justify-center gap-20 md:gap-24 pt-22 mt-16 px-6">
                {awardsList.map((award, index) => (
                    <motion.div
                        key={award.id}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        whileHover={{ y: -10 }}
                        className="
                            bg-gray-800/60 p-5 rounded-2xl flex flex-col w-full max-w-[370px] 
                            relative min-h-[380px] shadow-2xl backdrop-blur-sm 
                            border border-indigo-500/20 transition-all duration-300 mb-24
                            hover:border-indigo-400/50 group
                        "
                    >
                        {/* Image/Visual Placeholder (Popping out) */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="
                                bg-gradient-to-br from-indigo-500 to-purple-600 
                                w-[300px] absolute h-[180px] rounded-xl 
                                flex items-center justify-center 
                                top-[-90px] left-1/2 transform -translate-x-1/2 
                                shadow-[0_20px_50px_rgba(79,70,229,0.4)]
                                group-hover:shadow-[0_25px_60px_rgba(79,70,229,0.6)]
                                transition-all duration-300
                            "
                        >
                            <span className="text-white font-bold text-xl tracking-tight uppercase">
                                {award.name.split(" ")[0]}
                            </span>
                        </motion.div>

                        {/* Text Content */}
                        <div className="mt-[110px] text-white flex flex-col space-y-4 px-2">
                            <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                                {award.name}
                            </h4>
                            <p className="text-gray-400 text-base leading-relaxed">
                                {award.des}
                            </p>
                            
                            <div className="mt-auto pt-4">
                                <motion.button 
                                    whileHover={{ x: 5 }}
                                    className="text-sm text-indigo-400 font-semibold flex items-center gap-2 hover:text-indigo-300 transition-colors"
                                >
                                    View Details <span>→</span>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AwardsPage;