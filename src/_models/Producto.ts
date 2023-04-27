export class Producto {
  private static claseID: number = 0;
  private _pedidoID: number;
  private _cantidad: number;
  private _productoID: number;

  constructor(idPedido: number, cantidad: number = 0) {
    this._productoID = ++Producto.claseID;
    this._pedidoID = idPedido;
    this._cantidad = cantidad;
  }

  public get productoID(): number {
    return this._productoID;
  }
  public set productoID(value: number) {
    this._productoID = value;
  }
  public get cantidad(): number {
    return this._cantidad;
  }
  public set cantidad(value: number) {
    this._cantidad = value;
  }
  public get pedidoID(): number {
    return this._pedidoID;
  }
  public set pedidoID(value: number) {
    this._pedidoID = value;
  }
}
