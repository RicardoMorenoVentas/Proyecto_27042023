import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pedido } from 'src/_models/Pedido';
import { Producto } from 'src/_models/Producto';

@Injectable({
  providedIn: 'root'
})
export class GestionPedidosService {

  private _pedidos: Array<Pedido> = [];
  private _pedidosObservable: Observable<Pedido[]> = of(this._pedidos);

  private _productos: Array<Producto> = [];
  private _productosObservable: Observable<Producto[]> = of(this._productos);

  private _productosTemp: Array<Producto> = [];

  constructor() { }

  public get pedidosObservable(): Observable<Pedido[]> {
    return this._pedidosObservable;
  }
  public set pedidosObservable(value: Observable<Pedido[]>) {
    this._pedidosObservable = value;
  }
  public get productosObservable(): Observable<Producto[]> {
    return this._productosObservable;
  }
  public set productosObservable(value: Observable<Producto[]>) {
    this._productosObservable = value;
  }
  public get productosTemp(): Array<Producto> {
    return this._productosTemp;
  }
  public set productosTemp(value: Array<Producto>) {
    this._productosTemp = value;
  }
}
