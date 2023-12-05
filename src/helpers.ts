import parse from "html-react-parser";

export const findTags = (str: string) =>
  str.split(" ").filter((word) => word.startsWith("#"));

export const strToHTML = (str: string) => {
  return parse(str);
};
