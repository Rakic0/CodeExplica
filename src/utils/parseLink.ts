const parseLink = (value: string) => {
  const link = value.slice(19).split('/').slice(0, 2);

  return link;
};

export default parseLink;
