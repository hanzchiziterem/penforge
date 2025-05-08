import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import { html } from '@codemirror/lang-html';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';

function App() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  return (
    <>
      <div className="pane top-pane">
        <Editor language={html} displayName="HTML" value={htmlCode} onChange={setHtmlCode} />
        <Editor language={css} displayName="CSS" value={cssCode} onChange={setCssCode}/>
        <Editor language={javascript} displayName="JS" value={jsCode} onChange={setJsCode}/>
      </div>
      <div className="pane">
        <iframe
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
