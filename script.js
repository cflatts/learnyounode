var fs = require('fs')

//EXERCISE 1 'HELLO WORLD'
var hello = function() {
    return console.log('HELLO WORLD')
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
    return console.log(sum)
}
// add()

// EXERCISE 3 'FIRST I/O'
var countNewLinesSync = function() {
    var testFile = process.argv[2]
    //readFileSync is a file system method that reads the data in the file given to it, the method returns a buffer
    //object, which is an object that can read any type of data
    var bufferObj = fs.readFileSync(testFile)
    //the buffer object can use the same methods to transform the data type as a JS object
    var testString = bufferObj.toString()
    //a string can use '\n' as the delimiter for .split()
    var newLines = testString.split('\n')
    //the test file did not have  \n at the end so the array would have returned a value 1 higher than the actual value
    console.log(newLines.length - 1)
}
// countNewLinesSync()

// EXERCISE 4 'FIRST ASYNC I/O'

var countNewLinesAsync = function() {
    var testFile = process.argv[2]
    //the async method takes in two methods, the data and a callback (the 'utf8' argument is optional and returns the data as a string instead of a buffer object)
    fs.readFile(testFile, 'utf8', function(error, data) {
    //so this says that readFile() will read the test file and if it is truthy then it will become a string and then run the callback
        if(error) {
        //if there is an error in the testFile the error will be returned
            return console.log(error)
        }
        else {
        //if there isn't an error then the rest of this code will run
            var newLines = data.split('\n')
            return console.log(newLines.length - 1)
        }
    })
}
countNewLinesAsync()