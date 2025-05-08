import { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import { css } from "@codemirror/lang-css";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setJsCode] = useState("");
  const [srcDoc, setSrcDoc] = useState("")

  // Renders to iframe on every 250ms of idleness(delay). 
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setSrcDoc(`
                  <html>
                    <style>${cssCode}</style>
                    <body>
                      ${htmlCode}
                      <script>
                        ${jsCode}
                      </script>
                    </body>
                  </html>
                `);
    }, 250)

    return () => clearTimeout(timeout); //once renders it clears it.
  },[htmlCode, cssCode, jsCode]) // this makes sure the cycle repeats.
  return (
    <>
      <div className="pane top-pane">
        <Editor
          language={html}
          displayName="HTML"
          value={htmlCode}
          onChange={setHtmlCode}
        />
        <Editor
          language={css}
          displayName="CSS"
          value={cssCode}
          onChange={setCssCode}
        />
        <Editor
          language={javascript}
          displayName="JS"
          value={jsCode}
          onChange={setJsCode}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          frameBorder={0}
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
