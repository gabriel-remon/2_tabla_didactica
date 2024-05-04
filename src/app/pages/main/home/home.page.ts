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
  idioma="por";
  tipo="animales";

  @ViewChild(BotonComponent) hijoComponent: BotonComponent;


  ngOnInit() {
  }

  ingles(){
    this.idioma="ing";
  }
  espanol(){
    this.idioma="esp";
  }
  portugues(){
    this.idioma="por";
  }

animales(){
  this.tipo="animales"
  this.hijoComponent.cambioDetectado(this.tipo)
}
numeros(){
  this.tipo="numeros"
  this.hijoComponent.cambioDetectado(this.tipo)
  
}
colores(){
  this.tipo="colores"
  this.hijoComponent.cambioDetectado(this.tipo)
  
}

  singOut(){
    this.firebaseSvc.sigOut()
  }
}
