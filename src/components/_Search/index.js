import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import AllPages from "./AllPages";
import { AiFillCloseCircle } from "react-icons/ai"

export default function Search({showModal, setShowModal}) {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div className={`fixed transition duration-300 ease-in-out inset-0 bg-navy-500 z-[1000] p-8 flex h-screen lg:gap-16 lg:flex-row flex-col items-start gap-8 ${showModal ? 'translate-y-0' : '-translate-y-full'}`}>

      <button onClick={() => setShowModal(false)} className="fixed top-0 right-0 mt-4 mr-4 transition-colors duration-300 hover:lg:text-butterscotch-500"><AiFillCloseCircle className="text-2xl" /></button>

      <div className="flex lg:h-full lg:flex-1 lg:place-content-center"><input onChange={inputHandler} className="w-full p-4 text-black max-w-screen-xs lg:my-auto" placeholder="Search page title..." label="Search"></input></div>
      <AllPages setShowModal={setShowModal} input={inputText} />
    </div>
  )
}
