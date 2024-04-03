import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  get product(): ProductType {
    return this._product
  };
  set product(param: ProductType) {
    param.title = param.title.toString();
    this._product = param;
  }
  private _product: ProductType = {} as ProductType;

  @Output() addToOrderEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();

  constructor() {

  }

  ngOnInit(): void {
  }

  addProductToOrder() {
    this.addToOrderEvent.emit(this._product)
  }
}
