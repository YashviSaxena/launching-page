import React, { useState, useRef } from "react";
import logo from "../assets/ns-logo.png";
import ns from "../assets/ns-text.png";
import straight from "../assets/straight.svg";
import playCircle from "../assets/playcircle.svg";
import Phone from "../components/Phone";
import vector7575 from "../assets/Group 7575.svg";
import { MdCancel } from "react-icons/md";

const Homee = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const phoneRef = useRef(null);

  const handleNotifyClick = () => {
    if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
      console.log("Phone number is valid:", phoneNumber);
      setSubmissionSuccess(true);
      setPhoneNumber("");
      setErrorMessage("");

      // Automatically hide the success message after 3 seconds
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 3000);
    } else {
      setErrorMessage("Phone number is inappropriate.");
    }
  };

  const handleCross = () => {
    setSubmissionSuccess(false);
  };

  const scrollToPhone = () => {
    phoneRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:h-screen overflow-hidden w-screen bg-[#03022A]">
      <div>
        <img
          src={straight}
          alt=""
          className="absolute left-5 md:left-16 lg:top-10 top-48 h-[500px] "
        />
        <img
          src={vector7575}
          alt=""
          className="absolute lg:block hidden top-36 w-[700px] ml-24 -z-1"
        />

        <div className="flex justify-start items-center px-20">
          <img src={logo} alt="" className="mt-10 mr-2 md:h-10 h-6" />
          <img src={ns} alt="" className="mt-12 md:h-6 h-3" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between items-center lg:px-40 px-28">
        <div className="flex justify-center items-center flex-col z-20">
          <div className="lg:mt-10 mt-28 flex py-2 rounded-full sm:w-[400px] w-[342px] items-center sm:h-8 h-7  border border-cyan-500/50 backdrop-blur-lg bg-[#03022A] ">
            <p className="text-white text-center text-xs sm:text-sm font-semibold border border-cyan-500/50 mr-4 py-[5px] text-[10px] bg-[#070952a4] px-5  rounded-full">
              New
            </p>
            <p className="text-gray-100 sm:text-sm text-xs font-semibold">
              Neo Saturn Mobile Application is coming soon
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <h1 className="text-white flex justify-center items-center sm:text-3xl text-2xl font-semibold sm:w-[425px] w-[360px]">
              Disrupting the way Banking
              <br />
              works, one segment at a time.
            </h1>
            <p className="mt-5 text-white ml-5 sm:ml-0 text-sm sm:w-[400px] w-[330px] ">
              Redefining banking: Empowering everyone, everywhere with
              innovative financial solutions.
            </p>
            <div className="flex flex-col justify-start">
              <input
                type="tel"
                placeholder="Enter phone number"
                name="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="mt-5 z-40 bg-blue-400/20 px-5 mx-auto focus:ring-1 focus:ring-blue-500 border-2 border-blue-500/10 backdrop-blur-lg outline-none text-sm text-white rounded-md h-10 sm:w-[400px] w-[320px]"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
              <button
                onClick={handleNotifyClick}
                className="mt-5 hover:shadow-4xl transition-all ease-in-out duration-300 shadow-3xl hover:ring-3 z-4 bg-[#323BFF] hover:bg-[#326BFF]  font-semibold   sm:w-[400px] w-[320px] rounded-tl-2xl  rounded-br-2xl h-10 text-white relative overflow-hidden focus:ring-2 outline-none focus:ring-[#468abd]"
              >
                Notify me
              </button>
            </div>
          </div>
        </div>

        <div className=" lg:mt-0 lg:pb-0 pb-20 mt-48" ref={phoneRef}>
          <Phone />
          <img
            src={straight}
            alt=""
            className="absolute right-5 md:right-12 lg:top-10 top-48 h-[500px] "
          />
        </div>
        <div className="flex flex-col justify-start absolute sm:top-5 top-20 right-5">
          {submissionSuccess && (
            <div className="flex justify-center z-50 transition-all duration-300 ease-in-out  items-center px-2 py-1 rounded-md bg-green-500 text-white">
              <p className=" px-2 py-1 rounded">Submitted successfully</p>
              <MdCancel
                className="text-white mt-1 z-50 cursor-pointer"
                onClick={handleCross}
              />
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          src={playCircle}
          alt=""
          onClick={scrollToPhone}
          className="cursor-pointer h-10 fixed z-50 right-5 bottom-3"
        />
      </div>
    </div>
  );
};

export default Homee;
