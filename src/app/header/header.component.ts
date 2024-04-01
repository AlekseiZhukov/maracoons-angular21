import {Component, Input, OnInit} from '@angular/core';
import {LinkType} from "../types/link.type";
import {ElementService} from "../services/element.service";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() public productsAnchor!: HTMLElement;
  public phone: string = '+375 (29) 368-98-68';
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

  private element: HTMLElement | null = null;

  isMenuOpen: boolean = false;

  constructor(private  elementService: ElementService) { }

  ngOnInit(): void {
    this.elementService.getElement().subscribe(element => this.element = element)
  }

  public toggleMenu (isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }

  public scrollTo (id: string): void {
    this.isMenuOpen = false;
    /*const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth"});*/
    console.log(this.element)
  const elementId = this.element?.getAttribute('id')
    if (elementId === id) {
      this.element?.scrollIntoView({ behavior: "smooth"})
    }
  }

}
