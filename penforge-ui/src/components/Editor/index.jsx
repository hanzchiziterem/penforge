import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { lintGutter } from "@codemirror/lint";
import { autocompletion } from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";
import { lineNumbers } from "@codemirror/gutter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

const Editor = ({ value, displayName, language, onChange }) => {
  const [open, setOpen] = useState(true);
  return (
    //if open is true we won't have any additional class, else add the class -> "collapsed".
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      <CodeMirror
        value={value}
        height="200px"
        onChange={(val) => onChange(val)}
        className="codemirror-wrapper"
        extensions={[
          //   lineNumbers(),
          language(),
          //   lintGutter(),
          //   autocompletion(),
          //   EditorView.lineWrapping,
        ]}
      />
    </div>
  );
};

export default Editor;
