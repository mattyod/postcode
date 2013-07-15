var strings = {
    postcode: '(^(?![QVX])[A-Z])([0-9]|[0-9][0-9]|((?![IJZ])[A-Z][0-9][0-9]?)|([0-9][A-HJKSTUW])|((?![IJZ])[A-Z][1-9][ABEHMNPRVWXY]))( ?)[0-9][ABD-HJLNP-UW-Z]{2}$',
    postcodePattern: '/(^(?![QVXqvx])[A-Za-z])([0-9]|[0-9][0-9]|((?![IJZijz])[A-Za-z][0-9][0-9]?)|([0-9][A-HJKSTUWa-hjkstuw])|((?![IJZijz])[A-Za-z][1-9][ABEHMNPRVWXYabehmnprvwxy]))( ?)[0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/'
    santander: '(GIR( ?)0AA)'
};

module.exports = {
    postcode: new RegExp(strings.postcode, 'i'),
    postcodeWithSantander: new RegExp(strings.santander + '|' + strings.postcode, 'i'),
    postcodePattern: postcodePattern
};
