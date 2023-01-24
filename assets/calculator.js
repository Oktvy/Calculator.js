class Calculator{
   constructor(totalnum){
    this.value=totalnum;
   }
   plus(num){
    this.value += num;
    return this
   }
   minus(num){
    this.value -= num;
    return this
   }
   multiply(num){
    this.value *= num;
    return this
   }
   divide(num){
    this.value /= num;
    return this 
   }
}
const result=new
 Calculator(50).plus(6).minus(30).multiply(3).divide(2)
console.log(result);
