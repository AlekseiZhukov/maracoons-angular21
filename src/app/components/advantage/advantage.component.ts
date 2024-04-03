import {Component, Input, OnInit} from '@angular/core';
import {AdvantageType} from "../../types/advantage.type";

@Component({
  selector: 'advantage-component',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
  @Input()
  get advantage(): AdvantageType {
    return this._advantage
  };
  set advantage(param: AdvantageType) {
    param.title = param.title.toString();
    this._advantage = param;
  }

  private _advantage: AdvantageType = {} as AdvantageType;
  constructor() { }

  ngOnInit(): void {
  }

}
