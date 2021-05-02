// var data = "tata";
// var splitString = data.split('');


// var rev_data = splitString.reverse();
// var realString = rev_data.join('');
// console.log(realString);

// if(data == realString)
// {
//    console.log("yes");
// }

// else{
//     console.log("no");
// }

function palindrome(str)
{
    const splitString = str.split('');


const rev_data = splitString.reverse();
const realString = rev_data.join('');
console.log(realString);

if(str == realString)
{
   console.log("yes it's a palindrome");
}

else{
    console.log("no it's not a palindrome");
}
    
}
palindrome("madam");