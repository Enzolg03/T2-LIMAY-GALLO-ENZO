import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "dashboard", component: DashboardComponent},
    { path: "", redirectTo: "login", pathMatch: "full" },
];
