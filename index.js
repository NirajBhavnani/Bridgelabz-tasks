//1.Given a string, reverse each word in the sentence
var str = "Hello Hi";
var word_arr = str.split(" ");
var final_ans = []

for(var word in word_arr){ // Grabing each word from the input
    var adder = strReverse(word_arr[word]); // Reversing each word
    final_ans.push(adder);
    var output = final_ans.join(" ");
}
console.log(output);


function strReverse(string){
    var newStr = "";
    for(var i = string.length-1; i>=0; i-=1){
        newStr += string[i];
    }
    return newStr;
}

//2.Print numbers from 1 to 10
var nums = ""; // For printing in a single line
for(var i=1; i<=10; i+=1){
    nums += i + " ";
}
console.log(nums);

//3.Print the odd numbers less than 100
var odds = "";
for(var i=1; i<=100; i+=1){
    if(i%2 != 0){
        odds += i + " ";
    }
}
console.log(odds);

//4.Print the multiplication table with 7
for(var i=1; i<=10; i+=1){
    const line = 7*i;
    console.log(`7 * ${i} = ${line}`); // `` (Back ticks are used for String Interpolation)
}

//5.Calculate 10!
var fact = 1;
for(var i=10; i>=1; i-=1){
    fact = fact * i;
}
console.log(fact);

//6.Create a function that will convert from Celsius to Fahrenheit
const Celsius = 35;
console.log(convertCelToFahr(Celsius));
function convertCelToFahr(number){
    let Fahrenheit = number * 1.8 + 32;
    return Fahrenheit;
}

//7.Calculate the sum of numbers in an array of numbers
var numArr = [10, 20, 30, 40];
var sum = 0;
for(var num in numArr){
    sum = sum + numArr[num];
}
console.log(sum);

//8. Create a function that receives an array of numbers and returns an array containing only the positive numbers
test = [10, 7, -2, 9, -4, -9];
console.log(getArr(test));

function getArr(sample){
    newArr = [];
    for(num in sample){
        if(sample[num]>0){
            (newArr).push(sample[num]);
        }
    }
    return newArr;
}

//9.Find the maximum number in an array of numbers
var maxArr = [20, 35, 49, 58, 76];
var max = maxArr[0];
for(x in maxArr){
    if(max < maxArr[x]){
        max = maxArr[x];
    }
}
console.log(max);

//10.Create a function that will return a Boolean specifying if a number is prime
newNum = 7;
console.log(isPrime(newNum));

function isPrime(myNumber){
    myBool = 1;
    for(var i=2; i<=Math.sqrt(myNumber); i+=1){
        // If n is divisible by any number between
        // 2 and n/2, it is not prime
        if(myNumber % i ==0){
            var myBool = 0;
        }
    }
    return Boolean(myBool);
}

// Why did we choose sqrt(N)? 
// The reason is that the smallest and greater than one factor of a number 
// cannot be more than the sqrt of N. And we stop as soon as we find a 
// factor. For example, if N is 49, the smallest factor is 7. For 15, 
// smallest factor is 3.

//11.JAVASCRIPT PALINDROME CHECKER
var palStr = "eye";
console.log(palindromeChecker(palStr));

function palindromeChecker(str){
    var lowerStr = str.toLowerCase();
    var revStr = lowerStr.split('').reverse().join('');
    return revStr ==lowerStr;
}

//12.Create a function that takes voltage and current and returns the calculated power.
//example : circuitPower(230, 10) ➞ 2300
var voltage = 500;
var current = 15;
console.log(circuitPower(voltage, current));

function circuitPower(voltage, current){
    return power = voltage * current;
}

//13.A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals

// example : animals(2, 3, 5) ➞ 36 
//                   animals(1, 2, 3) ➞ 22
chickens = 2;
cows = 4;
pigs = 4;
console.log(animals(chickens, cows, pigs));

function animals(chic, cow, pig){
    if(isNaN(chic)||isNaN(cow||isNaN(pig)))
        return false;
    return (chic+cow+pig);
}