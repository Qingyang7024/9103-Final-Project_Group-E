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