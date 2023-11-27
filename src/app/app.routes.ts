import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./component/home/home.component").then(c => c.HomeComponent)
  },
  {
    path: "**",
    pathMatch: "full",
    loadComponent: () => import("./component/error/error.component").then(c => c.ErrorComponent)
  }
];
