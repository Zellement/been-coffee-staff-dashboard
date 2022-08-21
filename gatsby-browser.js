import React from "react"
import Layout from "./src/components/_Layout"
import "./src/styles/main.css"
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';

const transitionDelay = 350

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}


const onRedirectCallback = (appState) => {
  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || '/', { replace: true });
 };
 
 export const wrapRootElement = ({ element }) => {
  return (
   <Auth0Provider
    domain={'been-coffee.eu.auth0.com'}
    clientId={'OGRk7q4YMGjrdg2hXD88y7uWHdvHEoj4'}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    >
     {element}
  </Auth0Provider>
  );
 };