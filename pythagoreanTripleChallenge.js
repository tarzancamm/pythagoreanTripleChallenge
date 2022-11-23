// Given an array of 3 non-negative integers a, b and c, determine if they form a pythagorean triple.

// A pythagorean triple is formed when:

// c2 = a2 + b2
// where c is the largest value of a, b, c.

function isPythagoreanTriple(integers) {
    let c = Math.max(...integers)
    let abArr = integers.filter(num => num !== c)
    
    if(Math.pow(c, 2) === (Math.pow(abArr[0], 2) + Math.pow(abArr[1], 2))){
      return true
    } else {
      return false
    }
}

console.log(isPythagoreanTriple([3, 4, 5]))