 ///function->  block of code that perform certain task///

 function sayHello(){
    console.log("hey Purnima");
 }
 sayHello();  // calling of function///

 ////parametarized funstions
 function add(a,b){
    console.log(a+b);
 }
 add(5,2);
 add(10,10);
 add(9,0);

 function mul(a,b){
    // console.log(a*b);  //not a good practice
    return a*b;   
 }
  let a= mul(2,3);
  console.log('this is the result',a);

//unlimited arguments accept
function addNumbers(){
    let ans =0
    for(let i=0;i<arguments .length;i=i+1){
        ans= ans+arguments[i];
    }
    return ans
}
let result= addNumbers(10,20,4,40,50);
console.log(result);

//arrow functions
//syntax:- const sayHelllo =()=> a+b{
//     console.log("hey"); or 
// return a+b;
// }


//arguments:- const addNumbers =(...nums)=>{        [.....nums.. is arrow function]
    // console.log(nums);}
    //add numbers(10,20,20,30);

    // With parameters
const add = (a, b) => a + b;

// With a single parameter (parentheses optional)
const square = x => x * x;

// With no parameters (parentheses required)
const greet = () => "Hello!";


   
