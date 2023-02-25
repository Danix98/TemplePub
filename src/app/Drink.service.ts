
import { Injectable } from "@angular/core";

import { Drink } from "./Drink.model";
import { DrinkDescService } from "./Drink-desc.service";

@Injectable()

export class DrinkService {

  constructor(private drinkdescService: DrinkDescService) { }

  private drinks: Drink[] = [
    new Drink("birra", this.drinkdescService.descUno, '../../assets/img/birra1.jpg', 10),
    new Drink("seconda birra", this.drinkdescService.descDue, '../../assets/img/birra2.jpg', 19),
    new Drink("terza birra", this.drinkdescService.descTre, '../../assets/img/birra3.jpg', 72),
    new Drink("drink", this.drinkdescService.descQua, '../../assets/img/l1.jpg', 99),
    new Drink("secondo drink", this.drinkdescService.descCin, '../../assets/img/l2.jpg', 120),
    new Drink("terzo drink", this.drinkdescService.descSei, '../../assets/img/l3.jpg', 150)
  ];

  stStatus: any; //string|number - (se 'number' => Drink[] togliere la pipe html 'uppercase')
  ndStatus: any; //string|number - (se 'number' => Drink[] togliere la pipe html 'uppercase')

  getDrinks = () => {
    return this.drinks;
  }

}