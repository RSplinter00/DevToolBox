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
        title: "Base64 Encoder",
        loadComponent: () => import("./component/tools/base64-encoder/base64-encoder.component")
          .then(c => c.Base64EncoderComponent)
      },
      {
        path: "diff-viewer",
        title: "Diff Viewer",
        loadComponent: () => import("./component/tools/diff-viewer/diff-viewer.component")
          .then(c => c.DiffViewerComponent)
      }
    ]
  },
  {
    path: "**",
    pathMatch: "full",
    title: "Page not found",
    loadComponent: () => import("./component/error/error.component").then(c => c.ErrorComponent)
  }
];
