import React from "react";
import { navigate } from "gatsby";
import { FaAngleDoubleLeft } from "react-icons/fa"

export default function BackButton(){
    return (
      <button class=" text-2xs flex flex-row transition duration-300 opacity-70 group hover:opacity-100 items-center gap-2 hover:underline" onClick={() => navigate(-1)}>
        <FaAngleDoubleLeft className="w-4 group-hover:opacity-100" /> Go Back 
      </button>
    );
};