class car{
    color:string;
    constructor(color:string){
        this.color=color;
    }
}
class company extends car{
    brand:string;
    constructor(color:string,brand:string){
        super(color);
        this.brand=brand;
    }      
}
class price extends company{
    price:number;
    constructor(color:string,brand:string,price:number){
        super(color,brand);
        this.price=price;
    }
    display():void{
        console.log("car color is : "+this.color);
        console.log("car brand is : "+this.brand);
        console.log("car price is : "+this.price);
    }
}
let obj = new price("black","audi",9500000);
obj.display();
