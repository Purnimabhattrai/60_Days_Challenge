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