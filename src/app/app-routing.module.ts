import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-contatos',
    loadChildren: () => import('./pages/lista-contatos/lista-contatos.module').then( m => m.ListaContatosPageModule)
  },
  {
    path: 'detalhes-lista/:id',
    loadChildren: () => import('./pages/detalhes-lista/detalhes-lista.module').then( m => m.DetalhesListaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
