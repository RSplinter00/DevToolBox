import {RouterStateSnapshot, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {Injectable} from "@angular/core";

@Injectable()
export class PageTitleStrategy extends TitleStrategy {
  private readonly applicationName: string = "Dev's ToolBox";

  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title: string | undefined = this.buildTitle(routerState);
    if (title == null || title == "") {
      this.title.setTitle(this.applicationName)
    } else {
      this.title.setTitle(`${title} | ${this.applicationName}`);
    }
  }
}
