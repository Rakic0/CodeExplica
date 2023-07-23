import Console from "../components/Console";
import FileExplorer from "../components/FileExplorer";
import MonacoEditor from "../components/MonacoEditor";
import "./scss/ExplainPage.scss";
import { FC } from "react";

const ExplainPage: FC = () => {
  return (
    <div className="explain-wrapper">
      <div className="file-wrapper">
        <FileExplorer />
      </div>
      <div className="monaco-wrapper">
        <MonacoEditor />
      </div>
      <div className="console-wrapper">
        <Console />
      </div>
    </div>
  );
};

export default ExplainPage;
