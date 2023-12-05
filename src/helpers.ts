export const findTags = (str: string) =>
  str
    .split("\n")
    .join("")
    .split(" ")
    .filter((word) => word.startsWith("#"));
export const getKey = () => Math.floor((Math.random() * 1000000) / 49) + 1123;
