// right now this basically does a tap tempo and displays the bpm
const NanoTimer = require('nanotimer');
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

let taps = [];
let last = process.hrtime.bigint();

process.stdin.on('data', (key)=>{
	if(key === '\u0003') {
		process.exit();
	}
	else if(key === ' ') {
		console.log('stop');
	}
	else if(key === '\u001b[D') {
		console.log('nudge left');
	}
	else if(key === '\u001b[C') {
		console.log('nudge right');
	}
	else if(key === 'x') {
		console.log('index');
		const time = process.hrtime.bigint();
		taps.unshift(time - last);
		last = time;
		console.log(bpm());
	}
});


const bpm = () => {
	let sum = BigInt(0);
	for(let i = 0; i < Math.min(taps.length, 5); i++) {
		sum = sum + taps[i];
	}
	return 1/(Number(sum)/Math.min(taps.length, 5)/1000000000/60);
}

const timer = new NanoTimer();
// timer.setInterval(()=>{console.log('tick');}, '', '1s');

