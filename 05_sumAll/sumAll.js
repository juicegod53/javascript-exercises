const sumAll = function(int1, int2) {
    if (typeof(int1) != "number" || typeof(int2) != "number" || int1 < 0 || int2 < 0 || int1 % 1 != 0 || int2 % 1 != 0) {
        return "ERROR"
    }
    vals = [int1, int2]
    vals.sort()
    sum = (vals[1] * (vals[1] +1) / 2) - ((vals[0] - 1) * vals[0] / 2)
    return sum
};

// Do not edit below this line
module.exports = sumAll;
