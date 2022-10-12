import React, { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import Button from "../../_Atoms/Button"
import { RiMoneyPoundCircleFill, RiHomeSmileFill } from "react-icons/ri"
import { BiChevronDown } from "react-icons/bi"
import { FaCashRegister } from "react-icons/fa"
import { GoGlobe } from "react-icons/go"

export default function Footer() {
  const { isAuthenticated, user } = useAuth0()
  const [quickLinksActive, setQuickLinksActive] = useState(false)

  return (
    isAuthenticated && (
      <div
        className={`fixed bottom-0 left-0 w-full bg-white border-t border-opacity-25 transition-all duration-300 border-navy-100 ${
          quickLinksActive ? `translate-y-0 lg:translate-y-full` : `translate-y-full lg:translate-y-0`
        }`}
      >
        <div className="relative flex flex-row justify-end gap-4 p-4">
          <button
            onClick={() => setQuickLinksActive(!quickLinksActive)}
            className="absolute flex flex-row items-center px-4 py-1 tracking-widest uppercase bg-white border-t border-l border-r border-opacity-25 bottom-full border-navy-100"
          >
            Quick menu{" "}
            <BiChevronDown
              className={` ${
                quickLinksActive ? "rotate-180" : ""
              } transitiom-all duration-300`}
            />
          </button>
          <Button className="flex flex-row items-center gap-1" url="/">
            <span className="sr-only">Home</span> <RiHomeSmileFill />
          </Button>
          <Button
            className="flex flex-row items-center gap-1"
            external
            url="https://www.been.coffee"
          >
            <span className="sr-only">Website</span> <GoGlobe />
          </Button>

          {user.payslipUrl ? (
            <Button
              className="flex flex-row items-center gap-1"
              external
              url={user.payslipUrl}
            >
              My Payslips <RiMoneyPoundCircleFill />
            </Button>
          ) : null}

          {user.tillPin ? (
            <span className="flex flex-row items-center gap-2 ">
              <span className="flex flex-col items-end">
                <span className="leading-none opacity-50 text-[10px]">Till PIN</span>
                <span className="font-mono leading-none">{user.tillPin}</span>
              </span>
               <FaCashRegister />
            </span>
          ) : null}
        </div>
      </div>
    )
  )
}
