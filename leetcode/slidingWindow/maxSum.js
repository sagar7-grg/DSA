/**
 * This function uses sliding window technique to find the max sum of a subarray of size k.
 * @param {*} arr - array of numbers
 * @param {*} k - size of subarray
 * @returns
 */

const maxSum = (arr, k) => {
  let start = 0;
  let end = 0;
  let max = 0;
  let sum = 0;
  while (end < arr.length) {
    sum = sum + arr[end];
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      max = Math.max(sum, max);
      sum = sum - arr[start];
      start++;
      end++;
    }
  }
  return max;
};

console.log(maxSum([21, 15, 1, 8, 2, 9, 10], 3));
