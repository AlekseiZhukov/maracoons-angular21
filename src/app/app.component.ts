import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ElementService} from "./services/element.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('orderElement', { static: true}) private orderRef!: ElementRef<HTMLElement>
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

  public products: ProductType[] = [
    {
      img: 'macaroon1.png',
      title: 'Макарун с малиной',
      price: '1,70'
    },
    {
      img: 'macaroon2.png',
      title: 'Макарун с манго',
      price: '1,70'
    },
    {
      img: 'macaroon3.png',
      title: 'Пирог с ванилью',
      price: '1,70'
    },
    {
      img: 'macaroon4.png',
      title: 'Пирог с фисташками',
      price: '1,70'
    }
  ]

  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public showPresent: boolean = true;

  constructor(private elementService: ElementService) {
  }
  ngOnInit(): void {
    //console.log(this.orderRef.nativeElement)
    this.elementService.setElement(this.orderRef.nativeElement)
  }

  public scrollTo (target: HTMLElement): void {
    target.scrollIntoView({ behavior: "smooth"});
  }

  public addToCard (product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
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
