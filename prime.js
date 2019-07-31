//Below is a date function
exports.myDateTime = function () {
    return Date();
};
//Below is a basic calculation function
exports.calcThis = function () {
   let theNumber =  45 + 12;
   return theNumber;
}

//Below function will generate a list of prime numbers
exports.thePrimes = function () {
    var primeNos = [];
    
    for(var i = 1; i < 100; i++) {
        for(var z=2; z < i-1; z++) {
            if(i % z == 0) {
                primeNos.push(i);
            } else {
                
            }
            
        }
        
    }
    
    return primeNos;
}