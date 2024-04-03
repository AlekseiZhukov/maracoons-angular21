import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
