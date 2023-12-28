import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatListModule} from "@angular/material/list";
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: "app-nav-list",
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLink, MatIconModule],
  templateUrl: "./nav-list.component.html",
  styleUrl: "./nav-list.component.scss"
})
export class NavListComponent {
  navItems: { name: string, link: string, tag: string }[] = [
    {name: "Base64 Encoder", link: "/tools/base64-encoder", tag: "base64-encoder"},
    {name: "Diff Viewer", link: "/tools/diff-viewer", tag: "diff-viewer"},
    {name: "JSON Validator", link: "/tools/json-validator", tag: "json-validator"},
  ];
}
