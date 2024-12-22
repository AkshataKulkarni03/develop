import { useState } from "react";
import "./App.css";
import useMarkdownToHTML from "../src/useMarkdownToHTML"
import MarkdownEditor from "./components/MarkdownEditor";
import HTMLPreview from "./components/HTMLPreview";
import { INITIAL_DATA } from "./constants/constants";

function App() {
  const [markDownText, setMarkDownText] = useState(INITIAL_DATA);
  const HTMLContent = useMarkdownToHTML(markDownText)

  return (
    <>
      <h1>Markdown to HTML Converter</h1>
      <div className ="main-container">
      <div className="container">
        <MarkdownEditor markDownText= {markDownText} OnTextChange={setMarkDownText}/>
        </div>
        <div className="container">
        <HTMLPreview HTMLContent={HTMLContent} /> 
      </div>
      </div>
    </>
  );
}

export default App;
