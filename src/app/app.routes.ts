import { Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/main/home/home.component";
import { DashboardComponent } from "./shared/components/dashboard/dashboard/dashboard.component";
import { authGuard } from "./core/guards/auth.guard";



export const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard]
    }  
];