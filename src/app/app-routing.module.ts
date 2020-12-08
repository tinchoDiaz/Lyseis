import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent} from './pages/main/main.component';
import { NosotrosComponent} from './pages/nosotros/nosotros.component';
import { ServiciosComponent} from './pages/servicios/servicios.component';
import { PortfolioComponent} from './pages/portfolio/portfolio.component';



const routes: Routes = [
  /*Äca van todas las rutas que la aplicacion va a tener*/
  {path: 'inicio', component: MainComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
