import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  getProducts():ProductType[] {
    return [
      {
        img: 'macaroon1.png',
        title: 'Макарун с малиной',
        price: 1.70
      },
      {
        img: 'macaroon2.png',
        title: 'Макарун с манго',
        price: 1.70
      },
      {
        img: 'macaroon3.png',
        title: 'Пирог с ванилью',
        price: 1.70
      },
      {
        img: 'macaroon4.png',
        title: 'Пирог с фисташками',
        price: 1.70
      }
    ]
  }


}
