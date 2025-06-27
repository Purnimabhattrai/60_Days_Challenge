 ///Arrays ////
 //used when we have to store multiple values in one variable//

 const students=["purnima","prejibsa","jyoti","basanta"];
 console.log(students.length);///students garda list aauxa sabbai ko and student.length garda katiota xan value aauxa///
 students[0]="Purnima Bhattrai"; //we can change the value of the specified index in array//
 console.log(students[0]); //[0]index value dida tyo index ma jun item xa tesko details dinxa///

 ///hamley  student lai const declare garye pani value change payeraxam but only the existing value of the array ,we cant add any new value rather than the already present value//
//ie: array ko index j xa tehi hunxa tesma value change garna sakinxa//


//INSERTING VALUES IN ARRAY//
students.push("lila","laxmi","arpan");
console.log(students);

///DELETING ARRAY FROM ARRAY///
students.pop();
console.log(students);

// //homogenous and heterogenous array//
// //js supports heterogenous array ie: it can store int,string,boolean and also stickers//

// const myarray=[1,true,"Purnima","🔥"];
// console.log(myarray);

// ///how to find the index no of certain value//
// console.log(myarray.indexOf("Purnima"));

// ///to reverse the value of index//
// students.reverse();
// console.log(students);