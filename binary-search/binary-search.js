"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let splitIndex = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, splitIndex);
  let rightHalf = array.slice(splitIndex);

  if (!array.length) {
    return false;
  } else if (target === array[splitIndex]) {
    return true;
  } else if (target < array[splitIndex] && splitIndex > 0) {
    if (binarySearch(leftHalf, target)) {
		return true;
	}
    splitIndex -= 2;
    leftHalf = array.slice(0, splitIndex);
  } else if (target > array[splitIndex] && splitIndex < array.length - 1) {
    if (binarySearch(rightHalf, target)) {
		return true;
	}
    splitIndex += 2;
    rightHalf = array.slice(splitIndex);
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
