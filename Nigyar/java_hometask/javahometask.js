
// const a= +prompt('Please enter the number A:');
// const b= +prompt('Please enter the number B:');
// console.log(a);
// console.log(b);
// const result=a/b;
// const result1=a%b;
// console.log(result);
// console.log(result1);


// let a= +prompt('Please enter the number A:');
// let b= +prompt('Please enter the number B:');
// console.log(a);
// console.log(b);
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);

// const a = +prompt('Please enter the number A:');
// const b = +prompt('Please enter the number B:');
// console.log(a);
// console.log(b);
// let result=' ';
// if(a>b){
//     result=a+b;
// }
// else if(a==b){
//     result=a*b;
// }
// else{
//     result=a-b;
// }
// console.log(`Our result is ${result}`);

const a = +prompt('Please enter the number A:');
console.log(a);
let result1=' ';
let result2=' ';
const b2=a%10;
const b1=a-b2;
if(b1==20){
    result1='twenty';
  }
  else if(b1==30){
      result1='thirty';
  }
  else if(b1==40){
      result1='forty';
  }
  else if(b1==50){
    result1='fifty';
  }
  else if(b1==60){
    result1='sixty';
  }
  else if(b1==70){
    result1='seventy';
  }
  else if(b1==80){
    result1='eighty';
  }
  else {
    result1='ninety';
  }
 

if(b2==1){
    result2='one';
  }
  else if(b2==3){
      result2='three';
  }
  else if(b2==0){
    result2=' ';
}
  else if(b2==2){
    result2='two';
}
  else if(b2==4){
      result2='four';
  }
  else if(b2==5){
    result2='five';
  }
  else if(b2==6){
    result2='six';
  }
  else if(b2==7){
    result2='seven';
  }
  else if(b2==8){
    result2='eight';
  }
  else {
    result2='ninety';
  }
  console.log(`${result1} ${result2}`);


// const a = +prompt('Please enter the number A:');
//  const b = +prompt('Please enter the number B:');
//  const c = +prompt('Please enter the number C:');
//  console.log(a);
//  console.log(b);
//  console.log(c);
//  const x=(c-b)/a;
//  console.log(x);





// const a = +prompt('Please enter the number A:');
// const b = +prompt('Please enter the number B:');
// const c = +prompt('Please enter the number C:');
// console.log(a);
// console.log(b);
// console.log(c);
// const discriminant=b*b-4*a*c;
// let x1= '';
// let x2= '';
// if(discriminant>0){
//     x1= (-b+Math.sqrt(discriminant))/2*a;
//     x2= (-b-Math.sqrt(discriminant))/2*a; 
// }
// else if(discriminant==0){
//      x1=x2=-b/2*a;
// }
// else{
//     x1=x2='There is no roots of this equation';
// }
// console.log(`Roots of this equation are:${x1} ,${x2}`);