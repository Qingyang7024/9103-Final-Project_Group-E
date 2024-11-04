# 9103-Final-Project_Group-E—_Qingyang Wang
## **Instruction about Interaction**

## **Details of my code**
### *THe building and Reflection in the water*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monet Style Painting</title>
</head>

<body>
  <canvas id="monetCanvas" width="800" height="600"></canvas>

  <script>
    const canvas = document.getElementById("monetCanvas");
    const ctx = canvas.getContext("2d");

    //the buildings
    ctx.fillStyle = "rgba(44, 27, 50, 0.8)"; 
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(50, 240);
    ctx.lineTo(100, 240);
    ctx.lineTo(100, 150);
    ctx.lineTo(110, 150);
    ctx.lineTo(120, 40);
    ctx.lineTo(130, 150);
    ctx.lineTo(140, 150);
    ctx.lineTo(140, 200);
    ctx.lineTo(170, 200); 
    ctx.arc(170, 200, 30, 0, Math.PI, true);
    ctx.lineTo(200, 200);
    ctx.lineTo(260, 210);
    ctx.lineTo(300, 220);
    ctx.lineTo(330, 250);
    ctx.lineTo(330, 270);
    ctx.lineTo(330, 270);
    ctx.lineTo(450, 270);
    ctx.lineTo(480, 300);
    ctx.closePath();
    ctx.fill();

    //Reflection
    ctx.fillStyle = "rgba(44, 27, 50, 0.8)";
    ctx.fillRect(100, 300, 50, 280);

    // Water ripple effect
     ctx.strokeStyle = 'rgba(255, 255, 255, )';  
      ctx.lineWidth = 0.6;   
        for (let j = canvas.height * 0.5; j < canvas.height; j +=5) {
          ctx.beginPath();
          ctx.moveTo(0, j);
            for (let i = 0; i < canvas.width; i+=2) {
              const wave = Math.sin(i / 15 + j / 25) * 2.5;
             ctx.lineTo(i, j + wave);
            }

          ctx.stroke();
      }

    //texture
    function addBrushStrokes(color, alpha, density) {
      ctx.fillStyle = color;
      ctx.globalAlpha = alpha;
      for (let i = 0; i < density; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        let width = Math.random() * 6 + 1;
        let height = Math.random() * 3 + 1;
        ctx.fillRect(x, y, width, height);
      }
      ctx.globalAlpha = 4.0;
    }
  </script>
</body>
</html>

### *The Interaction Effect of User Input* ###
let ripples = [];
let stones = [];
let waterLevel = 308;
let waveHeight = 20;
let waveLength = 0.005;
let time = 0;
let rippleEffectRadius = 0; 


function setup() {
  let canvas = createCanvas(850, 600);
  canvas.position(0, 0); 
  canvas.style("pointer-events", "none"); 
}

function draw() {
  clear(); 

  drawWaves();

  for (let i = stones.length - 1; i >= 0; i--) {
    stones[i].fall();
    stones[i].display();

    if (stones[i].y >= waterLevel + 100) {
      ripples.push(new Ripple(stones[i].x, waterLevel + 100)); // 在水面位置生成波纹
      stones.splice(i, 1); // 移除已到达水面的石头
    }
  }

  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].expand();
    ripples[i].display();

    if (ripples[i].opacity <= 0) {
      ripples.splice(i, 1);
    }
  }

  stroke(0);
  line(0, waterLevel, width, waterLevel); 

  time += 0.01;
}

function mousePressed() {
  if (mouseY < waterLevel) {
    // 点击在水面以上位置，生成石头
    stones.push(new Stone(mouseX, 0)); 
  } else {
    ripples.push(new Ripple(mouseX, mouseY));
  }
}

function drawWaves() {
  noFill();

  for (let i = 0; i < 10; i++) { 
    stroke(255, 255, 255, 50 - i * 10); 
    strokeWeight(5);

    beginShape();
    for (let x = 0; x <= width; x += 20) {
      let y = waterLevel + i * 50 + noise(x * waveLength, time + i * 0.1) * waveHeight;
      curveVertex(x, y); 
    }
    endShape();
  }
}


class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
    this.opacity = 150;
  }

  expand() {
    this.size += 2; 
    this.opacity -= 2; 
  }

  display() {
    noFill();
    stroke(255, 255, 255, this.opacity);
    strokeWeight(2);
    ellipse(this.x, this.y, this.size);
  }
}

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