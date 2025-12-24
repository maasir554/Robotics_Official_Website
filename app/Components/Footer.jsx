"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    /* Added overflow-hidden here to prevent the motion 'x' from stretching the page */
    <footer className="py-12 md:py-24 bg-[#0d0f23] overflow-hidden w-full">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
            Get In Touch
          </h1>
          <p className="text-gray-400 mt-4 italic">Have a question? We'd love to hear from you.</p>
        </motion.div>

        {/* Added w-full and box-sizing safety */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 w-full">
          
          {/* Left Section: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} /* Reduced distance slightly */
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
              <motion.div whileFocus={{ scale: 1.01 }}>
                <label htmlFor="name" className="text-gray-300 block mb-2 text-lg font-medium">Full Name</label>
                <input 
                  id="name"
                  type="text" 
                  className="bg-gray-800/50 text-white w-full py-4 px-5 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder-gray-500 backdrop-blur-sm"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label htmlFor="email" className="text-gray-300 block mb-2 text-lg font-medium">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  className="bg-gray-800/50 text-white w-full py-4 px-5 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 placeholder-gray-500"
                  placeholder="name@example.com"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.01 }}>
                <label htmlFor="msg" className="text-gray-300 block mb-2 text-lg font-medium">Message</label>
                <textarea 
                  id="msg"
                  rows="4" 
                  className="bg-gray-800/50 text-white w-full py-4 px-5 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 resize-none placeholder-gray-500"
                  placeholder="Tell us about your query..."
                />
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="text-white bg-gradient-to-r from-purple-600 to-indigo-500 py-4 rounded-xl font-bold text-lg mt-4 w-full md:w-48 transition duration-300 shadow-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Section: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} /* Reduced distance slightly */
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 shadow-2xl rounded-3xl overflow-hidden border border-white/5 bg-gray-800/20"
          >
            <iframe
              title="MANIT Location"
              /* Updated to a valid sample coordinates for MANIT Bhopal */
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3213032483515!2d77.40108927586241!3d23.213134308848074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e185e33d39%3A0xc665b1602330a6c6!2sMaulana%20Azad%20National%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-[400px] md:h-full min-h-[400px] grayscale contrast-125 opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-700"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
        
        {/* Footer Bottom Line */}
        <div className="mt-20 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Robotics Club MANIT. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Twitter</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;