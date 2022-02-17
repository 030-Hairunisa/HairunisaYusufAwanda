let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200,5);
  line(200,0,200,200);
  strokeJoin(ROUND);
  rect(95,23,25,20);
  rect(51,23,25,20);
  fill(242,223,195);
  ellipse(85,55,75,65);
  fill(0,0,0)
  ellipse(105,50,20,20);
  strokeWeight(1)
  fill(255,255,255);
  ellipse(102,50,8,8);
  fill(0,0,0);
  ellipse(65,50,20,20);
  fill(255,255,255);
  ellipse(68,50,8,8);
  fill(250,175,125);
  ellipse(85,60,8,8);
  fill(242,195,210);
  triangle(85,75,79,70,92,70);
  fill(242,223,195);
  ellipse(75,175,15,45);
  ellipse(99,175,15,45);
  fill(242,223,195);
  ellipse(115,120,25,40);
  fill(242,223,195);
  ellipse(50,100,15,45);
  fill(235,177,133);
  ellipse(85,128,80,80);

  fill(242,195,210);
  strokeJoin(ROUND);
  rect(265,23,25,20);
  rect(310,23,25,20);
  fill(242,223,195);
  ellipse(300,55,75,65);
  
  fill(242,223,195);
  ellipse(310,175,15,45);
  ellipse(285,175,15,45);
  ellipse(330,120,25,40);

  var y = 102 + 3*Math.sin(PI*j/100)
  j+=1
  fill(242,223,195);
  ellipse(265,y,15,45);
  fill(235,177,133);
  ellipse(300,128,80,80);


  var x = 320 + 3*Math.sin(PI*j/85)
  j+=1
  fill(0,0,0)
  ellipse(x,50,20,20);

  var x = 317 + 3*Math.sin(PI*j/85)
  j+=1
  fill(255,255,255);
  ellipse(x,50,8,8);

  var x = 280 + 3*Math.sin(PI*j/85)
  j+=1
  fill(0,0,0);
  ellipse(x,50,20,20);
  
  var x = 283 + 3*Math.sin(PI*j/85)
  j+=1
  fill(255,255,255);
  ellipse(x,50,8,8);

  var x = 300 + 3*Math.sin(PI*j/85)
  j+=1
  fill(250,175,125);
  ellipse(x,60,8,8);

  var x = 300 + 3*Math.sin(PI*j/85)
  j+=1
  fill(242,195,210);
  triangle(x,75,308,70,292,70);
}