//1. Hàm có tham số và có return
function sum (a, b) {
    return a + b
}
console.log(sum(5, 8))

//2. hàm có tham số nhưng không return
function sayHello (name) {
    console.log ("Hello " + name)
}
sayHello("Greenwich VietName")

//3. Hàm không có tham số nhưng có return
function currentYear () {
    return 2023
}
console.log("We are living in " +currentYear())

//4. Hàm không có tham số và cũng không return
function greenwich(){
    console.log("Welcome to Greenwich VietNam")
}
greenwich()