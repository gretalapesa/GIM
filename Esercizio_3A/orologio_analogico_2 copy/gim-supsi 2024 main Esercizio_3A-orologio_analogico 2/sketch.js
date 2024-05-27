function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(200);
  
	translate(width / 2, height / 2);
  
	noStroke();
	fill(0);
  
	

	  // Disegna gli spicchi sotto i numeri
	  for (let i = 1; i <= 12; i++) {
		let angle = -HALF_PI + TWO_PI * (i / 12);
		let angleOffset = TWO_PI / 18;
		let startAngle = angle - angleOffset / 2;
		let endAngle = angle + angleOffset / 2;
		let innerRadius = 190;
		let outerRadius = 235;
		fill(111, 176, 127);
		arc(0, 0, outerRadius * 2, outerRadius * 2, startAngle, endAngle, PIE);
		line(cos(angle) * innerRadius, sin(angle) * innerRadius, cos(angle) * outerRadius, sin(angle) * outerRadius);
	  }

	// Disegna gli spicchi sotto i numeri
	for (let i = 1; i <= 12; i++) {
		let angle = -HALF_PI + TWO_PI * (i / 12);
		let angleOffset = TWO_PI / 16;
		let startAngle = angle - angleOffset / 2;
		let endAngle = angle + angleOffset / 2;
		let innerRadius = 190;
		let outerRadius = 195;
		fill(252, 176, 60,);
		arc(0, 0, outerRadius * 2, outerRadius * 2, startAngle, endAngle, PIE);
		line(cos(angle) * innerRadius, sin(angle) * innerRadius, cos(angle) * outerRadius, sin(angle) * outerRadius);
	  }
  
	  // Disegna gli spicchi sotto i numeri
	for (let i = 1; i <= 12; i++) {
		let angle = -HALF_PI + TWO_PI * (i / 12);
		let angleOffset = TWO_PI / 14;
		let startAngle = angle - angleOffset / 2;
		let endAngle = angle + angleOffset / 2;
		let innerRadius = 190;
		let outerRadius = 150;
		fill(252, 91, 99);
		arc(0, 0, outerRadius * 2, outerRadius * 2, startAngle, endAngle, PIE);
		line(cos(angle) * innerRadius, sin(angle) * innerRadius, cos(angle) * outerRadius, sin(angle) * outerRadius);
	  }
	
	// Disegna le lancette
	push();
	fill(80, 128, 92);
	rotate(TAU / 12 * (hour() % 12) + TAU / 12 / 60 * minute());
	circle(0, -200, 24);
	pop();
  
	push();
	fill(204, 142, 49);
	rotate(TAU / 60 * minute());
	circle(0, -160, 24);
	pop();
  
	const m = (new Date()).getMilliseconds() / 1000 * TAU / 60;
	fill(204, 74, 51);
	push();
	rotate(TAU / 60 * second() + m);
	circle(0, -120, 24);
	pop();
  
	fill(2, 79, 57);
	circle(0, 0, 12);
  
	// Aggiunta dei numeri delle ore
	textSize(24);
	textAlign(CENTER, CENTER);
	for (let i = 1; i <= 12; i++) {
	  let angle = -HALF_PI + TWO_PI * (i / 12);
	  let x = cos(angle) * 220;
	  let y = sin(angle) * 220;
	  fill(0);
	  text(i, x, y + 3);
	}
  
	// Aggiunta dei numeri dei minuti
	textSize(16);
	for (let i = 0; i < 60; i += 5) {
	  let angle = -HALF_PI + TWO_PI * (i / 60);
	  let x = cos(angle) * 180;
	  let y = sin(angle) * 180;
	  fill(0);
	  text(nf(i, 2), x, y + 3);
	}
  
	// Aggiunta dei numeri dei secondi
	textSize(12); // Dimensione del testo più piccola per i secondi
	for (let i = 0; i < 60; i += 5) { // Intervallo di 5 per i secondi
	  let angle = -HALF_PI + TWO_PI * (i / 60);
	  let x = cos(angle) * 140; // Posizione più interna per i secondi
	  let y = sin(angle) * 140; // Posizione più interna per i secondi
	  fill(0);
	  text(nf(i, 2), x, y + 3);
	}
  }
  