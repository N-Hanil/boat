var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");

//water
context.beginPath();
context.rect(0,300,400,300)

var lGradient = context.createLinearGradient(0,0,400,0);
lGradient.addColorstop(0,"#0000FF")
lGradient.addColorstop(1,"#5F9AD1")

context.fillStyle="lGradient";
context.strokeStyle="blue";
context.fill();
context.stroke();

//Sail
context.beginPath();
context.moveTo(155,150);
context.quadraticCurveTo(95,180,85,260)
context.quadraticCurveTo(105,250,145,160)
context.quadraticCurveTo(135,200,145,145)
context.lineTo(220,270);
context.lineTo(90,270);
context.lineTo(155,150);
context.stroke();



//Flag
context.beginPath();
context.moveTo(145,110);
context.lineTo(145,140);
context.lineTo(110,125);
context.closePath();
rgba(165, 42, 42, 0.7);

//Boat bottom
context.rect(70,280, 170, 40);
context.fillStyle="rgba(165, 42, 42, 1)";
context.strokeStyle="rgba(165, 42, 42, 1)";
context.fill();
context.stroke();

//Mast
context.rect(150,100, 10, 180);
context.fillStyle="black";
context.strokeStyle="black";
context.fill();
context.stroke();

//Circle
context.beginPath();
context.arc(330, 70, 45, 0, 2*Math.PI,true);

var rGradient = context.createRadialGradient(330,70,10,330,70,45);
rGradient.addColorstop(0,"#FF8C00")
rGradient.addColorstop(0,"#FFFF00")

context.fillStyle="rGradient";
context.strokeStyle="yellow";
context.fill();
context.stroke();