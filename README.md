# Logikcull-internship-code-challenge

## The Challenge

For this code challenge, you are being asked to write a function called
"longestSubstring" in JavaScript that takes an array of words and returns an object.
Each word consists of lowercase letters ('a' − 'z') and has at least 1 character.The goal
is to concatenate the words in such a way as to obtain a single word with the longest
possible substring composed of one particular letter. The function returns an object with
the letter and the length of the longest substring of that letter.

## Example

1. Given the words=["aabb", "aaaa", "bbab"], your function should return 6 and “a”. One of the best
   concatenations is words[1] + words[0] + words[2] = "aaaaaabbbbab".
   longestSubstring(["aabb", "aaaa", "bbab"]);
   {
   "letter": "a",
   "length": 6
   }
2. Given the words=["xxbxx", "xbx", "x"], your function should return 4 and “x”. One of the best
   concatenations is words[0] + words[2] + words[1] = "xxbxxxxbx".
   longestSubstring(["xxbxx", "xbx", "x"]);
   {
   "letter": "x",
   "length": 4
   }

3. Given the words=["dd", "bb", "cc", "dd"], your function should return 4 and “d”. One of the best
   concatenations is words[0] + words[3] + words[1] + words[2] = "ddddbbcc".
   longestSubstring(["dd", "bb", "cc", "dd"]);
   {
   "letter": "d",
   "length": 4
   }

## resource

[Generate permutations of Javascript Array](https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array)
