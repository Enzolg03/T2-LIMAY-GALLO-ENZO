import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router, 
    private route: ActivatedRoute,
    private authService: AuthService){}
  
    salir(): void{
      this.authService.logout();
      this.router.navigateByUrl("/login")
    }
  
    irHome():void{
      this.router.navigate(["home"],{relativeTo: this.route})
    }
    irPre02(){
      this.router.navigate(["pre02"],{relativeTo: this.route})
    }
    irPre03(){
      this.router.navigate(["pre03"],{relativeTo: this.route})
    }
    irPre04(){
      this.router.navigate(["pre04"],{relativeTo: this.route})
    }
}

