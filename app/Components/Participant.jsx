"use client";

import React from "react";
import { motion } from "framer-motion";

const Participant = () => {
    const awardsList = [
    {
      id: 1,
      name: "NXP AIM 2025",
      des: "We secured the AI Arjuna Award by building a high-performance autonomous system for warehouse navigation and object detection, demonstrating strong technical depth and teamwork.",
      imgSrc: "placeholder_nxp_aim",
    },
    {
      id: 2,
      name: "GUJARAT ROBOFEST 4.0",
      des: "We emerged as Grand Finalists at Gujarat Robofest 2025, representing our ideas in Rover and Application-Based challenges, showcasing technical depth and real-world impact.",
      imgSrc: "placeholder_gujarat_robofest",
    },
    {
      id: 3,
      name: "TECHNEX IIT BHU",
      des: "We excelled at Technex 2025, IIT BHU, ranking among the top teams with innovative designs and precise execution, strengthening our legacy of innovation.",
      imgSrc: "placeholder_technex",
    },
    {
      id: 4,
      name: "ABU ROBOCON",
      des: "This hands-on challenge pushed participants to solve real-world problems using robotics kits under time pressure, highlighting innovation and rapid prototyping.",
      imgSrc: "placeholder_robocon",
    },
    {
      id: 5,
      name: "FLIPKART GRID 4.0",
      des: "Built an autonomous drone with accurate pick-and-drop capabilities powered by computer vision, combining Pixhawk and Raspberry Pi for intelligent flight control.",
      imgSrc: "placeholder_flipkart_grid",
    },
    {
      id: 6,
      name: "ISRO ROVER DESIGN CHALLENGE",
      des: "Advanced to Round 2 of the ISRO Robotics Challenge – URSC, designing a rover capable of rough terrain navigation and sample collection for future space exploration.",
      imgSrc: "placeholder_isro_rover",
    },
  ];

    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    return (
        <section className="bg-gray-900 py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
                
                {/* 1. Header Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                        Participations & Achievements
                    </h1>
                    <div className="w-24 h-1 bg-indigo-500 mx-auto mt-4 rounded-full opacity-50" />
                </motion.div>

                {/* 2. Top Section: Visual Achievements & Awards List */}
                <div className="flex flex-col md:flex-row items-center md:justify-around gap-12 md:gap-8 mb-32">
                    
                    {/* Visual Placeholders */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="flex gap-6 md:gap-12"
                    >
                        {/* Trophy */}
                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: "0 0 25px rgba(250, 204, 21, 0.3)" }}
                            className="bg-white/5 w-[150px] md:w-[220px] rounded-2xl h-[200px] flex flex-col items-center justify-center p-4 shadow-lg border border-yellow-400/30 backdrop-blur-sm transition-colors hover:border-yellow-400"
                        >
                            <span className="text-5xl mb-3">🏆</span>
                            <span className="text-gray-300 font-bold text-center">National Trophy</span>
                        </motion.div>
                        
                        {/* Certificate */}
                        <motion.div 
                            variants={fadeInUp}
                            whileHover={{ y: -10, boxShadow: "0 0 25px rgba(59, 130, 246, 0.3)" }}
                            className="bg-white/5 w-[150px] md:w-[220px] rounded-2xl h-[200px] flex flex-col items-center justify-center p-4 shadow-lg border border-blue-400/30 backdrop-blur-sm transition-colors hover:border-blue-400"
                        >
                            <span className="text-5xl mb-3">📜</span>
                            <span className="text-gray-300 font-bold text-center">IIT TechFest Cert.</span>
                        </motion.div>
                    </motion.div>

                    {/* Awards List */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="w-full md:w-1/2 lg:w-1/3 text-white p-6 bg-indigo-950/20 rounded-3xl border border-indigo-500/10"
                    >
                        <h3 className="mb-6 font-extrabold text-2xl text-indigo-400">Awards and Recognition</h3>
                        <ul className="flex flex-col gap-4 text-lg">
                            {[
                                { ico: "🏆", txt: "1st Place - National Robotics 2023" },
                                { ico: "🥇", txt: "Best Innovation - IIT Delhi TechFest" },
                                { ico: "🌍", txt: "International RoboCup Participant" },
                                { ico: "🏅", txt: "Winner - State Level Line Follower" }
                            ].map((item, i) => (
                                <motion.li 
                                    key={i}
                                    variants={fadeInUp}
                                    className="flex items-start bg-white/5 p-3 rounded-xl border border-transparent hover:border-indigo-500/30 transition-all"
                                >
                                    <span className="mr-3">{item.ico}</span> {item.txt}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* 3. Bottom Section: Detailed Event Cards */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={staggerContainer}
                    className="flex flex-wrap justify-center gap-y-32 gap-x-12 pt-10"
                >
                    {awardsList.map((award, index) => (
                        <motion.div
                            key={award.id}
                            variants={fadeInUp}
                            whileHover={{ y: -5 }}
                            className="bg-gray-800/60 p-6 rounded-2xl flex flex-col w-full max-w-[360px] relative min-h-[380px] shadow-2xl backdrop-blur-sm border border-indigo-500/20"
                        >
                            {/* Popping Visual */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="bg-gradient-to-br from-white to-gray-200 w-[280px] absolute h-[180px] rounded-xl flex items-center justify-center top-[-90px] left-1/2 transform -translate-x-1/2 shadow-[0_20px_40px_rgba(99,102,241,0.4)] overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent" />
                                <span className="text-indigo-900 font-black text-xl tracking-tighter uppercase opacity-80">
                                    {award.name.split(' ')[0]}
                                </span>
                            </motion.div>

                            {/* Text Content */}
                            <div className="mt-28 text-white flex flex-col flex-grow">
                                <h4 className="text-2xl font-bold text-indigo-300 mb-3">{award.name}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {award.des}
                                </p>
                                <div className="mt-auto">
                                    <button className="group text-sm text-purple-400 font-bold flex items-center gap-2 hover:text-white transition-colors">
                                        LEARN MORE 
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Participant;