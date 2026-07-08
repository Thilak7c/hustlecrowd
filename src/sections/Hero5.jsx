// Hero5.jsx
import { Search } from 'lucide-react'; // Assuming you use lucide-react for icons

const Hero5 = ({ headerTitle, headerSubtitle, searchTerm, onSearchChange }) => {
  return (
    <div className="relative" id="home">
      <div id="home" className="w-full md:pb-1 pb-1 pt-32 md:pt-44 bg-[#2C2E2F]">
        <div className="container px-4">
          <div className="w-full text-center">
            <h1 className="text-white text-4xl md:text-6xl font-circularBold mb-5">
              {headerTitle}
            </h1>
            <p className="mb-12 text-lg font-regular text-gray-500 font-circular max-w-2xl mx-auto">
             {headerSubtitle}
            </p>

            {/* --- Search Bar in the Center --- */}
            <div className="flex justify-center mb-12">
              <div className="relative w-full max-w-lg">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search prompts (e.g., 'cyberpunk city')"
                  className="w-full py-3 pl-12 pr-4 text-base text-gray-700 bg-white border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8800ff] focus:border-transparent transition duration-150"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero5;