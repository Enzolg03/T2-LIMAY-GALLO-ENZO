import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../../angular-material/material/material.module';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router,
    private authService: AuthService
  ){
  }

  submit(usuario: HTMLInputElement,
    password: HTMLInputElement
  ):void{
    if(usuario.value === 'Limay' && password.value === '12345'){
      this.authService.login(usuario.value, password.value)
      this.router.navigateByUrl("/dashboard");
    }
  }
}
