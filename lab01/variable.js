a = 3 //integer
console.log("a = " +a)
b = 3.5 //double
c = "hanoi" //string
d = true //boolean
e = 'x' //char
f = (12,123,1234) //array

//1. var (global scope)
var a = 10
var b = 4
var c = a + b //14
var d = a * b //40
var e = a / b //2.5
var f = a % b //2

//2. let (local scope)
function demo(){
    let a = 1
    let b = 2
    let c = a + b
    console.log("c = " +c)
}
demo()

console.log(a)

//3. const (hằng số)
const pi = 3.14
console.log ("Pi Number = "+pi)