let canvas;
let img;


function setup() {
    canvas = createCanvas(600, 600);
    img = loadImage("assets/miming_dissolving_grace");
}
  
function draw() {
    image(img, 0, 0, 600, 600);
}