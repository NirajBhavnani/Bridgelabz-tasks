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

//Sort a number array
var numbers = [1, 12, 2 ,23,77,7,33,5,99,234];
var arr2 = numbers.sort(
    function(a,b){
        return a-b;//a-b for ascending, b-a for descending
    }
);
console.log(arr2);

//Check if the element is present or not
names = ["Niraj", "Aditya", "Darshan", "Thejashree"];
if(names.indexOf("Niraj")===-1) console.log("Element not present");
console.log("Element present at index "+names.indexOf("Niraj"));

//14. How do you find the missing number in a given integer array of 1 to 100? 
var arr100 = [4, 9, 19, 38, 59, 78, 99];
limit = 100;
missing =[];

for(var i=1; i<=limit; i+=1){
    if(arr100.indexOf(i)===-1){
        missing.push(i);
    }
}
console.log(missing);

//15.How do you find the largest and smallest number in an unsorted integer array? 
var unsortArr = [76, 98, 3, 54, 17, 2];
var unsortArrMin = unsortArr[0];
var unsortArrMax = unsortArr[0];
for(x in unsortArr){
    if(unsortArrMax < unsortArr[x]){
        unsortArrMax = unsortArr[x];
    }
    if(unsortArrMin > unsortArr[x]){
        unsortArrMin = unsortArr[x];
    }
}
console.log("Max: "+unsortArrMax+" Min: "+unsortArrMin);

//16.How do you find all pairs of an integer array whose sum is equal to a given number? 
reqSum = 16;
pairArr = [4, 12, 8, 10, 5, 6];
pairs = [];
for(var i=0; i<pairArr.length; i++){
    for(var j=1; j<pairArr.length; j++){
        if(pairArr[i]+pairArr[j]===reqSum)
            pairs.push([pairArr[i], pairArr[j]]);
    }
}
console.log(pairs);

//17.How do you find duplicate numbers in an array if it contains multiple duplicates?
duplicate = [];
dupliIndex = [];
dupliArr = [10, 65, 58, 10, 23, 42, 10];
boolDup = false;
if(checkDuplicate(dupliArr)){
    for(var i=0; i<dupliArr.length; i++){
        if(dupliArr[i]===duplicate[0]){
            dupliIndex.push(i);
        }
    }        
}
console.log(dupliIndex);

function checkDuplicate(arr){
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length;j++){
            if(i!==j){//Don't check same elements
                if(arr[i] == arr[j]){
                    duplicate.push(arr[i]);
                    boolDup = true;
                    break;
                }
            }
            if(boolDup){
                return true;
            }
        }
    }
}

//18.Find the Union and Intersection of the two sorted arrays
testArr1 = [1, 3, 4, 5, 7];
testArr2 = [3, 4];
interArr = [];
uniSet = [];
getUnion(testArr1, testArr2);
getIntersection(testArr2, uniSet);

function getUnion(tA1, tA2){
    tA = tA1.concat(tA2);
    var mySet = new Set();
    for(var i of tA){
        mySet.add(i);
    }
    uniSet = [...mySet];
    console.log("Union: "+uniSet.sort());
}

function getIntersection(tA2, uniSet){
    for(i=0; i<uniSet.length; i++){
        for(j=0; j<tA2.length; j++){
            if(uniSet[i]==tA2[j]){
                interArr.push(uniSet[i]);
            }
        }
    }
    console.log("Intersection: "+interArr);
}

//a) Write a program in the following steps
// a. Generates 10 Random 3 Digit number.
// b. Store this random numbers into a array.
// c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
var ranArr = [];
for(var num = 0; num<10 ; num++){
    ranArr.push(Math.floor(Math.random()*(999-100+1)+100)); //return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(ranArr);
minMax(ranArr);
function minMax(Arr){
    var arrMin = Arr[0];
    var arrMax = Arr[0];
    for(x in Arr){
        if(arrMax < Arr[x]){
            arrMax = Arr[x];
        }
        if(arrMin > Arr[x]){
            arrMin = Arr[x];
        }
    }
    console.log("Min: "+arrMin);
    console.log("Max: "+arrMax);
}

// b) Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
var ranArr2 = [];
for(var num = 0; num<10 ; num++){
    ranArr2.push(Math.floor(Math.random()*(999-100+1)+100)); //return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(ranArr2);
mySort(ranArr2);

function mySort(Arr){
    Arr.sort(
        function(a,b){
            return b-a;//a-b for ascending, b-a for descending
        }
    );
    console.log("2nd Max: "+Arr[1]);
    console.log("2nd Min: "+Arr[8]);
}

// c) Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
var factorsArr = new Array();
factors(9, factorsArr);
function factors(num, Arr){
    for(i=1; i<num/2; i++){
        if(num%i ===0){
            Arr.push(i);
        }
    }
    console.log(`Factors of ${num}: ${Arr}`);
}

// d) Write a Program to show Sum of three Integer adds to ZERO
zeroArr = [-1, 0, 1, 2, -3];
find3Int(zeroArr);

function find3Int(arr){
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0)
                {
                 console.log(`(${arr[i]}, ${arr[j]}, ${arr[k]})`);   
                }
            }
        }
}
}

// e) Take a range from 0 – 100, find the digits that are repeated twice like 33, 77, etc and store them in an array
var Arr_11 = [];
for(i=0; i<=100; i++){
    if(i%11 ===0){
        Arr_11.push(i);
    }
}
console.log(Arr_11);

// 1. Write a program in the following steps
// a. Roll a die and find the number between 1 to 6
// b. Repeat the Die roll and find the result each time
// c. Store the result in a dictionary
// d. Repeat till any one of the number has reached 10 times
// e. Find the number that reached maximum times and the one that was for
// minimum times

myDice = new Map();
myDice.set(1, 0);
myDice.set(2, 0);
myDice.set(3, 0);
myDice.set(4, 0);
myDice.set(5, 0);
myDice.set(6, 0);

while(true){
    var numberVal = Math.floor(Math.random()*(6-1+1)+1);

    //incrementing dice value to reach 10
    myDice.set(numberVal, myDice.get(numberVal)+1);
    if(myDice.get(numberVal)===10) break;
}

console.log(myDice);

maxMap = Math.max(...myDice.values());
minMap = Math.min(...myDice.values());
maxMapArr = [];
minMapArr = [];

myDice.forEach((value, key) => {
    if(value===maxMap){
        maxMapArr.push(key);
    }
    if(value===minMap){
        minMapArr.push(key);
    }
});

console.log("Max reach: "+maxMapArr);
console.log("Min reach: "+minMapArr);

// 2. Write a Program to generate a birth month of 50 individuals
// between the year 92 & 93. Find all the individuals having birthdays
// in the same month. Store it to finally print.

var bMap = new Map();
var bMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

for(i=1; i<=50; i++){
    bMap.set(i, bMonth[Math.floor(Math.random()*12)]);
}
console.log(bMap);

var sameMap = new Map();
bMonth.forEach(month => sameMap.set(month, []));
bMap.forEach((value, key) => sameMap.set(value, [...sameMap.get(value), key]));
console.log(sameMap);