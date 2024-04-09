import React, { useState, useEffect } from 'react';
import PlayButton from './PlayButton';
import AnimatedTextWord from './AnimatedTextWord';
import '../App.css'; // Import CSS file for styling
import music from '../assets/mp3.mp3';
import playCircle from "../assets/playcircle.svg";



const Phone = () => {
  const [toggle, setToggle] = useState(true);
  const [audio] = useState(new Audio(music));

  const toggleState = () => {
    setToggle(!toggle);
    if (!toggle) {
      audio.play(); // Start playing the audio when toggle is true
    } else {
      audio.pause(); // Pause the audio when toggle is false
      audio.currentTime = 0; // Reset the audio playback position
    }
  };

  useEffect(() => {
    // Start playing the audio when the component mounts
    audio.play();

    // Replay the audio when it ends, only if toggle is true
    const handleAudioEnded = () => {
      if (toggle) {
        audio.play();
      }
    };

    // Listen for the 'ended' event of the audio element
    audio.addEventListener('ended', handleAudioEnded);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      audio.removeEventListener('ended', handleAudioEnded);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []); // Run the effect only once when the component mounts

  return (
    <div className='relative z-30  shadow-5xl rounded-3xl'>
      <div className="h-[500px] w-[280px] bg-gradient-to-b from-blue-700 to-[#03022A] relative rounded-2xl border-black border-8">
        {/* <AnimatedTextWord text="Coming Soon" className="text-3xl font-semibold text-white" /> */}
        <h1 class="text-hsl-gray text-4xl mt-8 text-center font-black  tracking-wide cursor-pointer  bg-gradient-to-r from-hsl-gray-30 via-white to-hsl-gray-30 bg-clip-text text-transparent animate-shine">
  Coming Soon
</h1>

        <div className='px-8 mt-20'>
          <h1 className='text-white text-2xl font-semibold'>The Thinker.</h1>
          <h1 className='text-white text-2xl font-semibold'>The Innovator.</h1>
          <h1 className='text-white text-2xl font-semibold'>The Disruptor..</h1>
          <p className='mt-3 text-sm text-cyan-400'>We are changing how Banking has been working.</p>
          <h1 className='mt-10 text-lg text-cyan-400'>Want to know how?</h1>
          <div className='z-20 mt-1 cursor-pointer'>
            <PlayButton />
            <div className='bg-cyan-400 h-7 w-7 rounded-full left-[100px] bottom-20  absolute blur-md -z-1'></div>
          </div>
        </div>

         <div >
           <img src={playCircle} alt="" className="h-8 pointer sm:h-16 fixed  right-10 bottom-3"/>
         </div>
        
        <div className='cursor-pointer absolute -right-[12%] -bottom-[2%]' onClick={toggleState}>
          <div className='flex justify-center items-center bg-white w-14 h-14 rounded-full'>
            {toggle ? (
              <>
                <div className='mr-1 line'></div>
                <div className='mr-1 line'></div>
                <div className='mr-1 line'></div>
                <div className='mr-1 line'></div>
                <div className='line'></div>
              </>
            ) : (
              <div className='bg-blue-700 w-[60%] h-[3px]'></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
