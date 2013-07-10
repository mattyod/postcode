var strings = {
    postcode: '(^(?![QVX])[A-Z])([0-9]|[0-9][0-9]|((?![IJZ])[A-Z][0-9][0-9]?)|([0-9][A-HJKSTUW])|((?![IJZ])[A-Z][1-9][ABEHMNPRVWXY]))( ?)[0-9][ABD-HJLNP-UW-Z]{2}$',
    santander: '(GIR( ?)0AA)'
};

module.exports = {
    postcode: new RegExp(strings.postcode, 'i'),
    postcodeWithSantander: new RegExp(strings.santander + '|' + strings.postcode, 'i')
};
