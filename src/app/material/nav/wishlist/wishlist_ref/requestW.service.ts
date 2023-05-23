
export class RequestWService {
    
    //attiva wishlist
        check: boolean = false;

    list_data : string[] = [];


    constructor( ) { }

    sendOnList = () => {
        return this.list_data;
    }

}
