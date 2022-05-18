import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighl]'
})
export class HighlighlDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.color="red"
   }

}
