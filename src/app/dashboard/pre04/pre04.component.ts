import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-pre04',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pre04.component.html',
  styleUrl: './pre04.component.css'
})
export class Pre04Component {
  total : number;
  calcularTotal(precio: HTMLInputElement){
    let pre = Number(precio.value)
    if(pre > 200){
      this.total = pre - (pre* 0.2)
    }else{
      this.total = pre
    }
  }
}
