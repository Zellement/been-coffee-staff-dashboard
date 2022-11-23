import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function TextBlock({ data }) {
  const { text } = data || {};

  return (
    <div className="container overflow-x-auto container--md content">
            <div
              className="w-full content"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div></div>
  );
}

export default TextBlock;