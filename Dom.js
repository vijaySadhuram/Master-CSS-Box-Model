const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw four circles
ctx.beginPath();
ctx.arc(50, 50, 30, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 50, 30, 0, 2 * Math.PI);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(50, 150, 30, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(150, 150, 30, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

// Draw arrows
ctx.beginPath();
ctx.moveTo(80, 50);
ctx.lineTo(120, 50);
ctx.lineTo(100, 30);
ctx.moveTo(120, 50);
ctx.lineTo(100, 70);
ctx.stroke();
