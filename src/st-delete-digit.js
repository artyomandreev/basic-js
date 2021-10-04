import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let resArr = [];
  let strNum = n.toString();

  for (let i = 0; i < strNum.length; i++) {
    let str = strNum.replace(strNum[i], "");
    resArr.push(+str);
  }

  resArr.sort((o1, o2) => o2 - o1);
  return resArr[0];
}
