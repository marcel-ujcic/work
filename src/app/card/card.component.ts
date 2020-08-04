import { Component, OnInit } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  // public itemsInCart: any = [];

  static vsota = 0; // vsota vseh izdelkov v košari
  static itemsInCart: any = []; // array vseh izdelkov v vozičku
  public vVuzu: any = CardComponent.itemsInCart;
// doda v array oz voziček
  static clicked(item: string) {
    CardComponent.itemsInCart.push(item);
    // document.getElementById('inbasket').innerHTML = this.itemsInCart.length;
  }
  // vrne array izdelkov v vozičku
  get staticItemsArray() {
    return CardComponent.itemsInCart;
  }
  static sestevaj(cena: number) {
    CardComponent.vsota += cena;
  }
  get getShiping() {
    return this.vVuzu.length * 10;
  }
  get getVsota() {
    return CardComponent.vsota;
  }
  ClearCard() {
    CardComponent.itemsInCart = [];
    this.vVuzu = [];
    CardComponent.vsota = 0;
    alert('Payment successful');
  }
  deleteItem(item: any) {
    const index: number = this.vVuzu.indexOf(item);
    if (index !== -1) {
      this.vVuzu.splice(index, 1);
    }
    for (const i of item.listOfPlans) {
      CardComponent.vsota -= i.price.amount;
    }
  }
  ngOnInit() {
  }
}
