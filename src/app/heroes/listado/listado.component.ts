import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan América'];
  heroeBorrado: string = "";
  

borrarHeroe(){
 // this.heroes.splice(0,1);
  const heroeBorrado = this.heroes.shift() || '';
  this.heroeBorrado = heroeBorrado;
}


}
