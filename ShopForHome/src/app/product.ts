export class Product {
    constructor(
        public productId:String,
        public productName:string,
        public productPrice: number,
        public url:string,
        public productCategory:string,
        public stocks:number
    ){}
}
