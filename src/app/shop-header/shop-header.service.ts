
import { Drink } from "./shop-header.model";

export class ShopHeaderService {
    private drinks: Drink[] = [
        new Drink(1, 'primo lorem', '../../assets/img/birra1.jpg'),
        new Drink(2, 'secondo lorem', '../../assets/img/birra2.jpg'),
        new Drink(3, 'terzo lorem', '../../assets/img/birra3.jpg'),
        new Drink(4, 'quarto lorem', '../../assets/img/l1.jpg'),
        new Drink(5, 'quinto lorem', '../../assets/img/l2.jpg'),
        new Drink(6, 'sesto lorem', '../../assets/img/l3.jpg')
      ];



      getDrinks() {
        return this.drinks.slice();
      }
}