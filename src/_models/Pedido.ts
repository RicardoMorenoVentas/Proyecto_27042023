import { Forma_pago } from "./Enums";

export class Pedido {
  private static idClase: number = 0;
  private _pedidoID: number;
  private _direccion: string;
  private _clienteID: number;
  private _formaPago: Forma_pago;

  constructor(dir: string = "", idCli: number = 0, formaPago: Forma_pago = Forma_pago["Con tarjeta"]) {
    this._pedidoID = ++Pedido.idClase;
    this._direccion = dir;
    this._clienteID = idCli;
    this._formaPago = formaPago;
  }

  public get formaPago(): Forma_pago {
    return this._formaPago;
  }
  public set formaPago(value: Forma_pago) {
    this._formaPago = value;
  }
  public get clienteID(): number {
    return this._clienteID;
  }
  public set clienteID(value: number) {
    this._clienteID = value;
  }
  public get direccion(): string {
    return this._direccion;
  }
  public set direccion(value: string) {
    this._direccion = value;
  }
  public get pedidoID(): number {
    return this._pedidoID;
  }
  public set pedidoID(value: number) {
    this._pedidoID = value;
  }
}
