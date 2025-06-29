 
 ///high order arrays function///
 
 const numbers=[1,2,3,4,5,6,7];
 function double(n){
    return n*2;
 }

 let newarray=numbers.map(double); ///can print array after modifying it//
 console.log(newarray);

 let newarr=numbers.forEach((num)=>num*2);///can only modify the array but not print it///

 console.log(newarr);

 //to find the items of array//
 let ans=numbers.find((num)=> num===4);
 console.log(ans);

 ///to find the index of array items//
  let answer=numbers.findIndex((num)=> num===4);
 console.log(answer);

 const array=numbers.filter((num)=>num%2==0);///filter even items from the array
 console.log(array);

 ///to slice the array///
 let parray=numbers.slice(1,4+1); //we need the value from 2 to 5 ie: we use its index value but for the last item we need to use its index+1 value as it is explicit//

 console.log(parray);

 //SPLICE//
 //used to delete the items from the array but it returns the deleted items as a new array//
 let sarray=numbers.splice(1,4);//index value is used//
 console.log(sarray);
console.log(numbers);

