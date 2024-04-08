import React from "react";
import logo from "../assets/ns-logo.png";
import ns from "../assets/ns-text.png";
import straight from "../assets/straight.svg";
import Phone from "../components/Phone";
import vector7575 from "../assets/Group 7575.svg";

const Home = () => {
  return (
    <div className="lg:h-screen  w-screen bg-[#03022A] xl:px-48 lg:px-32 px-20">
      <img
        src={straight}
        alt=""
        className="absolute left-8 md:left-16 h-[500px] mt-10"
      />
      <img
        src={vector7575}
        alt=""
        className="absolute lg:block hidden top-32 w-[700px] ml-16 -z-1"
      />

      <div className="flex justify-start items-center">
        <img src={logo} alt="" className="mt-10 md:h-12 h-8 " />
        <img src={ns} alt="" className="mt-12 md:h-8 ml-2 h-5" />
      </div>

 
        {/*main-code below */}


      <div className="flex lg:flex-row flex-col justify-center lg:justify-between items-center">
        <div className="flex justify-center items-center flex-col z-20">

          <div className="mt-20 flex py-2 rounded-full sm:w-[400px] w-[350px] items-center sm:h-8 h-7  border border-cyan-500/50 backdrop-blur-lg bg-[#03022A] ">
            <p className="text-white text-center text-xs sm:text-sm font-semibold border border-cyan-500/50 mr-4 py-[5px] text-[10px] bg-[#070952a4] px-5  rounded-full">
              New
            </p>
            <p className="text-gray-100 sm:text-sm text-xs font-semibold">
              Neo Saturn Mobile Application is coming soon
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="text-white flex justify-center items-center sm:text-3xl text-2xl font-semibold w-[425px]">
              Disrupting the way Banking
              <br />
              works, one segment at a time.
            </h1>
            <p className="mt-5 text-white text-sm sm:w-[400px] w-[340px]">
              Redefining banking: Empowering everyone, everywhere with
              innovative financial solutions.
            </p>
            <div className="flex flex-col justify-start">
              <input
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                className="mt-5 z-40 bg-blue-400/20 px-5 focus:ring-1 focus:ring-blue-500 border-2 border-blue-500/10 backdrop-blur-lg outline-none text-sm text-white rounded-md h-10 sm:w-[400px] w-[350px]"
              />
<button class="mt-5 hover:shadow-4xl transition-all ease-in-out duration-300 shadow-3xl hover:ring-3 z-4 bg-[#323BFF] hover:bg-[#326BFF]  font-semibold   sm:w-[400px] w-[350px] rounded-tl-2xl  rounded-br-2xl h-10 text-white relative overflow-hidden focus:ring-2 outline-none focus:ring-[#468abd]">
    Notify me
</button>

            </div>
          </div>
          <img
          src={straight}
          alt=""

          className="absolute md:right-24 sm:right-12 right-8 h-[500px] bottom-10"
        />
        </div>
        
        <div className="lg:mt-0 mt-20">
        <Phone />
        </div>
      
         {/* <div className="radial-blurs lg:w-[170px] lg:h-[170px] bg-[#0c65ff] absolute top-[5%] left-[0%] blur-[100px] -z-1"></div>
       
      <div className="radial-blurs lg:w-[150px] lg:h-[150px] bg-[#0CF0FF] absolute top-[48%] left-[23%] blur-[130px] -z-1"></div>
       
      <div className="radial-blurs lg:w-[270px] lg:h-[270px] bg-[#ce0cff7c] absolute top-[30%] right-[20%] blur-[140px] -z-1"></div>

      <div className="radial-blurs lg:w-[200px] lg:h-[200px] bg-[#0c9aff] absolute bottom-[0%] right-[0%] blur-[100px] -z-1"></div>  */}
       
        
        
      </div>
    </div>
  );
};

export default Home;
