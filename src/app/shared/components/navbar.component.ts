import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="nav">
      <a routerLink="/signals" routerLinkActive="active">Signals</a>
      <a routerLink="/directives" routerLinkActive="active">Directives</a>
      <a routerLink="/pipes" routerLinkActive="active">Pipes</a>
      <a routerLink="/routing" routerLinkActive="active">Routing</a>
      <a routerLink="/guard" routerLinkActive="active">Guard</a>
      <a routerLink="/http" routerLinkActive="active">HTTP</a>
    </nav>
  `,
  styles: [`
    .nav { display: flex; gap: 15px; padding: 10px; background:#111; }
    a { color: white; text-decoration:none; }
    .active { color: #00ffcc; font-weight: bold; }
  `]
})
export class NavbarComponent {}
