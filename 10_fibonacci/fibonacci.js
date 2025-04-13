const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    } else if (n == 0) {
        return 0
    }
    n = parseInt(n)
    let fib = [1,1]
    let length = fib.length
    while (length < n) {
        fib.push(fib[length-1]+fib[length-2])
        length = fib.length
    }
    return fib[n-1]

};

// Do not edit below this line
module.exports = fibonacci;
