// TODO: Need testing to check if it works exactly the same as the original function in SocialDB
// A recursive function to retrieve values from a given node based on keys and options
function recursiveGet(obj, key) {
  if (!obj) {
    return obj;
  }

  const RECURSIVE = "**"; // Recursive pattern
  const WILD = "*"; // Wildcard pattern
  const DELIMITER = "/"; // Delimiter

  const parts = key.split(DELIMITER);
  const firstPart = parts[0];

  if (key === RECURSIVE && parts.length > 1) {
    throw new Error("Recursive pattern can only be the last part of the key");
  }

  // if the first part of the key is not in the object
  if (
    firstPart !== WILD &&
    firstPart !== RECURSIVE &&
    Object.keys(obj).length > 0 &&
    (obj[firstPart] === undefined || obj[firstPart] === null)
  ) {
    return undefined;
  }

  // if it's the last part of the key

  if (parts.length === 1) {
    if (firstPart === RECURSIVE) {
      return obj;
    }
    if (obj[firstPart]?.[""]) {
      return obj[firstPart][""];
    }
    if (
      typeof obj[firstPart] === "boolean" ||
      typeof obj[firstPart] === "string" ||
      typeof obj[firstPart] === "number"
    ) {
      return obj[firstPart];
    }
    if (typeof obj === "object" && firstPart === WILD) {
      const res = {};
      Object.keys(obj).forEach((key) => {
        if (typeof obj[key] !== "object") {
          res[key] = obj[key];
        }
      });
      return res;
    }
    return undefined;
  }

  if (firstPart === WILD) {
    const res = {};
    Object.keys(obj).forEach((key) => {
      const subKey = parts.slice(1).join(DELIMITER);
      const subtree = recursiveGet(obj[key], subKey);
      if (subtree !== undefined) {
        if (subKey.split(DELIMITER)[0] === WILD || subKey === RECURSIVE) {
          res[key] = subtree;
        } else {
          res[key] = { [subKey.split(DELIMITER)[0]]: subtree };
        }
      }
    });
    return res;
  }

  return recursiveGet(obj[firstPart], parts.slice(1).join(DELIMITER));
}

module.exports = {
  recursiveGet,
};
