import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import AllPages from "./AllPages";

export default function Search() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className="fixed inset-0 bg-navy-500 z-[1000] p-8 flex flex-col items-center gap-8">

      <input 
          onChange={inputHandler} className="p-4 text-black" placeholder="Search..." label="Search"></input>
      <AllPages props={inputText} />
    </div>
  )
}
