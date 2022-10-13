
function power(number, exponent) {


if (exponent === 1)return number;
return number * power(number, exponent - 1);
}
console.log(power(2,5));
