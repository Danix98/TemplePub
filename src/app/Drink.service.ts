
import { Drink } from "./Drink.model";

export class DrinkService {
  private drinks: Drink[] = [
    new Drink("prima birra", 'primo lorem', '../../assets/img/birra1.jpg', 10),
    new Drink("seconda birra", 'secondo lorem', '../../assets/img/birra2.jpg', 19),
    new Drink("terza birra", 'terzo lorem', '../../assets/img/birra3.jpg', 72),
    new Drink(4, 'quarto lorem', '../../assets/img/l1.jpg', 99),
    new Drink(5, 'quinto lorem', '../../assets/img/l2.jpg', 120),
    new Drink(6, 'sesto lorem', '../../assets/img/l3.jpg', 150)
  ];

  status: string|number;
  ndStatus: string|number;

  getDrinks = () => {
    return this.drinks;
  }
}