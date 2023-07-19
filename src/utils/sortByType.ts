import type { GithubFile } from './types';

const sorter = (a: GithubFile, b: GithubFile) => {
  if (a.type === 'dir' && b.type === 'file') {
    return -1;
  } else if (a.type === 'file' && b.type === 'dir') {
    return 1;
  }

  return 0;
};

const sortByType = (data: GithubFile[]) => {
  return data.sort(sorter);
};

export default sortByType;
