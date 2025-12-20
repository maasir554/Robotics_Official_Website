import LiquidEther from "../../reactBitsComponents/LiquidEther"

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-[90vh] flex items-center bg-[#161831]">
      
      {/* 1. LIQUID ETHER BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50" 
        style={{ width: '100%', height: '100%' }}
      >
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* 2. Gradient Blobs for Depth (Optional, placed behind content) */}
      <div className="hidden md:block absolute top-[-5%] left-[-5%] w-96 h-96 rounded-full bg-indigo-600 opacity-20 blur-[120px] animate-pulse z-1"></div>
      <div className="hidden md:block absolute bottom-[-5%] right-[-5%] w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-[120px] animate-pulse delay-700 z-1"></div>

      {/* 3. Main Content Container */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 py-14 md:py-16">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 md:gap-8">
          
          {/* Text Content */}
          <div className="flex flex-col w-full md:w-1/2">
            <div className="flex flex-col text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-2 leading-tight">
                <span className="block text-white">WELCOME TO</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 md:whitespace-nowrap">
                  ROBOTICS CLUB
                </span>
              </h1>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white md:whitespace-nowrap -mt-4">
                  MANIT
              </h1>
              
              <p className="text-lg text-indigo-300 font-semibold mt-4 md:text-right tracking-wide">
                When innovation meets engineering
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative p-2 transition duration-500 hover:scale-105">
                  {/* Subtle glow behind the robot */}
                  <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full"></div>
                  <img 
                      src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" 
                      alt="Robotics Club Robot" 
                      className="relative w-full h-auto max-w-lg rounded-lg scale-x-[-1] drop-shadow-[0_20px_50px_rgba(79,70,229,0.3)]" 
                  />
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;