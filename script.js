
//EXERCISE 1 'HELLO WORLD'
// var hello = function() {
//     console.log('HELLO WORLD')
// }
// hello()

//EXERCISE 2 'BABY STEPS'
var add = function() {
    var cmdArr = process.argv
    var sum = 0

    for(var i = 2; i < cmdArr.length; i++) {
        var num = parseInt(cmdArr[i])
        sum = sum + num
    }
    console.log(sum)
}
add()

// console.log(process.argv)