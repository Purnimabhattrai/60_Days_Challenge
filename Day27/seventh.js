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