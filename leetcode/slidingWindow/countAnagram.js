/**
 * This function counts the occurences of anagram in given string
 * @param {*} pat - string in which anagram is to be searched
 * @param {*} txt - text to be searched
 * @returns
 */
const countAnagram = (pat, txt) => {
  let count = 0;
  let res = 0;
  let hashMap = {};
  let start = 0;
  let end = 0;
  let k = txt.length;
  let arr = pat.split("");
  for (let item of txt.split("")) {
    if (hashMap[item]) {
      hashMap[item] = hashMap[item] + 1;
    } else {
      hashMap[item] = 1;
      count++;
    }
  }
  while (end < arr.length) {
    if (arr[end] in hashMap) {
      const diff = hashMap[arr[end]] - 1;
      hashMap[arr[end]] = diff;
      if (diff === 0) {
        count--;
      }
    }
    if (end - start + 1 < k) {
      end++;
    } else if (end - start + 1 === k) {
      if (count === 0) {
        res++;
      }
      if (arr[start] in hashMap && !hashMap[arr[start]]) {
        hashMap[arr[start]] = hashMap[arr[start]] + 1;
        count++;
      }
      start++;
      end++;
    }
  }

  return res;
};

console.log(countAnagram("aabaabaa", "aaba"));
