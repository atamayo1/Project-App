import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

describe('HighlightDirective', () => {
  let directive: HighlightDirective;
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;

  beforeEach(() => {
    // Crea mocks para ElementRef y Renderer2
    mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle']);

    // Configura el módulo de pruebas
    TestBed.configureTestingModule({
      providers: [
        HighlightDirective,
        { provide: ElementRef, useValue: mockElementRef },
        { provide: Renderer2, useValue: mockRenderer }
      ]
    });

    // Obtén una instancia de la directiva
    directive = TestBed.inject(HighlightDirective);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should call Renderer2 setStyle on mouse enter', () => {
    directive.onMouseEnter();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'backgroundColor', 'yellow');
  });

  it('should call Renderer2 setStyle on mouse leave', () => {
    directive.onMouseLeave();
    expect(mockRenderer.setStyle).toHaveBeenCalledWith(mockElementRef.nativeElement, 'backgroundColor', null);
  });
});
