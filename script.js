function countdown() {
    const eventDate = new Date("November 15, 2024 13:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("countdown-timer").innerHTML = "Acara sudah dimulai!";
    }
}

setInterval(countdown, 1000);


// Formulir RSVP
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Terima kasih telah mengonfirmasi kehadiran Anda!");
    document.getElementById("rsvp-form").reset();
});
