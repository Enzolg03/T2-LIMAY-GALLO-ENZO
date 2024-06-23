import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pre03',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pre03.component.html',
  styleUrl: './pre03.component.css'
})
export class Pre03Component {
  total : number;
  precio: number;
  calcularTotal(cantidad: HTMLInputElement){
    let cant = Number(cantidad.value)
    let total: number;
    if(cant < 5){
      this.precio = 800
    }else
        if(cant >= 5){
          this.precio = 700
      }
    this.total = total = cant * this.precio;
  }
}
