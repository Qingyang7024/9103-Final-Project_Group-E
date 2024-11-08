let ripples = [];
let stones = [];
let waterLevel = 308; // Water positon
let waveHeight = 20;
let waveLength = 0.005;
let time = 0;
let rippleEffectRadius = 0; // Variable controlling the radius of the ripple's influence


function setup() {
  let canvas = createCanvas(850, 600);
  canvas.position(0, 0); 
  canvas.style("pointer-events", "none"); 
}

function draw() {
  clear(); // 

  drawWaves();

  // Stone
  for (let i = stones.length - 1; i >= 0; i--) {
    stones[i].fall();
    stones[i].display();

    // Whether the stone reaches the water surface
    if (stones[i].y >= waterLevel + 100) {
      ripples.push(new Ripple(stones[i].x, waterLevel + 100)); // Generate ripples
      stones.splice(i, 1); // remove the stone
    }
  }

  // Ripple
  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].expand();
    ripples[i].display();

    if (ripples[i].opacity <= 0) {
      ripples.splice(i, 1);
    }
  }

  // Water level
  stroke(0);
  line(0, waterLevel, width, waterLevel);

  time += 0.01;
}

// Mouse Click
function mousePressed() {
  if (mouseY < waterLevel) { // Mouse click above water surface
    stones.push(new Stone(mouseX, 0));
  } else { // Mouse click below water surface
    ripples.push(new Ripple(mouseX, mouseY));
  }
}

// The waves
function drawWaves() {
  noFill();

  for (let i = 0; i < 10; i++) { 
    stroke(255, 255, 255, 50 - i * 10); 
    strokeWeight(5);

    beginShape();
    for (let x = 0; x <= width; x += 20) {
      // Generate the Y coordinates of the waves using Perlin noise, with each wave using a different vertical offset
      let y = waterLevel + i * 50 + noise(x * waveLength, time + i * 0.1) * waveHeight;
      curveVertex(x, y);
    }
    endShape();
  }
}

// Ripple Effect
class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.opacity = 150;
  }

  expand() {
    this.size += 2; // Ripple difussion
    this.opacity -= 2; // The ripple color gradually fades
  }

  display() {
    noFill();
    stroke(255, 255, 255, this.opacity);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size);
  }
}

// Dropping stone
class Stone {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 20;
    this.speed = 5;
  }

  fall() {
    this.y += this.speed; 
  }

  display() {
    fill(100);
    noStroke();
    ellipse(this.x, this.y, this.size); 
  }
}