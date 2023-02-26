
export class Drink {

    imgpath: string; //info
    description: string; //info
    name: string|number; //cart
    price: number; //cart

    constructor ( name: string|number, description: string, imgpath: string, price: number ) {
        this.name = name;
        this.description = description;
        this.imgpath = imgpath;
        this.price = price;
    }

}