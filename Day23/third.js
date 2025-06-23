 console.log("Hello World!!!");

///conditional statements///
//    const age =2;
//    if(age>=18){
//       console.log ('yes! you can vote');
//     }else{
//         console.log ('No! you cant vote');
//      }

 //ternary operator///
//  const age=22;
//  age>=18? console.log('yes'): console.log('no');

//switch case//
// const option=8;
// switch(option){
//     case 1:console.log("Namaste")
//     break;
//     case 2:console.log("hi");
//     break;
//     case 3:console.log("bye!!!")
//     break;
//     default:console.log("invalid option");
// }

///logical operators//

// const number=5;
// if(number%2==0){
// //     console.log('even');
// // }
// if(number% 2!=0) {
//     console.log('odd');
// }

//loops

//for loop-> if you know how many times you have to run the loop
// for(let i=1;i<=10; i=i+1){
//     console.log("Purnima" +i)
// }

//while loop->if you know the condition and task but dont know how many time it have to run to achieve that task

// let ip=50
// let house=50

// while(ip !=house){
//     ip=ip+1;
//     console.log('step taken'+ip)
// }

//do while->deko condition true nahuda samma run garxa. pahila code run garxa aani condition check garxa
//   do{
//        ip=ip+1;
//        console.log('step taken'+ip)
//   }while(ip<=house)

/////////guees the input game///////////////
let number=9;

let guess= 0;
do  {
    guess =parseInt(prompt("Guess a number"))
    if(guess == number){
        alert("Winner")
        break;
    }
}while (guess !=0)
