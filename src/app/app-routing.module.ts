import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienciasComponent } from './rutas/experiencias/experiencias.component';
import { EducacionComponent } from './rutas/educacion/educacion.component';
import { HabilidadesComponent } from './rutas/habilidades/habilidades.component';

const routes: Routes = [

  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'educacion', component: EducacionComponent},
  { path: 'experiencias', component: ExperienciasComponent,
      data: {outlet: 'experiencias'}
},
  {path:'portfolio', component:PortfolioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
