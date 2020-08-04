import {Component, OnInit} from '@angular/core';
import {CardComponent} from '../card/card.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() {}
  // vrne produkt
  get getproduct() {
    return DetailsComponent.product;
  }

  static product: any; // produkt
  static izdelki = 0; // število izdelkov
  // produktu dodeli vrednost izbranega izdelka za prikaz na strani detail
  static pridobiProdukt(item: any) {
    DetailsComponent.product = item;
  }
  // doda v voziček izdelek
  Callclicked(item: any) {
    CardComponent.clicked(item);
    for (const i of item.listOfPlans) {
      CardComponent.sestevaj(i.price.amount);
    }
  }
  ngOnInit() {
  }
}
