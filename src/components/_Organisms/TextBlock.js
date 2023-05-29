import React from "react";

function TextBlock({ data }) {
  const { text } = data || {};

  return (
    <div className="container overflow-x-auto container--md content">
      <div
        className="w-full content"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}

export default TextBlock;