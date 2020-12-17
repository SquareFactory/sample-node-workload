const { fib, dist } = require('cpu-benchmark');

const FIBONACCI_MAX= 45;
const OPS_SECS = 10;

console.log('Command argv');
console.table(process.argv)

console.log('Environment variables');
console.table(Object.entries(process.env));

console.log('Calculating the Fibonacci sequence');
console.log(`Computed fib(${FIBONACCI_MAX}) in ${fib(FIBONACCI_MAX)}ms`);

console.log('Computing raw power');
const ops = Math.round(dist(OPS_SECS * 1000) / OPS_SECS);
console.log(`${ops} ops/sec`);