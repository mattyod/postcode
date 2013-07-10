# postcode

## Regexp

postcode.js exports two regular expressions. The first 'postcode' covers all UK postcode formats as described below. It does **not** currently support all 'overseas territories' codes such as AI-2640 Anguilla nor does it support BFPO codes.

The second expression 'postcodeWithSantander' covers the same set of codes as 'postcode' but also allows the special code used by Santander UK, 'GIR 0AA'. I'm not sure why they are special. It's actually no longer an official postcode but is reportedly [still used by Santander](http://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom#The_modern_postcode_system).

Neither of these Regular expressions provide support for [Father Christmas' postcode 'SAN TA1'](http://news.bbc.co.uk/1/hi/programmes/breakfast/4082121.stm).

## Tests
Tests can be run with [nodeunit](https://github.com/caolan/nodeunit), if you have any unusual codes that have failed or passed incorrectly against other regexps then it would be great if you added them with a pull request.

## Match UK postcodes

Guidelines taken from [http://webarchive.nationalarchives.gov.uk/](http://webarchive.nationalarchives.gov.uk/20101126012154/http://www.cabinetoffice.gov.uk/govtalk/schemasstandards/e-gif/datastandards/address/postcode.aspx)

### Specifically:

A = [A-Z], N = [0-9]

-------------------------------
Format: AN NAA, Example: M1 1AA

Format: ANN NAA, Example: M60 1NW

Format: AAN NAA, Example: CR2 6XH

Format: AANN NAA, Example: DN55 1PT

Format: ANA NAA, Example: W1A 1HQ

Format: AANA NAA, Example: EC1A 1BB

## With the additional caveats:

* The letters Q, V and X are not used in the first position.
* The letters I, J and Z are not used in the second position.
* The only letters to appear in the third position are A, B, C, D, E, F, G, H, J, K, S, T, U and W.
* The only letters to appear in the fourth position are A, B, E, H, M, N, P, R, V, W, X and Y.
* The second half of the Postcode is always consistent numeric, alpha, alpha format and the letters C, I, K, M, O and V are never used.

*GIR 0AA is a Postcode that was issued historically and does not confirm to current rules on valid Postcode formats, it is however, still in use.
