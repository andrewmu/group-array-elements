const groupArrayElements = require('./group-array-elements');

describe(groupArrayElements.name, () => {
  test.each`
    array                    | n    | expected
    ${[1]}                   | ${1} | ${[[1]]}
    ${[1, 2]}                | ${1} | ${[[1, 2]]}
    ${[1]}                   | ${2} | ${[[1], []]}
    ${[1, 2]}                | ${2} | ${[[1], [2]]}
    ${[1]}                   | ${3} | ${[[1], [], []]}
    ${[1, 2]}                | ${3} | ${[[1], [2], []]}
    ${[1, 2]}                | ${4} | ${[[1], [2], [], []]}
    ${[1, 2, 3]}             | ${3} | ${[[1], [2], [3]]}
    ${[1, 2, 3, 4, 5]}       | ${3} | ${[[1, 2], [3, 4], [5]]}
    ${[1, 2, 3, 4, 5]}       | ${3} | ${[[1, 2], [3, 4], [5]]}
    ${[1, 2, 3, 4, 5, 6]}    | ${3} | ${[[1, 2], [3, 4], [5, 6]]}
    ${[1, 2, 3, 4, 5, 6, 7]} | ${3} | ${[[1, 2, 3], [4, 5, 6], [7]]}
    ${[]}                    | ${3} | ${[[], [], []]}
  `('given input ($array, $n) returns $expected', ({ array, n, expected }) => {
    expect(groupArrayElements(array, n)).toStrictEqual(expected);
  });

  it('throws when the array is missing', () => {
    expect(() => groupArrayElements(undefined, 3)).toThrow();
  });

  it('throws when given an invalid n value', () => {
    expect(() => groupArrayElements([], 0)).toThrow();
    expect(() => groupArrayElements([1, 2, 3], 0)).toThrow();
    expect(() => groupArrayElements([1, 2, 3, 4, 5], -1)).toThrow();
    expect(() => groupArrayElements([1, 2, 3, 4, 5], undefined)).toThrow();
    expect(() => groupArrayElements([1, 2, 3, 4, 5], NaN)).toThrow();
    expect(() => groupArrayElements([1, 2, 3, 4, 5], Infinity)).toThrow();
    expect(() => groupArrayElements([1, 2, 3, 4, 5], -Infinity)).toThrow();
  });
});
