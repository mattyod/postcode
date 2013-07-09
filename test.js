var patterns = require('./postcode');

var codes = [
    'M1 1AA',
    'M60 1NW',
    'M60 1NW',
    'DN55 1PT',
    'W1A 1HQ',
    'EC1A 1BB',
    'WC1N 2PL'
];

var notCodes = [
    'W12A 3PT'
];

var santanderCodes = ['GIR 0AA', 'GIR0AA'];
console.log(patterns.postcode);
console.log(patterns.postcodeWithSantander);
