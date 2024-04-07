import React, { useState } from 'react';
import PlayButton from './PlayButton';
import AnimatedTextWord from './AnimatedTextWord';
import '../App.css'; // Import CSS file for styling

const Phone = () => {
  const [toggle, setToggle] = useState(true);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className='relative z-30 shadow-5xl rounded-3xl'>
      <div className="h-[530px] w-[280px] bg-gradient-to-b from-blue-700 to-[#03022A] relative rounded-2xl border-black border-8">
        <AnimatedTextWord text="Coming Soon" className="text-3xl font-semibold text-white" />
        <div className='px-8 mt-20'>
          <h1 className='text-white text-2xl font-semibold'>The Thinker.</h1>
          <h1 className='text-white text-2xl font-semibold'>The Innovator.</h1>
          <h1 className='text-white text-2xl font-semibold'>The Disruptor..</h1>
          <p className='mt-3 text-sm text-cyan-400'>We are changing how Banking has been working.</p>
          <h1 className='mt-10 text-lg text-cyan-400'>Want to know how?</h1>
          <div className='z-20 mt-1 cursor-pointer'>
            <PlayButton />
            <div className='bg-cyan-400 h-7 w-7 rounded-full left-[100px] bottom-[132px] absolute blur-md -z-1'></div>
          </div>
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
