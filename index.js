// var Myname ="Deepak"
// console.log(Myname)
// console.log(typeof(Myname));
// var age = 26
// console.log(age);
// console.log(typeof(age));
// console.log(10+'20');
// console.log(9-'5');
// console.log("Java" + "Script");
// console.log(" " + " ");
// console.log(' ' + 0);
// console.log('Deepak'-'Kumar');
// console.log(true + true);
// console.log(true + false);
// console.log(false + true);
// console.log(false - true);
// var check =22.5;
// console.log(typeof(check));
// var num =21;
// var newnum = ++num;
// console.log(num);
// console.log(newnum);
// console.log(!true);
// var a = 5;
// var b =10;
// var c= b;
// b= a;
// a= c;
// console.log("The value of a is " +a);
// console.log("The value of b is " +b);
// var num1 = 5;
// var num2 = '5';
// console.log(typeof(num1));
// console.log(typeof(num2));
// console.log(num1==num2);
// console.log(num1===num2);

// var tomm = 'sunny';
// if(tomm == 'rain'){
//     console.log('Take a raincota');
// }
// else{
//     console.log("Don't take raincoat");}

// program to find a leap year

// var year = 2000;
// debugger;
// if(year % 4 === 0)
// {
//     if( year % 100 === 0)
//     {
//         if( year % 400 ===0)
//         {
//             console.log("The year " + year + " is a leap year");
//         }
//         else{
//             console.log("The year " + year + " is not a leap year");
//         }
//         }
//         else{
//             console.log("The year is " + " is a leap year");
//         }
//     }
//         else{
//             console.log("The year is " + " not a leap year");
//         }
// var area= "triangle";
// var l=4,b=4,r=5;

// switch(area){
//     case"circle":
//     console.log("the area of circle is " + 3.14*r**2);
//     break;
//     case"triangle":
//     console.log("the area of triangle is " + (l*b)/2);
//     break;
//     case"rectangle":
//     console.log("the area of rectangle is " + (l*b));
//     break;
//     default:
//         console.log("Enter valid data");

// }
// debugger;
// var num =0;
// while(num<= 10){
//     console.log(num);
//     num++;
// }

// var num =0;
// do{
//     debugger;
//     console.log(num);
//     num++;
// }while(num<=10);
// WAP to write table of 8,9,15
// for(num = 8; num<=80; num=num+8){
//     console.log(num);
// }
// for(num =1; num<=25; num++){
//     var tableof =8;
//     console.log(tableof + " X " + num + " = " + tableof*num);
// }
// function sum(a,b){
//     sum=a+b;
//     console.log("The sum of said two numbers is " + sum);
// }

// sum(10,123);
// function squareroot(a){
//     squareroot = a**0.5
//     console.log("the squareroot of number is " + squareroot);
// }
// squareroot(15);

// var myname = "Deepak";
// console.log(isNaN(myname));
// var number = 123;
// console.log(isNaN(number));
// console.log(isNaN === isNaN);
// console.log(NaN===NaN);

// var a = 12;
// var b = 13;
// console.log(a==b);
// console.log(isNaN(b));
// console.log(a!=b);


// WAP to find the area of circle out of rectangle, triangle,square and circel using switch statement
// var area = 'Circle';
// var PI=3.13, l=3, b= 5, r=5;
// switch(area){
//     case'Rectangle':
//     console.log("Area of Rectangle is" + l*b+"sqmtr");
//     break;

//     case 'Circle':
//         console.log("The area of circle is " + PI*r**2+"sqmtr");
//        break;


//     case 'triange':
//         console.log("Area of triangle is " + (l*b)/2+"sqmtr");
    
//     default:
// }

// var num = 12;
// for(n1= 1;n1<=20;n1++){
//     var tableof12 = num*n1;
//    console.log(num +" X " + n1 + " = " + tableof12);
// }
// function sum(a,b){
//     return total=a+b;
// }
// console.log(sum(13,12));
// var addition = sum(12,14);
// console.log(addition);

// var anonFun = function(a,b){
//     return total= a+b;
// }
// var sum = anonFun(13,13);
// var sum1 = anonFun(13,12);
// console.log("the sum of two numbers is " + anonFun(13,12));
// console.log(sum);
// console.log(sum1);
// console.log(sum1>sum);

// function biodata(){
//     var myfirstname = "deepak";
//     if(true){
//         var mylastname = "kumar";
//         console.log("inner " + mylastname);
//         console.log("outer " + myfirstname);
//     }
//     console.log("outer " + mylastname);
//     }
//     biodata();
// // here both inner and outer variables are accessable throughout the function, 
// //hence they are called as function scope.

// function biodata(){
//     let myfirstname = "deepak";
//     if(true){
//         let mylastname = "kumar";
//         console.log("inner " + mylastname);
//         console.log("outer " + myfirstname);
//     }
//     console.log("outer " + mylastname);
//     }
//     biodata();
    // inner kumar
    // outer deepak
    // C:\Users\deepa\Desktop\Javascript\index.js:193
    //     console.log("outer " + mylastname);   
    //the error shown above is because let only has block scope and doesnt let variables acess out of the block.

// function mult(a,b=5){
//     return a*b;
// }
// console.log(mult(5));
//  var name = ["Deepak", "Jha", 52, true];
//  console.log(name[2]);
//  console.log(name.length);
//  var num = ['Deepak','Tony','Jha','Party'];
//  for(let elements of num){
//      console.log(elements);
//  }
//  for(let elements in num){
//      console.log(elements);
//  }
// Array and its length
//  var array = ["Deepak", "Kumar", 29, "Roll No."];
//  console.log(array.length);
//  console.log(array[3]);
