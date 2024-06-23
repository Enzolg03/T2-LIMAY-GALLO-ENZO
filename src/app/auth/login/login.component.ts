import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router){
  }

}
