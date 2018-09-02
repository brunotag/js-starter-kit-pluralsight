import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
//debugger //uncomment this to create a breakpoint and see sourcemaps working.
console.log(`I would pay ${courseValue} for this awesome course!`); // eslint-disable-line no-console
