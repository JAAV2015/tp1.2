
class Fondo {
  constructor(){
   //las dos imagenes que conforman el fondo
   this.img = loadImage('imagen/fondo1.png');
   this.img2 = loadImage('imagen/fondo2.png'); 
   //colores del fondo
   this.r = random(255);
   this.g = random(255);
   this.b = random(255);
   this.r2 = random(255);
   this.g2 = random(255);
   this.b2 = random(255);
  }

  saltar(){
 //colores del fondo
 this.r = random(255);
 this.g = random(255);
 this.b = random(255);
 this.r2 = random(255);
 this.g2 = random(255);
 this.b2 = random(255);
  }


dibujar() {
  //fondo
  tint(this.r, this.g, this.b);
  image(this.img, 0, 0);
  tint(this.r2, this.g2, this.b2);
  image(this.img2, 0, 0);
}


}