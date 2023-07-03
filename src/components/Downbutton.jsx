import React from 'react';
import resume from "../assets/fullstackresume1.pdf";

const Downbutton = () => {
    return (
        <>
            <div className="flex items-center justify-center w-64 h-16 mx-auto b animate-bounce">
   
     <a href={resume} download ="Resume" className="absolute items-center w-64 h-16 overflow-hidden transition duration-300 ease-out transform shadow-2xl cursor-pointer i bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl hover:scale-x-110 hover:scale-y-105">

      <div  className="mt-5 font-bold text-center text-white">Download Resume</div> </a>
    </div>
        </>
    );
};

export default Downbutton;