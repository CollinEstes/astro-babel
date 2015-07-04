/**
*
* buildArgs.js - build arguments for the command
*
**/

module.exports = function (projectDir, options) {

	var args = []
	, defaultIn = (options.client) ? projectDir	+ '/public/js' : projectDir + '/src'
	, defaultOut = (options.client) ? projectDir + '/public/dist/js' : projectDir + '/dist'
	;

	if (options.input) {
		defaultIn = projectDir + '/' + options.input;
	}

	if (options.output) {
		defaultOut = projectDir + '/' + options.output;
	}

	// set input source (switches between client/server)
	args.push(defaultIn);

	// set output directory
	args.push('--out-dir')
	args.push(defaultOut);


	if (options.sourcemaps) {
		args.push('--source-maps');
	}

	return args;
}
