function setupGlobalVariables() {
  // screen dimensions
  xRes = 900;
  yRes = 1500;
  // global rotation in x and y directions
  gRotX = 0;
  gRotY = 0;
  // attenutation of rotation input
  attenX = 0.05;
  attenY = 0.05;
  // maximum rotation input
  maxRotX = 30;
  maxRotY = 30;
  // cursor position
  cX = 0.5*xRes;
  cY = 0.5*yRes;
  // cursor velocity
  vX = 0;
  vY = 0;
  // set the color mode to HSB (hue, saturation, brightness)
  colorMode( HSB );
  // color schemes
  bgColor = color( 0 , 0 , 100 , 1);
  fillColor = color( 0 , 0 , 0 , 1);
  // number of frames to wait while initializing
  waitFrames = 100;
  //frame counter;
  frameCounter = 0;
  
}

function setup() {
  // set up global variables
  setupGlobalVariables();
  
  // set up canvas size
  createCanvas( xRes , yRes );
  buf = createGraphics( xRes , yRes );

  // do not draw borders
  noStroke();
  // set the angle mode to degrees
  angleMode( DEGREES );
  
  // initialize global rotation
  for( var i = 0 ; i < 2000000 ; i++ ) {
    gRotX = attenX*rotationX + (1-attenX)*gRotX;
    gRotY = attenY*rotationY + (1-attenX)*gRotY;
  }
  
  background( bgColor );
  buf.clear();
}

function draw() {
  frameCounter++;

  var rotX = rotationX;
  var rotY = rotationY;
  var dRotX = gRotX - rotX;
  var dRotY = gRotY - rotY;
  
  gRotX = attenX*rotX + (1-attenX)*gRotX;
  gRotY = attenY*rotY + (1-attenX)*gRotY;
  
  console.log( dRotX , dRotY);
  
  if( frameCounter <= waitFrames ) {
    return
  }
  
  background( bgColor );
  fill( fillColor );
  
  if( abs(dRotX) < maxRotX ) {
    cX -= dRotY;
  }
  if( abs(dRotY) < maxRotY ) {
    cY -= dRotX;
  }
  
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
  buf.noStroke();
  buf.colorMode( HSB );
  buf.fill( 0 , 0 , 0 , 1 );
  buf.ellipse( cX , cY , 20 , 20);
  image( buf , 0 , 0 , xRes , yRes );
  ellipse( cX , cY , 20 , 20);
  
  
}

