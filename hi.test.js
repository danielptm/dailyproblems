import {Program} from './program';

var chai = require('chai');

const assert = chai.assert;

it(('initial'), () => {
    let numbers = Program.getRandomNumbers();
    let k = Program.getRandomNumber();
    const result = Program.calculateIfKAndReturnNumbersOnTrue(k, numbers)
    console.log(result);

})