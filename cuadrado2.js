class Caminante2 {

  constructor(){
    this.img1 = loadImage('imagen/cuadrado1.png');
    this.img2 = loadImage('imagen/cuadrado2.png');
    this.t1=height-750;
    this.x1=random(0,width*14);
    this.y1=random(100,height*10);
    //this.r = random(255);
    //this.g = random(255);
    //this.b = random(255);
    //this.r2 = random(255);
    //this.g2 = random(255);
    //this.b2 = random(255);
    this.elColor = color(random(255), random(255), random(255) );
    this.elColor2 = color(random(255), random(255), random(255) );
  }

  actualizar(frecuencia){
    push();
    colorMode(HSB);
    let tinte = map(frecuencia, FREC_MIN, FREC_MAX, 0, 255, true);
    this.elColor = color(tinte, 255, 255);
    pop();
  }

  saltar(){
    this.elColor = color(random(255), random(255), random(255) );
  }

  cambiarColor(nuevoColor){
    this.elColor = nuevoColor;
  }

  dibujar() {
    this.m=random(5, 10);//en mi computadora se ve un poquito lento pero se podria cambiar por (5,8)
    //tint(this.r, this.g, this.b, 400);
    tint(this.elColor);
    image(this.img1,this.x1,this.y1,this.t1/2,this.t1);
    //tint(this.r2, this.g2, this.b2, 300);
    tint(this.elColor2);
    image(this.img2,this.x1,this.y1,this.t1/2,this.t1);
  }
  mover(){
  
   if (this.y1>height-(this.t1/2)) {
    this.y1=0;
    this.x1=random(height);
  }
    this.y1 +=this.m;  
  }
  
}