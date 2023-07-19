import File from './File';
import { FC } from 'react';
import './scss/FileExplorer.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { GithubFile } from '../utils/types';

const FileExplorer: FC = () => {
  const type = useSelector((state: RootState) => state.data.type);
  const content = useSelector((state: RootState) => state.data.content);
  const repoData = useSelector((state: RootState) => state.data.repoData);

  if (type === 'code') return <div className="file-explorer"></div>;

  return (
    <div className="file-explorer">
      <ul>
        {content.map((file: GithubFile) => (
          <li key={file.sha}>
            <File file={file} repoData={repoData} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
