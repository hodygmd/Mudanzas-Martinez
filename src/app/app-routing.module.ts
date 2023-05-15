import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VoladosComponent } from './pages/volados/volados.component';

const routes: Routes = [
  { path: 'inicio', component:  InicioComponent},
  { path: 'volados', component:  VoladosComponent},
  { path: '**', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
