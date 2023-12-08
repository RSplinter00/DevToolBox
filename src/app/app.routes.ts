import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import("./component/home/home.component").then(c => c.HomeComponent)
  },
  {
    path: "tools",
    children: [
      {
        path: "base64-encoder",
        loadComponent: () => import("./component/tools/base64-encoder/base64-encoder.component")
          .then(c => c.Base64EncoderComponent)
      }
    ]
  },
  {
    path: "**",
    pathMatch: "full",
    loadComponent: () => import("./component/error/error.component").then(c => c.ErrorComponent)
  }
];
