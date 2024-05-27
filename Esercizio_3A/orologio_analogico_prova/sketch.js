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
    ellipse(0, 0, 45);

    // Disegna la barra con i numeri
    drawNumberBar();

    // Calcola gli angoli basati sull'ora corrente
    let hourAngle = -TAU / 12 * (hour() % 12) - TAU / 12 / 60 * minute() - TAU / 12 / 3600 * second();
    let minuteAngle = -TAU / 60 * minute() - TAU / 60 / 60 * second();
    let secondAngle = -TAU / 60 * second();

    // Disegna le spirali
    noFill();
    stroke(0);
    strokeWeight(4);
    drawSpiral(hourAngle, 31);  // Spirale per le ore

    strokeWeight(2);
    drawSpiral(minuteAngle, 31);  // Spirale per i minuti

    noFill();
    stroke(255, 0, 0); // Imposta il colore della spirale dei secondi a rosso
    strokeWeight(1);
    drawSpiral(secondAngle, 31);  // Spirale per i secondi
}

function drawNumberBar() {
    // Barra nera
    noStroke();
    fill(0);
    rect(-150, -10, 300, 40);  // Centrare la barra nera

    // Numeri delle ore
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    for (let i = 1; i <= 12; i++) {
        text(i, -150 + 25 * (i - 1) + 15, 0);  // Centrare i numeri delle ore
    }

    // Numeri dei minuti (moltiplicati per 5)
    for (let i = 1; i <= 12; i++) {
        text(i * 5, -150 + 25 * (i - 1) + 15, 20);  // Centrare i numeri dei minuti
    }
}

function drawSpiral(angle, size) {
    beginShape();
    for (let t = 100; t > 0; t--) {  // Invertire la direzione della spirale
        let theta = 0.1 * t;
        let x = (0.1 + size * theta) * cos(theta + angle);  // Modificato l'angolo
        let y = (0.1 + size * theta) * sin(theta + angle);  // Modificato l'angolo
        vertex(x, y);
    }
    endShape();
}
