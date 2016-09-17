function setupGolbalVariables() {
  // screen dimensions
  xRes = 800;
  yRes = 800;
  
  
  // global rotation in x and y directions
  gRotX = 0;
  gRotY = 0;
  
  // attenutation of rotation input
  attenX = 0.1;
  attenY = 0.1;
  
  // cursor position
  cX = 0.5*xRes;
  cY = 0.5*yRes;
  
  // cursor velocity
  vX = 0;
  vY = 0;
  
  
  
  // color schemes
  bgColor = color( 0 , 0 , 100 , 1);
  fillColor = color( 0 , 0 , 0 , 1);
  
}

function setup() {
  // set up canvas size
  createCanvas( xRes , yRes );
  // set the color mode to HSB (hue, saturation, brightness)
  colorMode( HSB );
  // set the angle mode to degrees
  angleMode( DEGREES );
}

function draw() {
  
}

