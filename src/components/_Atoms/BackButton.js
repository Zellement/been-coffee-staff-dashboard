import React from "react";
import { navigate } from "gatsby";
import { FaAngleDoubleLeft } from "react-icons/fa"

export default function BackButton(){
    return (
      <button className="flex flex-row items-center gap-2 transition duration-300  text-2xs opacity-70 group hover:opacity-100 hover:underline" onClick={() => navigate(-1)}>
        <FaAngleDoubleLeft className="w-4 group-hover:opacity-100" /> Go Back 
      </button>
    );
};