const cleanSet = (set, startString) => {
  let strings = "";
  if (startString === "" || typeof startString !== "string") return "";
  strings = Array.from(set)
    .filter((str) => {
      return typeof str === "string" && str.startsWith(startString);
    })
    .map((str) => str.replace(startString, ""))
    .join("-");
  return strings;
};

export default cleanSet;
