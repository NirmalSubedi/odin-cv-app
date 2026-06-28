import { isObj } from "./index";

export const copyCollection = (collection) => {
  let result;
  if (Array.isArray(collection)) {
    result = [];
  } else if (isObj(collection)) {
    result = {};
  } else return collection;

  const keys = Object.keys(collection);

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const val = collection[key];

    if (Array.isArray(val) || isObj(val)) {
      result[key] = copyCollection(val);
    } else {
      result[key] = val;
    }
  }

  return result;
};
