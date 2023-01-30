
import { EventEmitter, Injectable } from "@angular/core";

import { Drink } from "./Drink.model";

@Injectable()

export class DrinkService {
     private drinks: Drink[] = [
        new Drink(1, 'primo lorem', '../../assets/img/birra1.jpg', 10.50),
        new Drink(2, 'secondo lorem', '../../assets/img/birra2.jpg', 19.99),
        new Drink(3, 'terzo lorem', '../../assets/img/birra3.jpg', 72.49),
        new Drink(4, 'quarto lorem', '../../assets/img/l1.jpg', 99.99),
        new Drink(5, 'quinto lorem', '../../assets/img/l2.jpg', 120.00),
        new Drink(6, 'sesto lorem', '../../assets/img/l3.jpg', 150.49)
      ];

      drinkStatus = new EventEmitter<number>();

      getDrinks = () => {
        return this.drinks;
      }
}