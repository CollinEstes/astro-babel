/**
*
* astroJshintSpce.js - main test
*
**/

var astroJshint = require('../')
	, cwd = '/test';

describe('astro-babel', function () {

	it('should return command as babel', function () {
		var result = astroJshint(cwd, {});
		expect(result.cmd.indexOf('astro-babel/node_modules/.bin/babel')).to.not.equal(-1);
	});

});