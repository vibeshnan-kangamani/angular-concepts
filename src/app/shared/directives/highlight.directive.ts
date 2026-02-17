import { Directive, ElementRef, Renderer2, effect, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  color = input<string>('yellow', { alias: 'appHighlight' });
  highlightText = input<string>('black');     // text color
  highlightBorder = input<string>('transparent');

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    effect(() => {
      const color = this.color() || 'yellow';

      this.renderer.setStyle(
        this.el.nativeElement,
        'backgroundColor',
        color
      );

      this.renderer.setStyle(
        this.el.nativeElement,
        'color',
        this.highlightText()
      );

      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        `2px solid ${this.highlightBorder()}`
      );
    });
  }

  // ngOnInit() {
  //   this.renderer.setStyle(
  //     this.el.nativeElement,
  //     'backgroundColor',
  //     this.color()
  //   );
  // }
}
