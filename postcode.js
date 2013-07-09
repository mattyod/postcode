var strings = {
    postcode: '(^(?![QVX])[A-Z]((?![IJZ])[A-Z]?)[0-9][0-9]?[A-HJKSTUW]?)( ?)[0-9](?![CIKMOV])[A-Z]{2}$',
    santander: '(GIR( ?)0AA)'
};

module.exports = {
    postcode: new RegExp(strings.postcode, 'i'),
    postcodeWithSantander: new RegExp(strings.santander + '|' + strings.postcode, 'i')
};
