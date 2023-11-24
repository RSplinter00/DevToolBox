import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatListModule} from "@angular/material/list";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-list',
  standalone: true,
  imports: [CommonModule, MatListModule, RouterLink],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss'
})
export class NavListComponent {
  navItems: { name: string, link: string }[] = [];
}