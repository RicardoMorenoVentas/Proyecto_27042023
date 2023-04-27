import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/_models/Pedido';
import { GestionPedidosService } from 'src/_services/gestion-pedidos.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  private _listaPedidos: Array<Pedido> = [];

  constructor(private servicio : GestionPedidosService){}

  public get listaPedidos(): Array<Pedido> {
    return this._listaPedidos;
  }
  public set listaPedidos(value: Array<Pedido>) {
    this._listaPedidos = value;
  }

  ngOnInit(): void {
    this.servicio.pedidosObservable.subscribe((pedidos) => {
      this._listaPedidos = pedidos;
    })
  }
}
