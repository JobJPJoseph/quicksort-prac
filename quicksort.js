function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  let left = quicksort(function () {
    let lessThan = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) lessThan.push(arr[i]);
    }

    return lessThan;
  }());
  // Recursively sort the right
  let right = quicksort(function () {
    let moreThan = [];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] >= pivot) moreThan.push(arr[i]);
    }

    return moreThan;
  }());
  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}


module.exports = [quicksort];
