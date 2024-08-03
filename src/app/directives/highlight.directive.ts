import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue'); // Cambia el color de fondo cuando el ratón pasa
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Restaura el color de fondo cuando el ratón sale
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
