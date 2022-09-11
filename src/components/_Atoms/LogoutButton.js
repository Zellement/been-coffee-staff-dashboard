import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
 const {
   isAuthenticated,
   logout, user
   } = useAuth0();

   return isAuthenticated && (
    <div className="flex flex-row items-center justify-between w-full gap-4">
      <span className="text-2xs">Hello, {user.name}</span>
     <button className="btn btn--2xs" onClick={() => {
     logout({ returnTo: window.location.origin });
    }}>Log out</button></div>
 );
};

export default LogoutButton;