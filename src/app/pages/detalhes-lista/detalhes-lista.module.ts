import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesListaPageRoutingModule } from './detalhes-lista-routing.module';

import { DetalhesListaPage } from './detalhes-lista.page';

import { SimpleMaskModule } from 'ngx-ion-simple-mask'

@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesListaPageRoutingModule,
    SimpleMaskModule,
    ReactiveFormsModule
  ],
  declarations: [DetalhesListaPage]
})
export class DetalhesListaPageModule {}
