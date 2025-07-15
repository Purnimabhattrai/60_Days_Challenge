 //promises//
 //its an object

 //create promise//
 const promiseOne=new Promise(function(resolve,reject){
    //do all the async task ie: db calls, cryptography,network
    setTimeout(function(){
        console.log('async task completed');
        resolve()

    },1000)

 })

 //.then is related to resolve
 promiseOne.then(function(){
    console.log("Promise Consumed")
 })


 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2"); //first ma yo execute hunxa
        resolve();//then this will tell .then to execute its function
    },1000)
 }).then(function(){
    console.log("Async 2 resolved");//at last this will be executed
 })


 const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({unsername:"purnima",rollno:29})//data base bata liuney kam ni resolve() ley garxa
    },1000) 
 })
 promiseThree.then(function(user){
    console.log(user);
 })

 const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
      let error= false
      if (!error){
         resolve({username:"Purnima", password:"123"})

      }else{
         reject('ERROR:something went wrong')
      }
    },1000)
   
   })

   promiseFour
   //for the resolve case
   .then((user)=>{
      console.log(user);
      return user.username
   })
   .then((username)=>{  //chaining of then to get data , used in database connections
      console.log(username);
   })
   //for the reject case
   .catch(function(error){
      console.log(error);
   })
   .finally(()=>console.log("the promise is finally resolved or rejected"))




   const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
      let error= true
      if (!error){
         resolve({username:"Prejibsa", password:"123"})

      }else{
         reject('ERROR:JS went wrong')
      }
    },1000)
   
   });

   async function consumepromiseFive(){
      try{
         const response= await promiseFiveconsole.log(response);
         console.log(response);
      }catch(error){
         console.log(error);
      }
   }

