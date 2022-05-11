class promptset{
      var x = prompt("enter a number:");
      let a : number = parseInt(x)
      let y = prompt("enter another number:");
      var b:number=parseInt(y)
      var op = prompt("enter an operator:");

      switch(op){
    case "+":
    console.log(a+b);
    break
    
    case "-":
    console.log(a-b);
    break
    
    case "*":
    console.log(a*b);
    break
    
    default:
    console.log("enter a valid operator");
    }
}
