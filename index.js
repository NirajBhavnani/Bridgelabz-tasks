//1.Given a string, reverse each word in the sentence
var str = "Hello Hi";
var word_arr = str.split(" ");
var final_ans = []

for(var word in word_arr){
    var adder = strReverse(word_arr[word]);
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