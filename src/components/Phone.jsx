import React from 'react'
import Wave from '../components/Wave'
import PlayButton from './PlayButton';

const Phone = () => {
  return (
    <div className='relative z-30'>
         <div className="h-[500px] w-[280px] bg-gradient-to-b from-blue-800 to-[#03022A] relative rounded-2xl border-black border-8">
          <h1 className='text-2xl text-white text-center mt-5'>Coming Soon</h1>
           <div className='px-8 mt-20'>
             <h1 className='text-white text-2xl font-semibold'>The Thinker.</h1>
             <h1 className='text-white text-2xl font-semibold'>The Innovator.</h1>
             <h1 className='text-white text-2xl font-semibold'>The Disruptor..</h1>
             <p className='mt-3 text-sm text-cyan-400'>We are changing how Banking has been working.</p>
             <h1 className='mt-10 text-lg text-cyan-400'>Want to know how?</h1>
             <div className='z-20 cursor-pointer'>
             <PlayButton />
             <div className='bg-cyan-400  h-8 w-8 rounded-full left-[100px] bottom-[100px] absolute blur-md -z-1' ></div>
             </div>
         
            </div>
           
         </div>
    </div>
  )
}

export default Phone