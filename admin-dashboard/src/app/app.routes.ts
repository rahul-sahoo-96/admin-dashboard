import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:()=>import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
        canActivate:[authGuard]
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:HomeComponent
    }
];
