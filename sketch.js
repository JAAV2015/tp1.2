

//configuracion de amplitud
let AMP_MIN = 0.05;
let AMP_MAX = 0.1;
let FREC_MIN = 880;
let FREC_MAX = 2000;
let IMPRIMIR = false;


//entrada de audio
let mic;

//amplitud
let amp;
let haySonido = false;
let antesHabiaSonido = false;

let audioContext;
let frecuencia;

// cuadrado y fondo
let cantidad;
let cua1 = [];
let cua2 = [];
let fon;

const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

function setup(){

 cantidad=4;
 for(let i=0; i<cantidad; i++){
 cua1[i]= new Caminante();
 }

 for(let i=0; i<cantidad; i++){
  cua2[i]= new Caminante2();
 }
 //fondo
  fon= new Fondo();

 createCanvas(windowWidth, windowHeight);

 //audio
 audioContext = getAudioContext();
 mic = new p5.AudioIn();
 mic.start(startPitch);
 mic.start();
 userStartAudio();

}

function draw(){
  background(0);

  amp = mic.getLevel();
  haySonido = amp > AMP_MIN;

  let empezoElSonido = haySonido && !antesHabiaSonido; // EVENTO

  //cuadrado1
  for(let i=0; i<cua1.length; i++){
  if(empezoElSonido){
  cua1[i].dibujar();
  }
  if(haySonido){
  cua1[i].mover();
  cua1[i].saltar();
  }
  cua1[i].dibujar();
  }

 //cuadrado2

  for(let i=0; i<cua2.length; i++){
  if(empezoElSonido){
  cua2[i].dibujar();
  }
  if(haySonido){
  cua2[i].mover();
  cua2[i].saltar();
  }
  cua2[i].dibujar();
  }

  //fondo
  
  if(empezoElSonido){
  fon.dibujar();
  }
  if(haySonido){
  fon.saltar();
  }
  fon.dibujar();

  if (IMPRIMIR) {
  imprimirData();
  }
  antesHabiaSonido = haySonido;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function imprimirData(){

 background(255);
 push();
 textSize(16);
 fill(0);
 let texto;
 texto = 'amplitud: ' + amp;
 text(texto, 10, 20);
 pop();

}