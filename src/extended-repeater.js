import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || "+";
    let addition = options.addition || "";
    let additionRepeatTimes = options.additionRepeatTimes || 0;
    let additionSeparator = options.additionSeparator || "|";

    let result = "";

    if (options.addition === false) {
        addition = "false";
    }

    if (options.addition === null) {
        addition = "null";
    }

    let resultPart = str + addition;

    if (options.repeatTimes === undefined && options.additionRepeatTimes === undefined) {
        return resultPart;
    }

    for (let i = 0; i < additionRepeatTimes; i++) {
        if (i !== 0) {
            resultPart += additionSeparator + addition;
        }
    }

    for (let i = 0; i < repeatTimes; i++) {
        if (i === 0) {
            result += resultPart;
        } else {
            result += separator + resultPart;
        }
    }

    return result;
}