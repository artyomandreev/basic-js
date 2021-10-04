import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    let sum = 0;

    let reverse = matrix.map(row => row.reverse());
    let rotatedMatrix = [];
    for (let i = 0; i < reverse.length; i++) {
        for (let j = 0; j < reverse[i].length; j++) {
            if (!rotatedMatrix[j]) rotatedMatrix[j] = [];
            rotatedMatrix[j].push(reverse[i][j]);
        }
    }

    for (let i = 0; i < rotatedMatrix.length; i++) {
        for (let j = 0; j < rotatedMatrix[i].length; j++) {
            if (rotatedMatrix[i][j] !== 0) {
                sum += rotatedMatrix[i][j];
            } else {
                break;
            }
        }
    }

    return sum;
}
