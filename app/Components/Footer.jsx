const Footer = () => {
  return (
    <>
      <div className="p-4 md:p-8 mt-16">
        <div className="text-white text-center text-2xl md:text-3xl font-bold mb-8 ">
          <h1>Contact Us</h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 md:p-8 flex flex-col gap-6">
            <form action="Submit" className="flex flex-col gap-4">
              
              <label htmlFor="name" className="text-gray-500">Name</label>
              <input 
              id = "name"
              name="name"
              type="text" 
              className="bg-white md:w-[500px] py-2 rounded-lg "
              
              />

              <label htmlFor="email" className="text-gray-500">E-mail</label>
              <input 
              id="email"
              name="email"
              type="text" 
              className="bg-white md:w-[500px] py-2 rounded-lg"
              
              />

              <label htmlFor="msg" className="text-gray-500">Message</label>
              <input 
              id="msg"
              name="msg"
              type="text" 
              className="bg-white md:w-[500px] py-2 h-[100px] rounded-lg"
              
              />
            </form>

            <button className="text-white bg-gray-600 px-6 py-3 w-[150px] rounded-xl">
              Submit
            </button>
          </div>

          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4949.647628288022!2d77.40377743392776!3d23.21474811354555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43accb2f81f9%3A0x603cfa000db72484!2sLRC%20MANIT!5e1!3m2!1sen!2sin!4v1764875929466!5m2!1sen!2sin"
              className="w-full h-[400px] rounded-xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
