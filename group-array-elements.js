/**
 * Given an array of length >= 0, returns the contents of the array divided
 * into N equally sized arrays.
 * Where the size of the array cannot be divided equally by N, the final part
 * has length equal to the remainder.
 *
 * In the cases where there are not enough items to fill the result array,
 * e.g.:
 *   groupArrayElements([1], 3)
 * the return value will be
 *   [[1], [], []]
 *
 * @param {any[]} array the array of items to split up
 * @param {number} n the number of items to include in the result
 * @returns {any[][]}
 */

const groupArrayElements = (array, n) => {
  if (!(array instanceof Array)) throw new Error();
  if (!Number.isFinite(n) || n <= 0) throw new Error();

  const partsLength = Math.ceil(array.length / n);
  return Array.from(
    { length: n }, // array-like object
    (_, i) => array.slice(i * partsLength, (i + 1) * partsLength),
  );
};

module.exports = groupArrayElements;
