import CodeMirror from "@uiw/react-codemirror";
import { lintGutter } from "@codemirror/lint";
import { autocompletion } from "@codemirror/autocomplete";
import { EditorView } from "@codemirror/view";
import { lineNumbers } from "@codemirror/gutter";

const Editor = ({ value, displayName, language, onChange }) => {
  return (
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        <button>O/C</button>
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
