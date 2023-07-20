import { Editor } from "@monaco-editor/react";
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Button from "./Button";

const MonacoEditor: FC = () => {
  const [loaded, setLoaded] = useState(false);
  const type = useSelector((state: RootState) => state.data.type);
  const content = useSelector((state: RootState) => state.data.content);
  const code = useSelector((state: RootState) => state.code.content);
  let initalValue: string;

  const editorRef = useRef<object>(null);

  if (type === "code") {
    initalValue = content;
  }

  useEffect(() => {
    if (loaded) {
      editorRef.current.setValue(code);
    }
  }, [code, loaded]);

  const handleEditorDidMount = (editor, _) => {
    editorRef.current = editor;
    setLoaded(true);
  };

  const handleGetSelectedText = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current;
      const selectedText = editorInstance
        .getModel()
        .getValueInRange(editorInstance.getSelection());

      console.log("Selected Text:", selectedText);
    }
  };

  const options = {
    autoIndent: "full",
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 15,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: "always",
    minimap: {
      enabled: false,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: "line",
    automaticLayout: true,
  };

  return (
    <>
      <Editor
        onMount={handleEditorDidMount}
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={
          initalValue ? initalValue : "// Click on files on your left side"
        }
        width={"82vw"}
        options={options}
      />
      <Button className="explain-button" onClick={handleGetSelectedText}>
        Explain
      </Button>
    </>
  );
};

export default MonacoEditor;
