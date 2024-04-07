import React from 'react';
import PlayButton from './PlayButton';
import AnimatedTextWord from './AnimatedTextWord';


const Phone = () => {


    // Function to toggle between showing loader and non-loader divs
  
  

  return (
    <div className='relative z-30 shadow-5xl rounded-3xl '>
         <div className="h-[530px] w-[280px] bg-gradient-to-b from-blue-700 to-[#03022A] relative rounded-2xl border-black border-8">
          {/* <h1 className='text-3xl coming-soon text-white font-semibold text-center mt-5 font'>Coming Soon</h1> */}
          <AnimatedTextWord text="Coming Soon" className="text-3xl font-semibold text-white" />
           <div className='px-8 mt-20'>
             <h1 className='text-white text-2xl font-semibold'>The Thinker.</h1>
             <h1 className='text-white text-2xl font-semibold'>The Innovator.</h1>
             <h1 className='text-white text-2xl font-semibold'>The Disruptor..</h1>
             <p className='mt-3 text-sm text-cyan-400'>We are changing how Banking has been working.</p>
             <h1 className='mt-10 text-lg text-cyan-400'>Want to know how?</h1>
             <div className='z-20 mt-1 cursor-pointer'>
             <PlayButton />
             <div className='bg-cyan-400  h-7 w-7 rounded-full left-[100px] bottom-[132px] absolute blur-md -z-1' ></div>
             </div>
         
            </div>

            <div className='cursor-pointer absolute right-[20%] bottom-[10%]'>
           
            </div>
         </div>
    </div>
  )
}

export default Phone