import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent:()=>import('./dashboard/dashboard.component').then(m=>m.DashboardComponent),
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    }
];
