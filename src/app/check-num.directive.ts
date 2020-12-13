import { Directive, ElementRef, OnInit, HostListener,
      Input } from '@angular/core';

@Directive({
  selector: '[appCheckNum]'
})
export class CheckNumDirective implements OnInit {
  @Input() defaultValue: any;
  @Input() successColor: any;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.value = this.defaultValue;
    this.ValidateNumber();
  }

  @HostListener('keyup') onkeyup() {
    this.ValidateNumber();
  }

  private ValidateNumber() {
    if (this.el.nativeElement.value < 0 || this.el.nativeElement.value > 5) {
      this.el.nativeElement.style.backgroundColor = '#FFCCCB';
    } else {
      this.el.nativeElement.style.backgroundColor = this.successColor;
    }
  }
}
