import { Component } from '@angular/core';
import { CapitalizePipe } from '../../shared/pipes/capitalize.pipe';

@Component({
  standalone: true,
  imports: [CapitalizePipe],
  template: `
    <h2>Pipe Demo</h2>

    <p>{{ 'angular is powerful' | capitalize }}</p>
  `
})
export class PipesComponent {}
