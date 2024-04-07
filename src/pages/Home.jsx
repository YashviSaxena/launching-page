import React from "react";
import logo from "../assets/logosign.png";
import ns from "../assets/neo saturn.png";
import straight from "../assets/straight.svg";
import Phone from "../components/Phone";
import vector7575 from "../assets/Group 7575.svg";
import Wave from "../components/Wave.jsx";
import RadialBlur from "../components/RadialBlur.jsx";

const Home = () => {
  return (
    <div className="h-screen w-screen bg-[#03022A] px-48">
      <img
        src={straight}
        alt=""
        className="absolute left-8 md:left-16 h-[500px] mt-10"
      />
      <img
        src={vector7575}
        alt=""
        className="absolute lg:block hidden top-32 w-[700px] ml-16    -z-1"
      />
      <div className="flex justify-start items-center">
        <img src={logo} alt="" className="mt-10 h-12 " />
        <img src={ns} alt="" className="mt-12 h-8 ml-2" />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col z-20">
          <div className="mt-20 flex py-2 rounded-full w-[400px] items-center h-8  border border-cyan-500/50 backdrop-blur-lg bg-[#03022A] lg:mr-28 ">
            <p className="text-white text-center text-sm font-semibold border border-cyan-500/50 mr-4 py-[5px] text-[10px] bg-[#070952a4] px-5  rounded-full">
              New
            </p>
            <p className="text-gray-100 text-sm font-semibold">
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
              Redefining banking: Empowering everyone, everywhere with
              innovative financial solutions.
            </p>
            <div className="flex flex-col  justify-start">
              <input
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                className="mt-5 z-40 bg-blue-400/20 px-5 border-2 border-blue-500/10 backdrop-blur-lg outline-none text-sm text-white rounded-md h-10 w-[400px]"
              />

              <button class="mt-5 hover:shadow-4xl shadow-3xl border z-40 bg-[#03022A] text-lg font-semibold border-y-sky-500 border-r-cyan-400 border-l-indigo-500  w-[400px] rounded-tl-2xl rounded-br-2xl h-10 text-white relative overflow-hidden">
                Notify me
              </button>
            </div>
          </div>
        </div>

        <Phone />
        <img
          src={straight}
          alt=""

          className="absolute md:right-24 right-12 h-[500px] mt-10"
        />
         {/* <div className="radial-blurs lg:w-[170px] lg:h-[170px] bg-[#0c65ff] absolute top-[5%] left-[0%] blur-[100px] -z-1"></div>
       
      <div className="radial-blurs lg:w-[150px] lg:h-[150px] bg-[#0CF0FF] absolute top-[48%] left-[23%] blur-[130px] -z-1"></div>
       
      <div className="radial-blurs lg:w-[270px] lg:h-[270px] bg-[#ce0cff7c] absolute top-[30%] right-[20%] blur-[140px] -z-1"></div>

      <div className="radial-blurs lg:w-[200px] lg:h-[200px] bg-[#0c9aff] absolute bottom-[0%] right-[0%] blur-[100px] -z-1"></div>  */}
       
        
        <div className="absolute bottom-10 right-[180px] z-50">
          <Wave />
        </div>
      </div>
    </div>
  );
};

export default Home;
