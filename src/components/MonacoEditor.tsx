/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Editor, OnMount } from "@monaco-editor/react";
import { FC, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Button from "./Button";

const MonacoEditor: FC = () => {
  const [loaded, setLoaded] = useState(false);
  const type = useSelector((state: RootState) => state.data.type);
  const content = useSelector((state: RootState) => state.data.content);
  const code = useSelector((state: RootState) => state.code.content);
  let initalValue = "// Click on files on your left side.";

  const editorRef = useRef<any>();

  if (type === "code") {
    initalValue = content as string;
  }

  useEffect(() => {
    if (loaded && editorRef.current && type === "repo") {
      editorRef.current?.setValue(code);
    }
  }, [code, loaded, type]);

  const handleEditorDidMount: OnMount = (editor) => {
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
    contextmenu: true,
    fontFamily: "monospace",
    fontSize: 15,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
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
    automaticLayout: true,
  };

  return (
    <>
      <Editor
        onMount={handleEditorDidMount}
        height="90vh"
        defaultLanguage="javascript"
        theme="vs-dark"
        defaultValue={initalValue}
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
