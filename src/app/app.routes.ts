import { Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/main/home/home.component";



export const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
      
];