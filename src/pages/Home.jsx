// import React from "react";
// import logo from '../assets/logosign.png'
// import ns from '../assets/neo saturn.png'

// const Home = () => {
//   return (
//     <div className="h-screen w-screen bg-[#03022A] overflow-hidden flex flex-col relative">
//         <div className="flex justify-between px-24 mt-5 ">
//             <h1 className="text-white text-sm">The Thinker.</h1>
//             <h1 className="text-white text-sm">The Innovator.</h1>
//             <h1 className="text-white text-sm">The Disruptor.</h1>
//         </div>
//         <div className="flex justify-center mt-16 items-center mb-20">
//             <img src={logo} alt=""  className="h-10"/>
//             <img src={ns} alt=""  className="h-5"/>
//         </div>
//         <div className="flex items-center justify-center">
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">C</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">O</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">M</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">I</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">N</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">G</h1>
//         &nbsp;&nbsp;
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">S</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">O</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">O</h1>
//         <h1 className="font-semibold text-white text-8xl text-center mb-24 z-10 tracking-widest">N</h1>
//         </div>
    
//       <div className="flex flex-col items-center justify-center">
//       7<div className="bg-[#0CF0FF] h-[1500px] w-[1500px] absolute blur-[1000px] -bottom-[170%]  rounded-full "></div>
//       <div className="bg-[#2ea3ab] h-[1500px] w-[1500px] z-20 absolute -bottom-[180%]  rounded-full "></div>
//       </div>
     
//       <div className="flex justify-between items-center px-36 mt-36">
//       <div className="flex z-30 justify-center items-center">
//         <div className="bg-[#03022A] h-6 w-1 mr-1"></div> 
//         <h1 className="text-white font-md ">Loan</h1>
//       </div>
//       <div className="flex z-30 justify-center items-center">
//         <div className="bg-[#03022A] h-6 w-1 mr-1"></div>
//         <h1 className="text-white font-md">Investment</h1>
//       </div>
//       <div className="flex z-30 justify-center items-center">
//         <div className="bg-[#03022A] h-6 w-1 mr-1"></div>
//         <h1 className="text-white font-md">Digital Banking</h1>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react'
import logo from '../assets/logosign.png'
import ns from '../assets/neo saturn.png'


const Home = () => {
  return (
    <div className='bg-[#03022A] h-screen w-screen'>
        <div className='flex justify-start px-32 mt- items-center'>
           <img src={logo} alt="" className='mr-2 mt-10'/>
           <img src={ns} alt="" className='mt-12'/>
        </div>
    </div>
  )
}

export default Home
