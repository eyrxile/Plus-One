var plusOne = function(digits) {
    let carry = 1;
    const result = [];

    for(let i = digits.length - 1; i >= 0; i--){
        const sum = digits[i] + carry;
        result.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }

    if(carry > 0){
        result.unshift(carry);
    }

    return result;
};

//Example usage:
console.log(plusOne([1, 2, 3]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([9]));