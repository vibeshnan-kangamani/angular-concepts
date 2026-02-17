import { Component, signal } from '@angular/core';
import { HighlightDirective } from '../../shared/directives/highlight.directive';

@Component({
  standalone: true,
  imports: [HighlightDirective],
  template: `
    <h2>Directive Demo</h2>

    <p appHighlight>Default Highlight</p>
    <p [appHighlight]="'lightblue'" [highlightText]="'white'"
    [highlightBorder]="'blue'">Custom Highlight</p>
  `
})
export class DirectivesComponent {
}
