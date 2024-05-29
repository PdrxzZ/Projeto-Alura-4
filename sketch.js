function setup() {
  createCanvas(400, 400);
  background("lightblue");
}

function draw() {
  stroke("blue");
  fill("rgb(150,0,150)");

  //console.log(mouseIsPressed);

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
