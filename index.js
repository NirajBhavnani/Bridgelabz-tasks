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