var bg,snow;

function setup() {
  createCanvas(1000,500);
  snow = new Snow(this.image)
  bg=loadImage("snow1.jpg")
}

function draw() {
  background(bg);  

snow.display();

  drawSprites();
}