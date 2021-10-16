var r = 0, g = 0, b = 0
function setup() {
  createCanvas(400,400);
btn_red = createButton("RED");
btn_red.position(100,50);
btn_red.mouseClicked(red_bg);

btn_green = createButton("GREEN");
btn_green.position(250,50);
btn_green.mouseClicked(green_bg);
}

function draw() 
{
  background(r,g,b);

}
function red_bg()
{
  r = 255;
  g = 0;
  b = 0;
  background ("red")
}
function green_bg()
{
  r = 0;
  g = 255;
  b = 0;
  background ("green")
}


