import Button from '../components/Button';
import FileExplorer from '../components/FileExplorer';
import MonacoEditor from '../components/MonacoEditor';
import './scss/ExplainPage.scss';
import { FC } from 'react';

const ExplainPage: FC = () => {
  return (
    <>
      <div className="monaco-wrapper">
        <MonacoEditor />
        <Button className="explain-button">Explain</Button>
      </div>
      <div className="file-wrapper">
        <FileExplorer />
      </div>
    </>
  );
};

export default ExplainPage;
