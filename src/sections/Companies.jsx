import { Marquee } from "@/components/magicui/Marquee";

const LOGOS = [
  "/images/clients/client-01.png",
  "/images/clients/client-02.png",
  "/images/clients/client-03.png",
  "/images/clients/client-04.png",
  "/images/clients/client-05.png",
];

const CompanyCard = ({ logo }) => (
  <div className="flex-shrink-0 w-[200px] md:w-[250px] flex items-center justify-center py-4 px-2">
    <img
      className="w-full h-[60px] md:h-[50px] object-contain grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
      src={logo}
      alt="Company logo"
    />
  </div>
);

const Companies = () => {
  return (
    <div className="relative bg-dark pb-12 md:py-16 overflow-hidden">
      <div className="max-w-[850px] mx-auto px-4">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {LOGOS.map((logo, index) => (
              <CompanyCard key={index} logo={logo} />
            ))}
          </Marquee>
          
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#2c2e2f]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#2c2e2f]"></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
