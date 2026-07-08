import React from "react";

const HeroDark = () => {

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div id="home" className="w-full pt-40 md:pt-64 pb-24 bg-[#2C2E2F] ">
      <div className="container">
        <div className="w-full px-4 text-center">
          <h1 className="mb-5 text-6xl font-bold text-white font-circular  md:leading-[1.25] ">
            We Build Software <br></br>That Inspires
          </h1>
          <p className="mb-12 text-base font-regular text-white text-opacity-70 font-circular">
                We specialize in crafting tailored software solutions to empower businesses of all sizes.
                <br></br>
                  &nbsp; Our team collaborate closely and deliver cutting-edge software that drives growth and efficiency.
                
              </p> 
              <div className='flex justify-center gap-5'>
                <button  onClick={scrollToContact}  className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white font-circular">
                Book a call now
                </button>
                {/* <a href="/templates" className="px-8 py-3 rounded-[100px] bg-white text-gray-900 border border-gray-200 font-circular">
                 Free templates
                </a> */}
              </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDark;
