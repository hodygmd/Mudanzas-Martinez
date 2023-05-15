import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { VoladosComponent } from './pages/volados/volados.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    VoladosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
