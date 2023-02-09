
import { Injectable } from "@angular/core";

import { Drink } from "./Drink.model";
import { DrinkDescService } from "./Drink-desc.service";

@Injectable()

export class DrinkService {

  private drinks: Drink[] = [
    new Drink("prima birra", this.drinkdescService.descUno, '../../assets/img/birra1.jpg', 10),
    new Drink("seconda birra", this.drinkdescService.descDue, '../../assets/img/birra2.jpg', 19),
    new Drink("terza birra", this.drinkdescService.descTre, '../../assets/img/birra3.jpg', 72),
    new Drink("quarto drink", this.drinkdescService.descQua, '../../assets/img/l1.jpg', 99),
    new Drink("quinto drink", this.drinkdescService.descCin, '../../assets/img/l2.jpg', 120),
    new Drink("sesto drink", this.drinkdescService.descSei, '../../assets/img/l3.jpg', 150)
  ];

  constructor(private drinkdescService: DrinkDescService) {}


  status: string|number;
  ndStatus: string|number;

  getDrinks = () => {
    return this.drinks;
  }
}