import React from 'react';
import { FaPlayCircle } from "react-icons/fa";


function PlayButton() {
  return (
    <div className='flex items-center'>
      <h1 className='text-white text-lg underline font-semibold inline mr-2'>Watch it</h1>
      <FaPlayCircle className="text-white mt-1 z-40 cursor-pointer drop-shadow-lg shadow-cyan-400 "/>
    </div>
  );
}

export default PlayButton;
