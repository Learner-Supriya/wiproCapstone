export class Orders {
    constructor(
    public orderId:number,
	public userMail:string,
	public item:string,
	public price:number,
	public createdDate:Date
    ){}
}
