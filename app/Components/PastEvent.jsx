"use client";

import { motion } from "framer-motion";

const PastEvent = () => {
  const events = [
    {
      id: 1,
      name: "ROBOTRONICS",
      des: "Robotronics was a week-long workshop where students explored robotics, machine learning, IOT and AI. They engaged in hands-on activities with robot kits and simulation software.",
      imgSrc: "placeholder_robomax_2023",
    },
    {
      id: 2,
      name: "AUTOMAX 2.0",
      des: "AutoMax 2.0 our club's first past-pandemic event, include a two-day electronics and mechanics workshop and a robotics competition with 500+ students.",
      imgSrc: "placeholder_ai_workshop",
    },
    {
      id: 3,
      name: "MAKE-a-THON",
      des: "A challenge to transform theoretical knowledge into practical application. Students were tasked with identifying a real-world problem and developing a robotic solution.",
      imgSrc: "placeholder_hackathon",
    },
  ];

  // Container variant to handle the staggering of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each card's animation
      },
    },
  };

  // Individual card variant
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="py-16 md:py-24 overflow-hidden" id="pastevent">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header Section Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h1 className="text-center text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Past Events</span>
          </h1>
        </motion.div>

        {/* Event Cards Container with Stagger Effect */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row gap-24 md:gap-12 justify-center items-center md:items-stretch"
        >
          {events.map((eventItem, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }} // Extra interaction: lift slightly more on hover
              className="
                bg-gray-800/60 p-5 rounded-xl flex flex-col w-full max-w-sm 
                relative min-h-[400px] shadow-2xl backdrop-blur-sm 
                border border-indigo-500/30 transition-shadow duration-300 mt-20 md:mt-15
                hover:shadow-indigo-500/20 hover:border-indigo-400
              "
            >
              {/* Image/Visual Placeholder */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }} // Pops out slightly after the card appears
                className="
                  bg-white w-[85%] absolute h-[180px] rounded-lg 
                  flex items-center justify-center 
                  top-[-60px] left-1/2 transform -translate-x-1/2 
                  shadow-[10px_-10px_40px_10px_rgba(144,83,232,0.4)]
                  z-10
                "
              >
                <span className="text-gray-900 font-semibold text-lg">Image/Visual</span>
              </motion.div>

              {/* Text Content */}
              <div className="mt-[130px] text-white flex flex-col space-y-3">
                <h4 className="text-2xl font-bold text-indigo-400">{eventItem.name}</h4>
                <p className="p-2 text-gray-300 text-base leading-relaxed">{eventItem.des}</p>
                <a href={`/events/${eventItem.id}`} className="group text-sm text-purple-400 font-medium hover:text-purple-300 transition mt-2 inline-flex items-center">
                    View Gallery 
                    <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PastEvent;