class car{
    color:string;
    constructor(color:string){
        this.color=color;
    }
    display():void{
        console.log("car color is : "+this.color);
    }
}
let obj = new car("black");
obj.display();
