import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'colores',
    loadChildren: () => import('./colores/colores.module').then( m => m.ColoresPageModule)
  },
  {
    path: 'numeros',
    loadChildren: () => import('./numeros/numeros.module').then( m => m.NumerosPageModule)
  },
  {
    path: 'animales',
    loadChildren: () => import('./animales/animales.module').then( m => m.AnimalesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
