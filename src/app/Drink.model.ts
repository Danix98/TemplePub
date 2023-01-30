
export class Drink {

    name: number; //cart
    description: string; //info
    imgpath: string; //info
    price: number; //cart

    constructor (name: number, description: string, imgpath: string, price: number) {
        this.name = name;
        this.description = description;
        this.imgpath = imgpath;
        this.price = price;
    }

}