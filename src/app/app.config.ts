import {ApplicationConfig} from "@angular/core";
import {provideRouter, TitleStrategy} from "@angular/router";

import {routes} from "./app.routes";
import {provideNoopAnimations} from "@angular/platform-browser/animations";
import {PageTitleStrategy} from "./strategy/page-title.strategy";
import {HIGHLIGHTJS_CONFIG, HighlightJsConfig} from "ngx-highlight-js"

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideNoopAnimations(),
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy
    },
    {
      provide: HIGHLIGHTJS_CONFIG,
      useValue: {
        lang: "json",
        mode: "simple",
      } as HighlightJsConfig
    },
  ]
};
