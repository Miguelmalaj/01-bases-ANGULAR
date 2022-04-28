import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  nombreBorrado:string = "";

  borrarHeroe(){
    console.log('borrando...');
    this.nombreBorrado = this.heroes.shift() || '';
  }
}
