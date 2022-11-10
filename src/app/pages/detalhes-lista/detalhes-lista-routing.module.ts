import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesListaPage } from './detalhes-lista.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesListaPageRoutingModule {}
