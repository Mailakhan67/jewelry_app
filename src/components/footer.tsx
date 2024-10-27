import { CiLinkedin, CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#000000] p-6 mt-14">
      <h1 className="font-bold font-serif tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center pt-10 text-white">
        Looking for a personalized piece?
      </h1>
      <p className="tracking-widest font-sans text-base sm:text-lg md:text-xl text-white text-center mt-5 px-4">
        We can help you with that! Our highly qualified team of jewelry
        designers is ready to help you create that piece you've always
        dreamed of, with your face and personality. Click the button below
        and request a quote.
      </p>
      
      <div className="flex justify-center mt-6">
        <button className="w-[200px] sm:w-[240px] md:w-[260px] font-serif text-base sm:text-lg md:text-xl p-4 sm:p-6 border border-white text-white">
          GET IN TOUCH
        </button>
      </div>
      
      <div className="border-t-2 border-white w-4/5 sm:w-3/5 lg:w-[1210px] mx-auto mt-10" />

      <div className="flex flex-col md:flex-row items-center justify-between px-4 mt-8">
        <h1 className="font-serif text-lg sm:text-xl md:text-2xl text-white text-center md:text-left">
          MAJESTIC BLISS
        </h1>
        
        <div className="flex gap-3 mt-4 md:mt-0 justify-center md:justify-start">
          <CiLinkedin className="text-2xl sm:text-3xl" color="white" />
          <CiFacebook className="text-2xl sm:text-3xl" color="white" />
          <CiInstagram className="text-2xl sm:text-3xl" color="white" />
          <CiYoutube className="text-2xl sm:text-3xl" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
