import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
})
export class BotonComponent  implements OnInit {

  @Input() idioma:string="esp";
  tipo:string="numeros";
  
  srcImagen1:string;
  srcImagen2:string;
  srcImagen3:string;
  srcImagen4:string;
  srcImagen5:string;
  srcImagen6:string;

  constructor() { }


  reproducirSonido(src:string){
    const audio = new Audio(src+"."+this.idioma+".mp3")
    audio.play()
  }

  ngOnInit() {
    this.cambioDetectado(this.tipo)
  }


  public cambioDetectado(tipo:string){
    
        if(tipo =="numeros"){
          this.srcImagen1="assets/numeros/uno"
          this.srcImagen2="assets/numeros/dos"
          this.srcImagen3="assets/numeros/tres"
          this.srcImagen4="assets/numeros/cuatro"
          this.srcImagen5="assets/numeros/cinco"
          this.srcImagen6="assets/numeros/seis"
          this.tipo="numeros"
        }else if(tipo =="animales"){
          this.srcImagen1="assets/animales/leon"
          this.srcImagen2="assets/animales/conejo"
          this.srcImagen3="assets/animales/gato"
          this.srcImagen4="assets/animales/cerdo"
          this.srcImagen5="assets/animales/oso"
          this.srcImagen6="assets/animales/elefante"
          this.tipo="animales"
        }else{
          this.srcImagen1="assets/colores/amarillo"
          this.srcImagen2="assets/colores/azul"
          this.srcImagen3="assets/colores/naranja"
          this.srcImagen4="assets/colores/rojo"
          this.srcImagen5="assets/colores/rosa"
          this.srcImagen6="assets/colores/verde"
          this.tipo="numeros"
        }
    
  }

}
