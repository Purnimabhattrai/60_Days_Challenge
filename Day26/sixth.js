 ///higherorder function and callback(cb)
 //a function that takes function as arguments//

function add(a,b,cb){
    let result=a+b;
    cb(result);
}
add(2,4,(val) => console.log(val));
add(400,400,(val)=>console.log(val));