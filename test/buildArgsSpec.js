/**
*
* buildArgsSpec.js
*
**/

var buildArgs = require('../src/buildArgs');

describe('buildArgs.js', function () {

	beforeEach(function () {
		this.allOptions = {
			"sourcemaps": true,
			"input": "srcy"
		};

		this.someOptions = {
			"output": "disty"
		};

		this.mockPath = '/src'

	});

	it('should return a string array', function () {
		expect(buildArgs(this.mockPath, this.allOptions)).to.be.an.instanceof(Array);
	});

	it('should default to src and dist', function () {
		var args = buildArgs(this.mockPath, {}).join(' ');
		expect(args.indexOf('src')).to.not.equal(-1);
		expect(args.indexOf('--out-dir')).to.not.equal(-1);
		expect(args.indexOf('dist')).to.not.equal(-1);
	});

	it('should have not have option passed in in the args array', function () {
		var args = buildArgs(this.mockPath, this.allOptions).join(' ');
		expect(args.indexOf('srcy')).to.not.equal(-1);
		expect(args.indexOf('--out-dir')).to.not.equal(-1);
		expect(args.indexOf('dist')).to.not.equal(-1);
		expect(args.indexOf('--source-maps')).to.not.equal(-1);
	});

	it('should handle no args', function () {
		var args = buildArgs(this.mockPath, {});
		expect(args).to.be.ok;
	});


});
