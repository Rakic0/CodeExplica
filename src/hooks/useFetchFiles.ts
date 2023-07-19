/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import axios from 'axios';

export const useFetch = async (url: string) => {
  return await axios.get(url, {
    method: 'GET',
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await useFetch(url);
    const { data }: { data: File[] } = response;

    return data;
  } catch (error) {
    console.error(
      `Repository can not be found. Please check your URL.\nError message: ${error.message}`
    );
    alert('Repository can not be found. Please check your URL.');
  }
};

export default useFetchFiles;
