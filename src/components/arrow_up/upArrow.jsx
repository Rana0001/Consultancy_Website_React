import React from "react";
import {AiOutlineArrowUp} from 'react-icons/ai';

const UpArrow = ()=>{
    

    return(
        <a href="/#home"><button title="Go To Top"
        class="fixed z-90 bottom-10 right-8 bg-[#289AE2] w-14 h-14 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-[#289AE2] hover:drop-shadow-2xl hover:animate-bounce duration-300"><AiOutlineArrowUp size={25}></AiOutlineArrowUp></button></a>  
    )
}

export default UpArrow;