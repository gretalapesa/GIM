function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(200);
    translate(width / 2, height / 2);

    // Disegna il supporto centrale
    noStroke();
    fill(0);
    ellipse(0, 0, 40);

    // Disegna la barra con i numeri
    drawNumberBar();

    // Calcola gli angoli basati sull'ora corrente con un offset per far oscillare la spirale
    let hourOffset = PI / 30;  // Offset per le ore
    let minuteOffset = PI / 30;  // Offset per i minuti
    let secondOffset = PI / 30;  // Offset per i secondi

    let hourAngle = -PI / 6 * (hour() % 12) - PI / 360 * minute() - PI / 21600 * second() + hourOffset;
    let minuteAngle = -PI / 30 * minute() - PI / 1800 * second() + minuteOffset;
    let secondAngle = -PI / 30 * second() + secondOffset;

    // Disegna le spirali
    noFill();
    stroke(0);
    strokeWeight(4);
    drawSpiral(hourAngle, 30);  // Spirale per le ore

    strokeWeight(2);
    drawSpiral(minuteAngle, 31);  // Spirale per i minuti

    noFill();
    stroke(255, 0, 0); // Imposta il colore della spirale dei secondi a rosso
    strokeWeight(1);
    drawSpiral(secondAngle, 31);  // Spirale per i secondi
}

function drawNumberBar() {
    // Sposta la barra nera più in alto
    noStroke();
    fill(0);
    rect(0, -20, 300, 40);  // Inizia la barra nera al centro e spostala verso l'alto

    // Numeri delle ore
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    for (let i = 1; i <= 12; i++) {
        text(i, 25 * (i - 1) + 15, 10);  // Centrare i numeri delle ore e spostarli verso l'alto
    }

    // Numeri dei minuti (moltiplicati per 5)
    for (let i = 1; i <= 12; i++) {
        text(i * 5, 25 * (i - 1) + 15, -7);  // Centrare i numeri dei minuti e spostarli verso l'alto
    }
}

function drawSpiral(angle, size) {
    beginShape();
    for (let t = 0; t < 100; t++) {  // Modificato per far iniziare la spirale dal centro
        let theta = 0.1 * t;
        let x = (0.1 + size * theta) * cos(theta + angle);  // Modificato l'angolo
        let y = (0.1 + size * theta) * sin(theta + angle);  // Modificato l'angolo
        vertex(x, y);
    }
    endShape();
}
