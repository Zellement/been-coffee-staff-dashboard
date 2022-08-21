// src/pages/account.js
import React from "react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

const Auth0 = ({children, className}) => {
  return (
  <div className={className}>
    { children }
  </div>
 );
};

export default withAuthenticationRequired(Auth0)
// export default Auth0;
