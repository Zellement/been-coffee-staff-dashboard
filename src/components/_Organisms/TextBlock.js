import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function TextBlock({ data }) {
  const { text } = data || {};

  return (

            <div
              className="container container--md content"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
  );
}

export default TextBlock;