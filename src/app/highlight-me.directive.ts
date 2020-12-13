import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightMe]'
})
export class HighlightMeDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
