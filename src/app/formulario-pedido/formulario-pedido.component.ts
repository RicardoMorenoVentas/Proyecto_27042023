import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Forma_pago } from 'src/_models/Enums';
import { Pedido } from 'src/_models/Pedido';
import { GestionPedidosService } from 'src/_services/gestion-pedidos.service';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrls: ['./formulario-pedido.component.css']
})
export class FormularioPedidoComponent implements OnInit {


  private _formulario: FormGroup | undefined;
  private _pedido: Pedido | undefined;
  private _formasPagoArr: string[] = Object.values(Forma_pago).map((valor) => valor as string);


  constructor(
    private _servicio: GestionPedidosService,
    private enrutador: Router,
    private fb: FormBuilder
  ) { }

  public get pedido(): Pedido | undefined {
    return this._pedido;
  }
  public set pedido(value: Pedido | undefined) {
    this._pedido = value;
  }
  public get formulario(): FormGroup | undefined {
    return this._formulario;
  }
  public set formulario(value: FormGroup | undefined) {
    this._formulario = value;
  }
  public get formasPagoArr(): string[] {
    return this._formasPagoArr;
  }
  public set formasPagoArr(value: string[]) {
    this._formasPagoArr = value;
  }
  public get servicio(): GestionPedidosService {
    return this._servicio;
  }
  public set servicio(value: GestionPedidosService) {
    this._servicio = value;
  }

  ngOnInit(): void {
    this._pedido = new Pedido();
    this._formulario = this.fb.group({
      'clienteID': new FormControl(this._pedido.clienteID),
      'formaPago': new FormControl(this._pedido.formaPago),
      'direccion': new FormControl(this._pedido.direccion)
    });

  }

  mandarPedido() {
    if (this._servicio.productosTemp.length < 1){
      alert("¡No hay productos en el pedido!")
      this.resetFunction();
    }
    this.servicio.pedidosObservable.subscribe((pedidos) => {
      this._pedido!.clienteID = this._formulario!.value['clienteID'];
      this._pedido!.formaPago = this._formulario!.value['formaPago'];
      this._pedido!.direccion = this._formulario!.value['direccion'];
      pedidos.push(this._pedido!);
    });
    this._servicio.productosObservable.subscribe((productos) => {
      // Esto
      this._servicio.productosTemp.map(producto => productos.push(producto));
      // Es lo mismo a esto
      // productos.push(...this._servicio.productosTemp);
      console.log(productos);
    });
    this.resetFunction();
  }

  resetFunction(){
    this._servicio.productosTemp = [];
    this._formulario?.reset();
    this.enrutador.navigate(['']);
  }
}
