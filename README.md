# GroupArrayElements

This is a function for grouping the items of an array into multiple sub-arrays.

You can use it like so:

```javascript
  const { groupArrayElements } = require('group-array-elements');

  ..

  const result1 = groupArrayElements([1,2,3,4], 2);
  // returns [[1,2], [3, 4]]

  const result2 = groupArrayElements([1,2,3], 2);
  // returns [[1,2], [3]]

```

The type of the elements doesn't matter and you can provide an empty array as input (this will produce N empty sub-arrays).

The value of N, the number of sub-arrays to return, should be an integer greater than 0.
