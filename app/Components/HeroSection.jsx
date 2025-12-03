const HeroSection = () => {
  return (
    <>
      <div className="justify-between md:flex  p-5">
        <div className="flex flex-col justify-center ">
          {/* circle */}
          <div class="hidden md:block w-50 h-50 rounded-full bg-[linear-gradient(to_right,black_0%,black_50%,#263ABE_50%,#CAB3FF_75%,#AF68DA_100%)] blur-2xl absolute left-[-105] top-18"></div>


          <div className="z-20 flex flex-col  items-center md:items-start  md:p-12 ">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white md:p-2">WELCOME TO </h1>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white md:p-2">ROBOTICS CLUB MANIT</h1>
            <p className="text-white items-end p-2">When innovation meets engineering </p>
          </div>
        </div>

        {/* photosection */}
        <div className="p-12">
            <img src="https://res.cloudinary.com/dmg4pfrkg/image/upload/v1764771486/3ed4a00b22d66e2a32b349fb07011802197b52e8_dcg2ow.png" alt="roboimg" className=" transform scale-x-[-1] scale-120" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
