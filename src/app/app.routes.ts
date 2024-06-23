import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuard } from './auth.guard';
import { Pre02Component } from './dashboard/pre02/pre02.component';
import { Pre04Component } from './dashboard/pre04/pre04.component';
import { Pre03Component } from './dashboard/pre03/pre03.component';
export const routes: Routes = [
    { path: "login", component: LoginComponent},
    { path: "dashboard", component: DashboardComponent,canActivate: [authGuard],
        children: [
            { path: "pre02", component: Pre02Component},
            { path: "pre03", component: Pre03Component},
            { path: "pre04", component: Pre04Component},
        ]
    },
    { path: "", redirectTo: "login", pathMatch: "full" },
];
