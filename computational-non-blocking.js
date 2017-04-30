var child_process = require('child_process');

console.log("beginning");

var newProcess = child_process.spawn('node', ['_fibonnaci.js'], {
	// console is not shared with main node thread unless you add the below option to the spawn method
	stdio: 'inherit'
});

console.log('end');