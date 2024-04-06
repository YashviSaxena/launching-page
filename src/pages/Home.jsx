import React from "react";
import logo from "../assets/logosign.png";
import ns from "../assets/neo saturn.png";

import Phone from "../components/Phone";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#03022A] px-36">
      <div className="flex justify-start items-center">
        <img src={logo} alt="" className="mt-10" />
        <img src={ns} alt="" className="mt-12 " />
      </div>
      <div className="flex justify-between items-center">

      <div className="flex flex-col z-20">
        <div className="mt-20 flex py-2 rounded-full w-[400px] items-center h-6  border-2 border-blue-500/30 backdrop-blur-lg bg-[#072280] lg:mr-28 ">
          <p className="text-white text-center text-xs mr-8 py-[1px] text-[10px] bg-[#070A52] px-5  rounded-full">
            New
          </p>
          <p className="text-white text-xs ">
            Neo Saturn Mobile Application is coming soon
          </p>
        </div>
        <div className="mt-8">
          <h1 className="text-white text-3xl font-semibold w-[425px]">
            Disrupting the way Banking
            <br />
            works, one segment at a time.
          </h1>
          <p className="mt-5 text-white text-sm w-[400px]">
            Redefining banking: Empowering everyone, everywhere with innovative
            financial solutions.
          </p>
          <div className="flex flex-col  justify-start">
            <input
              type="tel"
              placeholder="Enter phone number"
              className="mt-5 bg-blue-400/20 px-5 border-2 border-blue-500/30 backdrop-blur-lg outline-none text-sm text-white rounded-md h-10 w-[400px]"
            />
             
            <button class="mt-5 hover:shadow-xl border border-y-sky-500 border-r-cyan-400 border-l-indigo-500 bg-transparent w-[400px] rounded-tl-2xl rounded-br-2xl h-10 text-white relative overflow-hidden">
              Notify me
            </button>
          </div>
        </div>
      </div>
   
      <Phone/>
      <div className="lg:w-[170px] lg:h-[170px] bg-[#0c65ff] absolute top-[5%] left-[0%] blur-[100px] -z-1"></div>
       
      <div className="lg:w-[150px] lg:h-[150px] bg-[#0CF0FF] absolute top-[38%] left-[18%] blur-[130px] -z-1"></div>
       
      <div className="lg:w-[270px] lg:h-[270px] bg-[#ce0cff] absolute top-[40%] right-[10%] blur-[130px] -z-1"></div>

      <div className="lg:w-[200px] lg:h-[200px] bg-[#0c9aff] absolute bottom-[0%] right-[0%] blur-[100px] -z-1"></div>
       
      </div>

    </div>
  );
};

export default Home;
