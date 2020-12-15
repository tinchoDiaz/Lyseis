import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
/*Lo uso en footer-component*/
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
/*Lo uso en footer-component*/

/*Lo usa para comunicarme con PHP*/
import { HttpClientModule } from '@angular/common/http';
/*Lo usa para comunicarme con PHP*/

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    NosotrosComponent,
    ServiciosComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
