const escomplex 	= require('escomplex');
const fs 			= require('fs')
const jsome 		= require('jsome');
const path			= require('path');

var source_path

function analyze(source_path){
	const source		= fs.readFileSync( source_path , 'utf8')
	const result 		= escomplex.analyse(source);

	let halstead = result.aggregate.halstead

	let summary = {
	    'length': halstead.length,
	    'vocabulary': halstead.vocabulary,
	    'difficulty': halstead.difficulty,
	    'volume': halstead.volume,
	    'effort': halstead.effort,
	    'bugs': halstead.bugs,
	    'time_seconds': halstead.time,
	    'time_hours': halstead.time / 3600
	}

	jsome(summary);
}

let args  = process.argv

if (process.argv.length >= 3){
	let arg_path = args[2]
	console.log(arg_path)
	source_path = arg_path
	analyze(source_path)
}
else {
	source_path = path.join(__dirname, '../node_modules/tweetnacl/nacl-fast.js')
	analyze(source_path)
}


