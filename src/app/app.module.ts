import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { FormularioPedidoComponent } from './formulario-pedido/formulario-pedido.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';
import { GestionPedidosService } from 'src/_services/gestion-pedidos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaPedidosComponent,
    FormularioPedidoComponent,
    FormularioProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GestionPedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
