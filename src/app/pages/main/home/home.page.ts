import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FirebaeService } from 'src/app/services/firebae.service';
import { UtilsService } from 'src/app/services/utils.service';
import { BotonComponent } from 'src/app/shared/components/boton/boton.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaeService)
  utilSvc = inject(UtilsService)
  idioma="esp";
  tipo="numeros";
  srcIdioma="assets/banderas/argentina.jpg"
  srcTipo="assets/numeros/numeros.jpg"
  @ViewChild(BotonComponent) hijoComponent: BotonComponent;


  ngOnInit() {
  }

  ingles(){
    this.idioma="ing";
    this.srcIdioma="assets/banderas/inglesa.jpg"
  }
  espanol(){
    this.idioma="esp";
    this.srcIdioma="assets/banderas/argentina.jpg"
  }
  portugues(){
    this.idioma="por";
    this.srcIdioma="assets/banderas/brasil.jpg"
  }
  
  animales(){
    this.tipo="animales"
    this.srcTipo="assets/animales/animales.png"
    this.hijoComponent.cambioDetectado(this.tipo)
  }
  numeros(){
    this.tipo="numeros"
    this.srcTipo="assets/numeros/numeros.jpg"
    this.hijoComponent.cambioDetectado(this.tipo)
    
  }
  colores(){
    this.tipo="colores"
    this.srcTipo="assets/colores/colores.png"
  this.hijoComponent.cambioDetectado(this.tipo)
  
}

  singOut(){
    this.firebaseSvc.sigOut()
  }
}
