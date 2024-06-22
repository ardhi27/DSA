

var numberOfMatches = function(n) {
    let totalMatches = 0

    while ( n > 1){
        //Jika  n adalah genap
        if( n % 2 == 0){ // n = 4
            totalMatches += n / 2; //totalMatches = 4 / 2 = 2
            n = n / 2 // n = 2
        } else {
            totalMatches += (n - 1) / 2;
            n = (n - 1) / 2 + 1;
        }
    }
    return totalMatches
}

