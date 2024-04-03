import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() public phone: string = '';
 public instagramIcon = {
   img: 'instagram.png',
   description: 'Мы в Instagram'
 }
  constructor() { }

  ngOnInit(): void {
  }

}
