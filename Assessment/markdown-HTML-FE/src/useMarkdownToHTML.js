import { useState, useEffect } from "react";
import axios from "axios";
import DOMPurify from 'dompurify';
import { API_URL, DEBOUNCE_DELAY } from "./constants/constants";



const useMarkdownToHTML = (markDownText) => {
  const [HTMLContent, setHTMLContent] = useState("");
  useEffect(() => {
    if (markDownText === "") {
      setHTMLContent("");
      return;
    }

    const timer = setTimeout(() => getHTMLFromNode(markDownText), DEBOUNCE_DELAY);

    return () => clearTimeout(timer);
  }, [markDownText]);

  const getHTMLFromNode = async (markDownText) => {
    try {
      if (markDownText) {
        console.log("entered");
        const response = await axios.post(`${API_URL}/convert`, {
            markDownText
        });
        console.log(response);
        const safeHTML = DOMPurify.sanitize(response.data);
        setHTMLContent(safeHTML);
      }
    } catch (err) {
      console.error(err);
      setHTMLContent("<p>Error converting Markdown</p>");
    }
  };
  return HTMLContent;
};

export default useMarkdownToHTML;
