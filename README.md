# Real-Time Markdown Editor  

This is a real-time Markdown editor built using React and Node.js. The application allows users to type Markdown and instantly view the rendered HTML in a live preview pane.  

## Features  
- **Markdown Editor Interface:** A text area for typing Markdown syntax.  
- **Live Preview:** Real-time rendering of Markdown to HTML in a preview pane.  
- **Backend Processing:** Markdown to HTML conversion handled by a Node.js server.  
- **Stateless and Real-Time:** No database required, and operations are performed in real-time.  

---

## Prerequisites  
- Node.js (v16 or later)  
- npm (v7 or later)  

---

## Installation  

### Setup  
1. Clone the develop repo
    ```bash
    gh repo clone AkshataKulkarni03/develop
    cd markdownToHTML
2. Install the dependencies
    ```bash
    npm install
3. Start the application
    ```bash
    npm start

App will be available at http://localhost:7455.

Together(FE+BE), these provide a seamless Markdown-to-HTML converter with a live preview pane.


## Dependencies
### Frontend
- react + vite
- html-react-parser
- axios
- dompurify
### Backend
- express
- cors
- marked

#### The source for Frontend and Backend is available at [/Assessment](https://github.com/AkshataKulkarni03/develop/tree/main/Assessment)

