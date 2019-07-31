
//Below function will generate a list of even numbers
exports.evenNums = function () {
    let theEvenNumbers =  [];

    for(var i = 1; i <=50; i++){
        if(i % 2 === 0) {
            theEvenNumbers.push(i);
        }
    }
    return theEvenNumbers;
 }