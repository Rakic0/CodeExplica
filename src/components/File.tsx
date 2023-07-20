/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-misused-promises */
import "./scss/File.scss";
import { FC, useState } from "react";
import { GithubFile } from "../utils/types";
import axios, { AxiosResponse } from "axios";
import { useDispatch } from "react-redux";
import { setCode } from "../features/code/codeSlice";
import useFetchFiles from "../hooks/useFetchFiles";
import FileIcon from "./FileIcons";

interface FileProps {
  file: GithubFile;
  repoData: {
    owner: string;
    repo: string;
  };
}

const File: FC<FileProps> = ({ file, repoData }) => {
  const [nestedFiles, setNestedFiles] = useState<GithubFile[]>([]);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClick = async () => {
    if (file.type === "file") {
      let data = "";

      try {
        const response: AxiosResponse<string | null> = await axios.get(
          file.download_url
        );
        data = response.data || "";
      } catch (error) {
        console.error(error);
      }

      if (typeof data !== "string") {
        dispatch(setCode(`// Can't load that file type.`));
        return;
      }

      dispatch(setCode(data));
      return;
    }

    if (file.type === "dir") {
      const baseUrl = `https://api.github.com/repos/${repoData.owner}/${repoData.repo}/contents/`;
      const url = new URL(file.path, baseUrl);
      try {
        const data = await useFetchFiles(
          repoData.owner,
          repoData.repo,
          url.href
        );
        setNestedFiles(data ?? []);
        setShow((prev) => !prev);
      } catch (error) {
        const errorMessage = (error as Error).message;

        console.error(`Error fetching nested files: ${errorMessage}`);
      }
    }
  };

  return (
    <>
      <div className="wrapper" onClick={handleClick}>
        <FileIcon file={file} className="icon" open={show} />
        <span>{file.name}</span>
      </div>
      {file.type === "dir" && show ? (
        <div className="nested-files">
          <ul>
            {nestedFiles.map((file) => (
              <li key={file.sha}>
                <File file={file} repoData={repoData} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default File;
