import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 public phone: string = '+375 (29) 368-98-68';
 public instagramIcon = {
   img: 'instagram.png',
   description: 'Мы в Instagram'
 }
  constructor() { }

  ngOnInit(): void {
  }

}
