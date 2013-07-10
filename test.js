var patterns = require('./postcode');

var codes = [
    'M1 1AA', 'M11AA',
    'M60 1NW', 'M601NW',
    'DN55 1PT', 'DN551PT',
    'W1A 1HQ', 'W1A1HQ',
    'EC1A 1BB', 'EC1A1BB',
    'WC1N 2PL', 'WC1N2PL',
    'SE5 8LG', 'SE58LG',
    'BR3 5DE', 'BR35DE',
    'SE8 4QH', 'SE84QH',
    'YO31 5DE', 'YO315DE',
    'W1G 8LZ', 'W1G8LZ',
    'SW1A 0AA', 'SW1A0AA',
    'W1G 9XT', 'W1G9XT',
    'W1K 5DL', 'W1K5DL',
    'N4 5RT', 'N45RT'
];

var notCodes = [
    'W12A 3PT', 'W12A3PT',
    'Q1 1AA', 'Q11AA',
    'V12 1AA', 'V121AA',
    'X11 1AA', 'X111AA',
    'WI12 1AA', 'WI121AA',
    'WJ12 1AA', 'WJ121AA',
    'WZ12 1AA', 'WZ121AA',
    'ECI 1AA', 'ECI1AA',
    'ECL 1AA', 'ECL1AA',
    'ECM 1AA', 'ECM1AA',
    'ECN 1AA', 'ECN1AA',
    'ECM 1AA', 'ECM1AA',
    'ECO 1AA', 'ECO1AA',
    'ECP 1AA', 'ECP1AA',
    'ECQ 1AA', 'ECQ1AA',
    'ECR 1AA', 'ECR1AA',
    'ECV 1AA', 'ECV1AA',
    'ECX 1AA', 'ECX1AA',
    'ECY 1AA', 'ECY1AA',
    'ECZ 1AA', 'ECZ1AA',
    'EC1C 1AA', 'EC1C1AA',
    'EC1D 1AA', 'EC1D1AA',
    'EC1F 1AA', 'EC1F1AA',
    'EC1G 1AA', 'EC1G1AA',
    'EC1I 1AA', 'EC1I1AA',
    'EC1J 1AA', 'EC1J1AA',
    'EC1K 1AA', 'EC1K1AA',
    'EC1L 1AA', 'EC1L1AA',
    'EC1O 1AA', 'EC1O1AA',
    'EC1S 1AA', 'EC1S1AA',
    'EC1T 1AA', 'EC1T1AA',
    'EC1U 1AA', 'EC1U1AA',
    'EC1Z 1AA', 'EC1Z1AA',
    'W1 XYZ', 'W1XYZ',
    'W1 3CB', 'W13CB',
    'W1 3IB', 'W13IB',
    'W1 3KB', 'W13KB',
    'W1 3MB', 'W13MB',
    'W1 3OB', 'W13OB',
    'W1 3VB', 'W13VB',
    'W1 3AC', 'W13AC',
    'W1 3AI', 'W13AI',
    'W1 3AK', 'W13AK',
    'W1 3AM', 'W13AM',
    'W1 3AO', 'W13AO',
    'W1 3AV', 'W13AV',
    'W! 5DE', 'W!5DE',
    'A99A 9AA', 'A99A9AA',
    '1G 8LZ', '1G8LZ',
    'SWAA 0AA', 'SWAA0AA',
    'WW 3EG', 'WW3EG',
    '11 1AA', '111AA',
    'SAN TA1', 'SANTA1'
];

var santanderCodes = ['GIR 0AA', 'GIR0AA'];

var special = [
    'BS98 1TL', 'BS981TL',
    'BX1 1LT', 'BX11LT',
    'CF10 1BH', 'CF101BH',
    'CF99 1NA', 'CF991NA',
    'DE99 3GG', 'DE993GG',
    'DH98 1BT', 'DH981BT',
    'E16 1XL', 'E161XL',
    'E20 2AQ', 'E202AQ',
    'EC2N 2DB', 'EC2N2DB',
    'EC4Y 0HQ', 'EC4Y0HQ',
    'EH99 1SP', 'EH991SP',
    'G58 1SB', 'G581SB',
    'IV21 2LR', 'IV212LR',
    'L30 4GB', 'L304GB',
    'LS98 1FD', 'LS981FD',
    'N1 9GU', 'N19GU',
    'N81 1ER', 'N811ER',
    'NG80 1EH', 'NG801EH',
    'S6 1SW', 'S61SW',
    'SE1 8UJ', 'SE18UJ',
    'SW1W 0DT', 'SW1W0DT'
];

module.exports = {

    match: function (test) {
        var tests = codes.length;

        test.expect(tests);

        codes.forEach(function (code) {
            test.ok(patterns.postcode.test(code),
                'Postcode matches');
        });

        test.done();

    },

    santander: function (test) {
        var tests = santanderCodes.length;

        test.expect(tests);

        santanderCodes.forEach(function (code) {
            test.ok(patterns.postcodeWithSantander.test(code),
                'Santander special code matches');
        });

        test.done();

    },

    special: function (test) {
        var tests = special.length;

        test.expect(tests);

        special.forEach(function (code) {
            test.ok(patterns.postcode.test(code),
                'Special postcode matches');
        });

        test.done();

    },

    notMatch: function (test) {
        var tests = notCodes.length;

        test.expect(tests);

        notCodes.forEach(function (code) {
            test.strictEqual(patterns.postcode.test(code), false,
                'Code does not match');
        });

        test.done();
    }
};
