import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerResultadosComponent } from './ver-resultados/ver-resultados.component';
import { LancarPontosComponent } from './lancar-pontos/lancar-pontos.component';

const routes: Routes = [
  { path: 'lancar-pontos', component: LancarPontosComponent },
  { path: 'ver-resultados-component', component: VerResultadosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
