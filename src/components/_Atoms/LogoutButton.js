import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
 const {
   isAuthenticated,
   logout, user
   } = useAuth0();

   return isAuthenticated && (
    <div className="flex flex-col items-end">
      <span className="text-2xs">Hello, {user.email}</span>
     <button className="btn" onClick={() => {
     logout({ returnTo: window.location.origin });
    }}>Log out</button></div>
 );
};

export default LogoutButton;