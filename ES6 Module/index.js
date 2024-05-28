/* 
    ES6 Module = An external file that contains reusable code
                 that can be importated into other JavaScript
                 Write reuseable code for many different apps.
                 Can contain variables, classes, functions ... and more
                 introduced as part of ECMAScript 2015 update


*/

import {PI, getArea, getCircumference, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);

console.log(`${circumference.toFixed(2)}cm`)
