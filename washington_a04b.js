/*
Timothy Washington
washington_a04b.js
INFO 2124 - Javascript I
Thoendel
Creation date: Jan 12, 2020
*/
//comment Legend: {c=creates variable, s=sets a variable to a value}
const name="Timothy";//cs
const wei=1.1;//cs
const hei=65;//cs
const age=20;//cs
const marsGravity=0.38;//cs
const inchesToCentimeters=2.54;//cs and removed unecessary naming confusion
var cAge=parseInt(String(age*365));//cs
var mAge=Number(String(cAge/687));//cs
var mWei=parseFloat(String(wei*marsGravity));//cs

let a=`Hello there, ${name}! On earth you weigh ${wei} pounds. 
But, since gravity is weaker on the Mars, you would only weight ${mWei} pounds there! 

Neat huh? Want to know what else is neat? 

Mars takes longer to rotate around the Sun than does Earth. This means the Mars year is actually longer than our "terran" year. So although you are ${age} years old on Earth, you're only ${mAge} years old on Mars.

Did you know, the European Space Agency requires potential astronauts to measure between 153 and 190 cm? Just in case you ever decide to move to Europe and want to be and astronaut, your height in metric is ${hei*inchesToCentimeters} cm.`//cs
console.log(a);//output