const palindromes = function (string) {
    return string.toLowerCase().split("").filter(item => !([" ", ".", ",", "!"].includes(item))).join("") == string.toLowerCase().split("").filter(item => !([" ", ".", ",", "!"].includes(item))).reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
