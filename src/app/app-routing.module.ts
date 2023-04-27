import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPedidosComponent } from './lista-pedidos/lista-pedidos.component';
import { FormularioPedidoComponent } from './formulario-pedido/formulario-pedido.component';
import { FormularioProductoComponent } from './formulario-producto/formulario-producto.component';

const routes: Routes = [
  { path: '', component: ListaPedidosComponent, children : [
    { path: 'form-pedido', component: FormularioPedidoComponent, children : [
      { path: 'form-producto', component: FormularioProductoComponent },
    ] },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
