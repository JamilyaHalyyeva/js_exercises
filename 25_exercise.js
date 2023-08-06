let extractPrimes = num=>{
  for (let i = 2; i < num; i++) {
    if(num %i===0){
        return false;
    }
  }
    return num !==1;
}
var numbers=[1,2,3,4,5,6,7,8]
var primes=numbers.filter(extractPrimes); 

console.log('numbers: '+numbers);
console.log('primes: '+primes);