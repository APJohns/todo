const display = document.getElementById('countdown');
const bday = new Date('June 20, 2018');

showCountdown();

function showCountdown() {
	let now = new Date();
	let distance = bday - now;

	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	display.innerHTML = `${days}d<br>${hours}h<br>${minutes}m<br>${seconds}s`;
}

setInterval(() => {
	showCountdown();

	if (distance <= 0) {
		location.reload();
	}
}, 1000);