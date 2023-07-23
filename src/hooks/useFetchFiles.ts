/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import axios from "axios";
import { GithubFile } from "../utils/types";

export const useFetch = async (url: string) => {
  return await axios.get(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });
};

const useFetchFiles = async (
  owner: string,
  repoName: string,
  url = `https://api.github.com/repos/${owner}/${repoName}/contents`
) => {
  try {
    const response = await useFetch(url);
    const { data }: { data: GithubFile[] } = response;

    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;

    console.error(
      `Repository can not be found. Please check your URL.\nError message: ${errorMessage}`
    );
    alert("Repository can not be found. Please check your URL.");
  }
};

export default useFetchFiles;
