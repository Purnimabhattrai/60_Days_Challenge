//  const user={
//     username:"purnima",
//     loginCount:9,
//     signedIn:true,
//     getUserDetails:function(){
//        console.log('username:${this.username}');
//         console.log(this);
//     }
//  }
//  console.log(user.username)
//  console.log(this);


 function User(username,loginCount,isLoggedIn){
   this.username= username;
   this.loginCount=loginCount;
   this.isLoggedIn=isLoggedIn;
   return this;
 }
//  const userOne=User("Purnima",29,true)
//  const userTwo=User("Prejibsa",23,false)  this override the user one
//  console.log(userOne);

const userOne= new User("Purnima",29,true)
const userTwo= new User("Prejibsa",23,false)  
console.log(userOne);
console.log(userTwo);

//new use garda new obj create hunxa
//constructor function call hunxa
//aruments inject hunxa 
//value aauxa
