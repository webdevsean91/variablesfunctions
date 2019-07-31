exports.stringFiddle = function (x) {
    let theRevisedString = x; //We get the input
    theRevisedString = theRevisedString.trim(); //We trim white spaces
    theRevisedString = theRevisedString.toLowerCase(); //We convert to lower case
    return theRevisedString;
 }