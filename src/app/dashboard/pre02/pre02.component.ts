import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pre02',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pre02.component.html',
  styleUrl: './pre02.component.css'
})
export class Pre02Component {
  total : number;
  calcularTotal(precio: HTMLInputElement, cantidad : HTMLInputElement){
    let pre = Number(precio.value)
    let cant = Number(cantidad.value)
    let total =  pre * cant;
    if(cant > 20){
      total = total - (total* 0.1)
    }else
        if(cant >= 10){
          total = total - (total * 0.05)
        }
    this.total = total
  }
}
