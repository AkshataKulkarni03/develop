import React from "react";
import parse from "html-react-parser";


const HTMLPreview = ({ HTMLContent }) => {
  return (
    <>
      <div>
        <div
          id="htmlOutput"
        >{parse(HTMLContent)}</div>
      </div>
    </>
  );
};

export default HTMLPreview;
