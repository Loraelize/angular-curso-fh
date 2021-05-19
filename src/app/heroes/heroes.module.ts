import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        // que componentes contiene el módulo
        HeroeComponent,
        ListadoComponent
    ],// que quiero que sea visible fuera de este módulo
    exports:[
        ListadoComponent
    ],// imports son módulos
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}