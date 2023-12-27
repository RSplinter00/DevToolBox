import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title: string | undefined = this.buildTitle(routerState);
    this.title.setTitle(`${!!title ? title + ' - ' : ''}Dev's ToolBox`);
  }
}
