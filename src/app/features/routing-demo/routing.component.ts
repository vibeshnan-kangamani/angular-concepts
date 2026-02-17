import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Routing Demo</h2>

    <a routerLink="child-a">Child A</a> |
    <a routerLink="child-b">Child B</a>

    <router-outlet></router-outlet>
  `
})
export class RoutingComponent {}
