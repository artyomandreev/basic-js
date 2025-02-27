import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    let indexes = [];

    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === -1) {
        indexes.push(i);
      }
    }

    arr = arr.filter(item => item !== -1);
    arr.sort((o1, o2) => o1 - o2);

    for(let i = 0; i < indexes.length; i++) {
        arr.splice(indexes[i], 0, -1);
    }

    return arr;
}
