import {Component, Input} from '@angular/core';
import {LinkType} from "../../types/link.type";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  get elements() {
    return this._elements;
  }
  set elements(elements:HTMLElement[]) {
    this._elements = elements;
  }
  @Input() public phone: string = '';
  private _elements: HTMLElement[] = [];


  public links: LinkType[] = [
    {
      title: 'Пироженки',
      href: 'products'
    },
    {
      title: 'О нас',
      href: 'advantages'
    },
    {
      title: 'Оформить заказ',
      href: 'order'
    }
    ];

  isMenuOpen: boolean = false;

  constructor() { }

  public toggleMenu (isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }

  public scrollTo (href: string): void {
    this.isMenuOpen = false;
    this.elements.forEach( (item: HTMLElement) => {
      if (item.id === href) {
        item.scrollIntoView({ behavior: "smooth"})
      }
    })
  }

}
