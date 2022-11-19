import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"
import { HiOutlineLogout} from "react-icons/hi"

function LogoutButton() {
  const { isAuthenticated, logout, user } = useAuth0()

  return (
    isAuthenticated && (
      <div className="flex flex-row items-center justify-end gap-4">
        <Link to="/me" className="text-2xs">
          Hello, {user.name}
        </Link>
        <button
          className="text-lg"
          onClick={() => {
            logout({ returnTo: window.location.origin })
          }}
        >
          <span className="sr-only">Log out</span>
          <HiOutlineLogout />
        </button>
      </div>
    )
  )
}

export default LogoutButton
