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