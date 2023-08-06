let  getProduct  = (s)=>{
    p=1;
    for(let i = 0; i < s.length; i+=1) {
       p*=s[i];
}
return p;
}

console.log(getProduct([1,2,3,4,]));
console.log(getProduct([1,2,3,4,5]));
console.log(getProduct([1,2,3,4,5,6]));