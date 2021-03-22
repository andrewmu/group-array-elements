# GroupArrayElements

This is a function for grouping the items of an array into multiple sub-arrays.

You can use it like so:

```javascript
  const { groupArrayElements } = require('group-array-elements');

  ..

  const result1 = groupArrayElements([1,2,3,4], 2);
  // returns [[1,2], [3, 4]]

  const result2 = groupArrayElements([1,2,3,4,5], 3);
  // returns [[1,2], [3, 4], [5]]
```

The type of the elements doesn't matter and you can provide an empty array as input (this will produce N empty sub-arrays).

The value of N, the number of sub-arrays to return, should be an integer greater than 0.


**Note**: the original requirements state that when the source array cannot be divided into equals parts, the last
elements should have a length equal to the remainder.  If there are fewer elements in the source array than the value of N, this does not give good results, assuming the intention of the function is to produce groupings with roughly even amounts of items.

For that reason this implementation fills the output groups evenly from start to finish, with the last item containing the remainder of the items when there are more elements in the input array than N.
This gives the following behaviour:
```javascript
groupArrayElements([], 3));
/// [[], [] []]

groupArrayElements([1], 3));
/// [[1], [] []]

groupArrayElements([1, 2], 3));
/// [[1], [2] []]
```
