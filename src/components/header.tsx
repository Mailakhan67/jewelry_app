'use client'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const handle=()=>{
    alert("Check out our exclusive jewelry collection!😊")
  }
  return (
    <div className="relative object-cover h-screen w-full bg-no-repeat bg-[url(/backgroundImage.png)] bg-center bg-cover">
      {/* Navbar */}
      <div className="mt-10 md:mt-20 px-4 md:px-[100px] w-full flex justify-between items-center absolute top-0">
        <h1 className="text-white font-bold text-2xl sm:text-3xl">MAJESTIC BLISS</h1>
        <RxHamburgerMenu
          size={35} // Smaller size for mobile
          className="text-white font-bold sm:h-[40px] md:size-50"
        />
      </div>

      {/* Main Title */}
      <div className="absolute z-10 mt-32 md:mt-[250px] top-20 left-4 sm:left-10 md:left-20 px-4 sm:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-mono leading-snug sm:leading-normal text-white font-bold">
          Golden Dreams:
          <br /> Majestic Bliss
          <br /> Signature Collection
        </h1>
      </div>

      {/* Button */}
      <div className="absolute bottom-10 right-4 sm:right-10 md:right-20">
        <button onClick={handle} className="w-40 sm:w-48 md:w-[260px] font-serif text-sm sm:text-base md:text-lg p-3 sm:p-4 border border-white text-white">
          SHOP ALL
        </button>
      </div>
    </div>
  );
};

export default Header;
