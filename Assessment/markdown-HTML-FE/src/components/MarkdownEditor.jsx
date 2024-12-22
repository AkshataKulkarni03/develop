import React from "react";

const MarkdownEditor = ({ markDownText, OnTextChange }) => {
  return (
    <>
      <div>
        <textarea
          id="markdownText"
          placeholder="Enter Markdown text"
          value={markDownText}
          onChange={(e) => OnTextChange(e.target.value)}
        ></textarea>
      </div>
    </>
  );
};

export default MarkdownEditor;
