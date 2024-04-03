import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  public advantages: AdvantageType[] = [
    {
      id: 1,
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      id: 2,
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      id: 3,
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      id: 4,
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },

  ];

  public products: ProductType[] = [];

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public showCart: boolean = true;
  public phone: string = '375 (29) 368-98-68';
  constructor(private productService: ProductService, private cartService: CartService) {
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  public scrollTo (target: HTMLElement): void {
    target.scrollIntoView({ behavior: "smooth"});
  }

  public addToCard (product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
    this.cartService.count++;
    this.cartService.totalCost += product.price;
    alert(`${product.title} добавлен в корзину`)
  }

  public createOrder () {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    alert('Спасибо за заказ');
    this.formValues.productTitle = '';
    this.formValues.name = '';
    this.formValues.phone = '';
  }
}
