import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/_models/Producto';
import { GestionPedidosService } from 'src/_services/gestion-pedidos.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {

  private _formulario: FormGroup | undefined;
  private _producto: Producto | undefined;
  private _idPedido : number | undefined;

  constructor(
    private servicio : GestionPedidosService,
    private constructorForms : FormBuilder,
    private rutaActiva : ActivatedRoute,
    private enrutador : Router
    ){}

  public get formulario(): FormGroup | undefined {
    return this._formulario;
  }
  public set formulario(value: FormGroup | undefined) {
    this._formulario = value;
  }
  public get producto(): Producto | undefined {
    return this._producto;
  }
  public set producto(value: Producto | undefined) {
    this._producto = value;
  }

  ngOnInit(): void {
    this.rutaActiva.queryParams.subscribe((valor) => {
      this._idPedido = valor['id'];
    })
    if (typeof this._idPedido == 'undefined'){
      alert("Error al recibir ID de pedido, regresando al inicio")
      this.enrutador.navigate(['']);
      return;
    }
    this._producto = new Producto(this._idPedido);
    this._formulario = this.constructorForms.group({
      'idProducto' : new FormControl(this._producto.productoID),
      'cantidad' : new FormControl(this._producto.cantidad)
    });
  }

  mandarPedido(){
    this._producto!.cantidad = this._formulario?.value['cantidad'];
    this._producto!.productoID = this._formulario?.value['idProducto'];
    this.servicio.productosTemp.push(this._producto!)
    this.enrutador.navigate(['/form-pedido']);
    this._formulario!.reset();
  }


}
