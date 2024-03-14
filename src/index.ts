let theName = "Alex";
let theAge: number = 30;
let hasPet: boolean = true;

theName = "John";

let arrayOne: number[] = [1, 2, 3];
let arrayTwo: string[] = ["a", "b", "c"];
let arrayThree: (string | number)[] = ["a", 1, "b", 2];

let arrayFour: (string | number | (string | number | boolean)[] )[] = ["a", 1, "b", 2, [1,2], ["a", "b"], ["c", 3], [true, false]];

let myImg = document.getElementById("my-img") as HTMLImageElement;
console.log(myImg.src);

let data:any = "1000";
console.log(data);


