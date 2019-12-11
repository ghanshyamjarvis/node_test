


//Array
const counter = function (arr)
{
return "There are " + arr.length + " Element in Array"
}
//console.log(counter(["raj","shyam","Meet","Hiren"]))
module.exports.counter= counter;

//Multiply
const  sum = function (a,b)
{
  return  `This is th sum of two value ${a*b}`
}
//console.log(sum(5,6))
module.exports.sum = sum;

//Pie
const pi = 3.142
module.exports.pi=pi
//console.log(pi)



// in different way to export

module.exports.three = function (arr)
{
return "this is the number of array" + arr.length + "."
}

module.exports.four  =function(a,b)
{
  return `this the sum of two values ${a*b}`
}
module.exports.pi= 3.142