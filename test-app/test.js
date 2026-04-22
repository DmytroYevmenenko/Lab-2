const { dayGenerator, startTimeout } = require('day-lib');

console.log("--- Testing Day Generator Library ---");
const gen = dayGenerator();
startTimeout(gen, 5); // Работает 5 секунд