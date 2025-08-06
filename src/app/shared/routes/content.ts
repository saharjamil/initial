import { Routes } from "@angular/router";
import { HomeComponent } from "../../modules/home/home.component";

export const content: Routes = [
    { path: 'home', loadChildren: () => import('../../modules/home/home.module').then(m => m.HomeModule) },

]