import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

function TextBlock({ data }) {
  const { text } = data || {};

  return (
      <div className="">

            <div
              className=""
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
      </div>
  );
}

export default TextBlock;