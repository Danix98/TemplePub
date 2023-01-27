
import { Drink } from "./Drink.model";

export class DrinkService {
     private drinks: Drink[] = [
        new Drink(1, 'primo lorem', '../../assets/img/birra1.jpg', 10),
        new Drink(2, 'secondo lorem', '../../assets/img/birra2.jpg', 20),
        new Drink(3, 'terzo lorem', '../../assets/img/birra3.jpg', 30),
        new Drink(4, 'quarto lorem', '../../assets/img/l1.jpg', 40),
        new Drink(5, 'quinto lorem', '../../assets/img/l2.jpg', 50),
        new Drink(6, 'sesto lorem', '../../assets/img/l3.jpg', 60)
      ];

      getDrinks = () => {
        return this.drinks;
      }
}