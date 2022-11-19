import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import AllPages from "./AllPages"
import { AiFillCloseCircle } from "react-icons/ai"

export default function Search({ showModal, setShowModal }) {
  const [inputText, setInputText] = useState("")

  const handleChange = event => {
    setInputText(event.target.value.toLowerCase());
  };

  return (
    <div
      className={`fixed transition duration-300 ease-in-out inset-0 bg-navy-500 z-[1000] p-8 flex h-screen lg:gap-16 lg:flex-row flex-col items-start gap-8 ${
        showModal ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <button
        onClick={() => setShowModal(false)}
        className="fixed top-0 right-0 mt-4 mr-4 transition-colors duration-300 hover:lg:text-butterscotch-500"
      >
        <AiFillCloseCircle className="text-2xl" />
      </button>

      <div className="flex items-center lg:h-full lg:flex-1 lg:place-content-center">
        <input
          onChange={handleChange}
          value={inputText}
          className="w-full p-4 text-black rounded-full max-w-screen-xs lg:my-auto focus:outline-none"
          placeholder="Search page title..."
          label="Search"
        ></input>
          <button onClick={() => setInputText('')} className={`flex flex-row items-center gap-1 p-1 -ml-12 rounded-full transition-all duration-300 bg-navy-500 hover:text-butterscotch-500 ${ inputText === '' ? 'translate-x-1/2 opacity-0' : 'translate-x-0 opacity-100'}`}>
            <AiFillCloseCircle className="text-sm" />{" "}
            <span className="text-mono text-[10px] uppercase">Clear</span>
          </button>
      </div>
      <AllPages setShowModal={setShowModal} input={inputText} />
    </div>
  )
}
