
class Animal{
    cat():void{
        console.log("Eating");
    }
}
class Dog extends Animal{
    bark():void{
        console.log("Barking");
    }
}
class Pup extends Dog{
    weep():void{
        console.log("weeping");
    }
}
let obj1 = new Pup();
obj1.cat();
obj1.bark();
obj1.weep();
