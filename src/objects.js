// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = obj => Object.keys(obj);
// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys
const values = obj => Object.values(obj);
// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const myObj = {};
  const oldKeys = Object.keys(obj);
  const oldVals = Object.values(obj);

  for (let i = 0; i < oldKeys.length; i++) {
    myObj[oldKeys[i]] = cb(oldVals[i]);
  }
  return myObj;
};

const pairs = obj => Object.entries(obj);
// Convert an object into a list of [key, value] pairs.
// http://underscorejs.org/#pairs

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const newObj = {};
  const oldKeys = Object.keys(obj);
  const oldVals = Object.values(obj);

  for (let i = 0; i < oldKeys.length; i++) {
    newObj[oldVals[i]] = oldKeys[i];
  }
  return newObj;
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
  const defKey = Object.keys(defaultProps);
  const defVals = Object.values(defaultProps);

  for (let i = 0; i < defKey.length; i++) {
    if (obj[defKey[i]] === undefined) {
      obj[defKey[i]] = defVals[i];
    }
  }
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
