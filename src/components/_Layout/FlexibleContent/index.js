import React from "react";
import TextBlock from "../../Organisms/TextBlock";

function FlexibleContent(props) {
  const { content } = props || {};

  return (
    <div className="flex flex-col space-y-16 lg:space-y-32">
      {content.map((item) => {
        if (item.model.apiKey === "text_block") {
          return <TextBlock data={item} key={item.id} />;
        }
      })}
    </div>
  );
}

export default FlexibleContent;