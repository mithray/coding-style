const escomplex 	= require('escomplex');
const fs 			= require('fs')
const jsome 		= require('jsome');
const path			= require('path');

const source		= fs.readFileSync(path.join(__dirname, '../node_modules/tweetnacl/nacl-fast.js'), 'utf8')
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

