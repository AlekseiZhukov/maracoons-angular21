import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[coolButton]'
})
export class CoolButtonDirective {
  @Input() backgroundColorDefault: string = 'linear-gradient( 90deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%)';
  @Input() backgroundColorIsMouseenter: string = 'linear-gradient( 90deg, rgb(215,72,92) 0%, rgb(113,8,30) 100%)';
  constructor(private el: ElementRef, private rend: Renderer2) {

  }

  @HostListener('mouseenter')
  onMouseenter() {
    this.changeElBgColor( this.backgroundColorIsMouseenter );
  }
  @HostListener('mouseleave')
  onMouseleave() {
    this.changeElBgColor( this.backgroundColorDefault );
  }
  changeElBgColor (color: string) {
    this.rend.setStyle(this.el.nativeElement, 'background', color)
  }
}
