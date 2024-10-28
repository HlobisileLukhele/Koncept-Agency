import { useEffect, useRef } from 'react';
import BeadVodka from '../assets/svg/Bead-Vodka.png';
import BotGoods from '../assets/svg/BotGoods.png';
import darktest from '../assets/svg/darktest.png';
import Delta from '../assets/svg/Delta.png';
import Konceptillustration from '../assets/svg/Koncept-illustration.png';
import White from '../assets/svg/White.png';
import CFLogo from '../assets/svg/CF-Logo.png';


const CompaniesWorkedWith = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    const logos = logosRef.current;
    let scrollAmount = 0;

    const animationInterval = setInterval(() => {
      if (logos) {
        scrollAmount += 1; // Adjust this value for speed
        logos.scrollLeft = scrollAmount;
        if (scrollAmount >= logos.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll position to loop
        }
      }
    }, 20); // Speed of the slide

    return () => clearInterval(animationInterval);
  }, []);

  return (
    <>
    <h1 className="text-2xl font-bold text-black pb-4 flex justify-center">Companies Worked With</h1>
    <section id="companiesworkedwith" className="bg-gray-200 py-10">
      <div className="text-center pb-6">
      </div>
      <div className="w-full overflow-hidden relative">
        <div
          ref={logosRef}
          className="flex w-full items-center justify-center gap-8 overflow-hidden animate-slide"
        >
          {[BeadVodka, BotGoods, darktest, Delta, Konceptillustration, White, CFLogo].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Company logo ${index}`}
              className="h-16 md:h-20 object-contain grayscale transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          ))}
          {/* Repeat logos for continuous effect */}
          {[BeadVodka, BotGoods, darktest, Delta, Konceptillustration, White, CFLogo].map((logo, index) => (
            <img
              key={`repeat-${index}`}
              src={logo}
              alt={`Company logo repeat ${index}`}
              className="h-16 md:h-20 object-contain grayscale transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default CompaniesWorkedWith;
