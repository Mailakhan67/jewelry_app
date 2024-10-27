import Image from "next/image";

const Hero = () => {
  return (
    <div className="h-full">
      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center h-[70vh] md:h-screen mt-10 md:mt-0 px-4 md:px-16">
        <div className="flex flex-col md:flex-row mt-10 md:mt-20">
          <Image src={"/Rectangle1.png"} alt="Rectangle1" width={582} height={737} className="w-full md:w-auto" />
          <div className="mt-10 md:mt-[200px]">
            <Image src={"/Rectangle2.png"} alt="Rectangle2" width={400} height={310} className="ml-[-25px]" />
            <h1 className="text-center md:text-end mr-7 text-black text-2xl md:text-4xl font-bold font-serif mt-3">18k Chain Necklace</h1>
            <p className="text-center md:text-end text-lg md:text-2xl ml-0 md:ml-[303px] border-b border-gray-800 w-auto md:w-[140px]">From $45.00</p>
          </div>
          <div className="ml-0 md:ml-[100px] mt-10 md:mt-0">
            <Image src={"/Rectangle3.png"} alt="Rectangle3" width={400} height={300} className="ml-[-25px]" />
            <h1 className="mt-6 text-center md:text-start w-full md:w-[350px] mr-0 md:mr-[170px] text-black text-2xl md:text-4xl font-bold font-serif">Bond Bracelet</h1>
            <p className="text-center md:text-start text-lg md:text-2xl mr-0 md:mr-[303px] border-b border-gray-800 w-auto md:w-[140px]">From $32.00</p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-[80vh] md:h-screen flex flex-col md:flex-row items-center px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-[400px] mt-10 md:mt-[100px]">
          <div className='mt-3'>
            <h3 className="text-lg md:text-xl text-black">NEW COLLECTION</h3>
            <h1 className="font-bold font-serif text-2xl md:text-3xl leading-relaxed md:leading-normal tracking-wider mt-3 md:mt-[20px]">
              The luxury of gold <br /> with the elegance <br /> of precious stones
            </h1>
            <p className="tracking-wide text-black text-lg md:text-2xl mt-3">
              The timeless beauty of gold meets the captivating allure of precious stones. Each piece in this exquisite collection is a testament to superior craftsmanship and luxurious design.
            </p>
            <button className="mt-10 md:mt-14 w-[260px] md:w-[400px] font-serif text-lg md:text-2xl p-4 md:p-6 border-2 md:border-4 border-black text-black">EXPLORE COLLECTION</button>
          </div>
          <Image src={"/Rectangle4.png"} alt="Rectangle4" width={500} height={737} className="w-full md:w-auto mt-10 md:mt-0" />
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-[90vh] bg-[#151515] flex flex-col items-center mt-14">
        <h1 className="font-bold text-3xl md:text-6xl font-serif tracking-wider text-center text-white pt-10">Shop Best Sellers</h1>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 mt-10">
          {Array(4).fill(0).map((_, index) => (
            <div key={index} className="mt-10">
              <Image src={`/Rectangle${8 + index}.png`} alt={`Rectangle${8 + index}`} width={304} height={311} />
              <h1 className="text-white text-start text-xl md:text-2xl font-bold font-serif mt-3">18k Chain Necklace</h1>
              <p className="text-white text-start text-lg md:text-2xl border-b border-white w-[140px]">From $45.00</p>
            </div>
          ))}
        </div>
        <button className="w-[200px] md:w-[260px] h-[50px] md:h-[70px] mt-10 font-serif text-xl md:text-2xl border border-white text-white">SHOP ALL</button>
      </div>
    </div>
  );
};

export default Hero;
