/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return `${a} + ${b} = ${a + b}`
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    let array = [];
    for(let i = startNumber; i <= endNumber; i++) {
        array.push(i);
    }
    return array;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i <= numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        }
        if(numbers[i] < min) {
            min = numbers[i];
        }
    }
    return '{ max: ' + max +', min: ' + min + ' }';
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    let counts = [];
    let keys = [];
    let checker = true;
    let object = {};
    let arr= [...array];
    arr.sort();
    let previous;
    let token = -1;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] != previous) {
            keys.push(arr[i]);
            counts.push(1);
            token++;
        }  else {
            counts[token] += 1;
        }
        previous = arr[i];
    }
    
    for(let j = 0; j < keys.length; j++) {
        Object.assign (object, {[keys[j]]: counts[j]});
    }
    return object;
}
