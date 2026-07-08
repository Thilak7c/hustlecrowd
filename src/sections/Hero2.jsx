// Hero2.jsx

const Hero2 = () => {
  return (
    <div class="relative" id="home">
        <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
            <div class="blur-[106px] h-56 bg-gradient-to-br from-[#9333EA] to-purple-400 dark:from-blue-700"></div>
            <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div id="home" className="w-full pb-24 bg-[#f9f9f9] ">
          <div className="container">
            <div className="w-full px-4 md:pt-40 md:pt-64 pt-40 text-center">
              <h1 className="text-gray-700 text-3xl md:text-6xl md:leading-[1.5] font-bold font-circular mb-5">
                {/* We Build Software <br></br>That Inspires */}
                Supercharge <span className="inline-block sm:w-16 w-8  sm:ml-[-15px] ml-[-10px] ">⚡</span> Your Business<br></br>With No-code Tools

              </h1>
              <p className="mb-12 text-base font-regular text-gray-500 font-circular">
                We specialize in crafting tailored software solutions to empower businesses of all sizes.
                <span className='md:inline  hidden'  >
                  &nbsp; Our team of skilled developers, designers,<br></br>and strategists collaborate closely and deliver cutting-edge software that drives growth and efficiency.
                </span>
              </p> 
              <div className='flex justify-center gap-5'>
                <button className="px-8 py-3 rounded-[100px] bg-[#8800ff] text-white font-circular">
                  Free templates
                </button>
                <button className="px-8 py-3 rounded-[100px] bg-white text-gray-900 border border-gray-200 font-circular">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero2