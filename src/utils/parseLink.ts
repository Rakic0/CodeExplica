const parseLink = (value: string) => {
  let link: string[];
  if (value.startsWith("https://www.github.com")) {
    link = value.slice(23).split("/").slice(0, 2);
    console.log(link);
  } else {
    link = value.slice(19).split("/").slice(0, 2);
  }

  return link;
};

export default parseLink;
