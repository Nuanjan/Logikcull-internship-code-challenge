// input array of string.
// output object that has 2 property of letter and length
// constraint: lowercase letter only
// word has at least one character
// edge case if there are max length of character more than one?

// ex arr = ["dd","bb","cc","dd"]
// ["xxbxx","xbx","x"]
// idea
// create object name resultObj ans initiate property of letter with empty string value and property of length initial value is 0
//I will loop through each possible combination of string that I get from my perm function
// inside loop has two pointer and count to reset when we start to count new character
// has the condition when we found the not repeat character in string
// check if the length of current sliding window pointer is greater than the length in resultObj
// if greater assign a new length and assign new character
// reset the count
// set the left pointer to the new index of new character
// right pointer will increase by one every loop
// loop untill out of wordArray Length
// return resultObj

function longestSubstring(wordArray) {
  const words = perm(wordArray);
  const resultObj = { letter: "", length: 0 };
  for (let i = 0; i < words.length; i++) {
    let left = 0;
    let right = 0;
    let count = 0;
    while (right < words[i].length) {
      if (words[i][left] !== words[i][right]) {
        if (right - left > resultObj.length) {
          resultObj.length = right - left;
          resultObj.letter = words[i][left];
          count = 0;
        }
        left = right;
      }
      right++;
    }
  }
  return resultObj;
}

function perm(xs) {
  let ret = [];
  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
    if (!rest.length) {
      ret.push(xs[i]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        ret.push(xs[i] + rest[j]);
      }
    }
  }
  return ret;
}

// test case
const objTest1 = longestSubstring(["aabb", "aaaa", "bbab"]);
const objTest2 = longestSubstring(["xxbxx", "xbx", "x"]);
const objTest3 = longestSubstring(["dd", "bb", "cc", "dd"]);
console.log(objTest1); // expected {"letter": "a","length": 6}
console.log(objTest2); // expected {"letter": "x","length": 4}
console.log(objTest3); // expected {"letter": "d","length": 4}
