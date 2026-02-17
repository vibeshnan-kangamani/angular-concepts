import { Component, signal, computed } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <h2>Signals Demo</h2>

    <p>Count: {{ count() }}</p>
    <p>Double: {{ doubleCount() }}</p>

    <button (click)="increment()">Increment</button>
  `
})
export class SignalsComponent {

  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(v => v + 1);
  }
}
