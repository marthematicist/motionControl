function setupGlobalVariables() {
  // screen dimensions
  xRes = 800;
  yRes = 800;
  // global rotation in x and y directions
  gRotX = 0;
  gRotY = 0;
  // attenutation of rotation input
  attenX = 0.05;
  attenY = 0.05;
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
  // set up global variables
  setupGlobalVariables();
  // set up canvas size
  createCanvas( xRes , yRes );
  // set the color mode to HSB (hue, saturation, brightness)
  colorMode( HSB );
  // do not draw borders
  noStroke();
  // set the angle mode to degrees
  angleMode( DEGREES );
  
  // initialize global rotation
  for( var i = 0 ; i < 200 ; i++ ) {
    gRotX = attenX*rotationX + (1-attenX)*gRotX;
    gRotY = attenY*rotationY + (1-attenX)*gRotY;
  }
}

function draw() {
  var rotX = rotationX;
  var rotY = rotationY;
  var dRotX = gRotX - rotX;
  var dRotY = gRotY - rotY;
  
  gRotX = attenX*rotX + (1-attenX)*gRotX;
  gRotY = attenY*rotY + (1-attenX)*gRotY;
  
  console.log( dRotX , dRotY);
  background( bgColor );
  fill( fillColor );
  
  cX += gRotX;
  cY += gRotY;
  if( cX > xRes ){
    cX = xRes;
  }
  if( cX < 0 ){
    cX = 0;
  }
  if( cY > yRes ){
    cY = yRes;
  }
  if( cY < 0 ) {
    cY = 0;
  }
  
  ellipse( cX , cY , 20 , 20);
  
  
}

