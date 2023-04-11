import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetallesClienteComponent } from './DetallesCliente/DetallesCliente.component';
import { ListaArticulosComponent } from './ListaArticulos/ListaArticulos.component';
import { PiePaginaComponent } from './PiePagina/PiePagina.component';


@NgModule({
  declarations: [									
    AppComponent,
      DetallesClienteComponent,
      ListaArticulosComponent,
      PiePaginaComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
