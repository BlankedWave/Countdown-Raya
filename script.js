const syawalDate = new Date('2025-04-22T00:00:00'); // Set 1st Syawal date
const ramadhanDate = new Date('2025-03-23T00:00:00'); // Set 1st Ramadhan date

const syawalCountdownEl = document.getElementById('syawal-countdown');
const ramadhanCountdownEl = document.getElementById('ramadhan-countdown');
const celebrationEl = document.getElementById('celebration');

function updateCountdown() {
    const now = new Date();

    const timeToSyawal = syawalDate - now;
    const timeToRamadhan = ramadhanDate - now;

    if (timeToSyawal > 0) {
        const days = Math.floor(timeToSyawal / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToSyawal % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToSyawal % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeToSyawal % (1000 * 60)) / 1000);

        syawalCountdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        celebrationEl.style.display = 'block';
        syawalCountdownEl.textContent = 'It\'s Hari Raya!';
        confettiEffect();
    }

    if (timeToRamadhan > 0) {
        const days = Math.floor(timeToRamadhan / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeToRamadhan % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeToRamadhan % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeToRamadhan % (1000 * 60)) / 1000);

        ramadhanCountdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        ramadhanCountdownEl.textContent = 'It\'s Ramadhan!';
    }
}

function confettiEffect() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.top = '0';
    confetti.style.left = '0';
    confetti.style.width = '100%';
    confetti.style.height = '100%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.backgroundImage = 'url("images/confetti.gif")';
    confetti.style.backgroundSize = 'cover';
    document.body.appendChild(confetti);
}

setInterval(updateCountdown, 1000);
