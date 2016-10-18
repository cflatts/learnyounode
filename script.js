var fs = require('fs')

//EXERCISE 1 'HELLO WORLD'
var hello = function() {
    console.log('HELLO WORLD')
}
// hello()

//EXERCISE 2 'BABY STEPS'
var add = function() {
    //process.argv is a global variable
    var cmdArr = process.argv
    var sum = 0

    //start at 2 because the first arg is always node and the second is always the file path
    for(var i = 2; i < cmdArr.length; i++) {
        var num = parseInt(cmdArr[i])
        sum = sum + num
    }
    console.log(sum)
}
// add()

// EXERCISE 3
var countNewLines = function() {
    var testFile = process.argv[2]
    var bufferObj = fs.readFileSync(testFile)
    var testString = bufferObj.toString()
    var newLines = testString.split('\n')

    console.log(newLines.length - 1)
}
countNewLines()