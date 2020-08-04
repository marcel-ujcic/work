import { Component, OnInit } from '@angular/core';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  // dobi število izdelkov v košari
  get staticNmbr() {
    return CardComponent.itemsInCart.length.toString();
  }
  ngOnInit() {
  }
}
