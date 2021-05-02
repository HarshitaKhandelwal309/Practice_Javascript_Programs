function reverse_number(num){
    return num.toString().split('').reverse().join('');
}

console.log(reverse_number(32243));

//or 

 var no = 12345;
var string = no.toString();
var other = string.split('');
other = other.reverse();
var other = other.join('');

console.log(other);