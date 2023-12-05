export const findTags = (str: string) =>
  str
    .split("\n")
    .join("")
    .split(" ")
    .filter((word) => word.startsWith("#"));
