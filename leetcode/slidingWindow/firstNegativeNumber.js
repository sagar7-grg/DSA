/**
 * this function finds first negative numbers in every window of size k
 * @param {*} arr
 * @param {*} k
 * @returns array of first negative numbers
 */

const firstNegativeNum = (arr, k) => {
  let start = 0;
  let end = 0;
  const negativeNumbers = [];
  const res = [];
  while (end < arr.length) {
    if (arr[end] < 0) {
      negativeNumbers.push(arr[end]);
    }

    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      const checkArr = arr.slice(start, end + 1);
      if (negativeNumbers.length < 1) {
        res.push(0);
      } else {
        if (checkArr.includes(negativeNumbers[0])) {
          res.push(negativeNumbers[0]);
        }
        if (negativeNumbers.includes(arr[start])) {
          const index = negativeNumbers.indexOf(arr[start]);
          negativeNumbers.splice(index, 1);
        }
      }
      start++;
      end++;
    }
  }
  return res;
};

console.log(firstNegativeNum([-8, 2, 3, -6, 10], 2));
