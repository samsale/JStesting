//For these exercises - write the function first, then write the test.....

//write a function returns "drink coffee" if you are tired and "keep working" if you are not tired.  Then write the test.

function tired(str){
  if(str === "tired"){
    return "drink coffee"
  }else if(str === "not tired"){
    return "keep working"
  }
}

describe('tired',() => {
  test('The function returns drink coffee if the user input is tired.',() => {
    expect(tired('tired')).toBe('drink coffee')
  })
  test('The function returns keep working if the input is not tired.',() => {
    expect(tired('not tired')).toBe('keep working')
  })
})

//write a function returns "relax" if you are stressed and "keep going" if you are not stressed.  Then write the test.

function mood(str){
  if(str === "stressed"){
    return "relax"
  }else if(str === "not stressed"){
    return "keep going"
  }
}

describe('mood',() => {
  test('The function returns relax if the user input is stressed.',() => {
    expect(mood('stressed')).toBe('relax')
  })
  test('The function returns keep working if the input is not stressed.',() =>{
    expect(mood('not stressed')).toBe('keep going')
  })
})

//Write a function that returns "in budget" if a price is lower than $300.  Then write the test.


function budgetChecker(price){
  budget = 300
  if(price <= budget){
    return "in budget"
  }else if(price > budget){
    return "out of budget"
  }
}

describe('budgetChecker',() => {
  test('The function returns in budget if the value is 300 or lower',() => {
    expect(budgetChecker(300)).toBe('in budget')})
  test('The function returns out of budget  if the value is higher than 300',() => {
    expect(budgetChecker(301)).toBe('out of budget')
    })
  })

  //write a functions that takes in two arguments(numbers) and returns the smaller number. Then write the test.

  function smallerNumber(num1, num2){
    if(num1 < num2){
      return num1
    }else if(num2 < num1){
      return num2
    }
  }

describe('smallerNumber',() => {
  test('The function returns 9 if the first number is 10',() => {
    expect(smallerNumber(10,9)).toBe(9)})
  test('The function returns 100 if the second number is 200',() => {
    expect(smallerNumber(100,200)).toBe(100)
    })
  })


  //Write a functions that takes in one argument(number) and returns whether the number is odd. Then write the test.

function isOddNumber(number){
  if(number % 2 !== 0){
    return number + " is odd"
  }else if(number % 2 === 0){
    return number + " is even"
  }
}

describe('isOddNumber',() => {
  test('This will return odd if number is 9',() => {
    expect(isOddNumber(9)).toBe("9 is odd")
  })
  test("This will return even if number is 10",() => {
    expect(isOddNumber(10)).toBe("10 is even")
  })
})


//Write a function that takes in a fruit and returns yellow if the argument is banana, red if apple and purple if grape. Then write the test.

function fruitChecker(fruit){
  if(fruit === 'banana'){
    return "yellow"
  }else if(fruit === 'apple'){
    return "red"
  }else if(fruit === "grape"){
    return "purple"
  }
}

describe('fruitChecker',() => {
  test('This will return yellow if it is banana',() => {
    expect(fruitChecker("banana")).toBe("yellow")
  })
  test('This will return red if it is apple',() => {
    expect(fruitChecker("apple")).toBe("red")
  })
test('This will return purple if it is grape',() => {
  expect(fruitChecker("grape")).toBe("purple")
  })
})

 //For these next exercises - Write the test first, make it fail, write the code then make it pass.....

 // Exercise 1
// Write a function called Rick that returns "Morty".

describe('rick',() =>{
  test('The function will return Morty',() =>{
    expect(rick()).toBe("Morty")
  })
})

function rick(){
  return "Morty"
}

// Exercise 2
// Write a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.


describe('greeter',() =>{
  test('The function will return Hello Sam',() =>{
    expect(greeter('sam')).toBe("hello sam")
  })
})


function greeter(nameStr){
  return `hello ${nameStr}`
}


// Exercise 3
// Write a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe('oddOrEven',() => {
  test('The function will return this is odd if the number is odd',() => {
    expect(oddOrEven(7)).toBe("7 is an odd number")
  })
  test('The function will return this is even if the number is even',() => {
    expect(oddOrEven(4)).toBe("4 is an even number")
  })
})

function oddOrEven(number){
  if(number % 2 !== 0){
    return `${number} is an odd number`
  }else if(number % 2 === 0){
    return `${number} is an even number`
  }
}


// Exercise 4
// Write a function called triple that takes an number as an argument and returns the result of that number multiplied by 2.

describe('triple',() => {
  test('The function will return the source number multiplied by three',() => {
    expect(triple(3)).toBe("3 multiplied by 3 is 9")
  })
})

function triple(number){
  return `${number} multiplied by 3 is ${number *3}`
}

// Exercise 5
// Write a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe('multiply',() =>{
  test('The function will take 4 and 2 in and return 8',() =>{
    expect(multiply(4,2)).toBe("4 multipled by 2 is 8")
  })
})

function multiply(number1, number2){
  return `${number1} multipled by ${number2} is ${number1 * number2}`
}

// Exercise 6
// Write a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe('divisibleBy',() =>{
  test('The function will return is divisible if the first number is evenly divisible by the second',() => {
    expect(divisibleBy(20,5)).toBe("20 is evenly divisible by 5")
  })
})

function divisibleBy(number1, number2){
  if(number1 % number2 === 0){
    return `${number1} is evenly divisible by ${number2}`
  }else if(number1 % number2 !== 0){
    return `${number1} is not evenly divisible by ${number2}`
  }
}

// Exercise 7
// Consider this variable:
// var product = { name: "chair", price: 14.99 }
// Write a function called describeProduct takes product as an argument and returns "The product is a chair. It costs $14.99".


describe('describeProduct',() => {
  test('To make sure the function returns the product is a chair. It costs $14.99',() =>{
    var product = { name: "chair", price: 14.99 }
    expect(describeProduct(product)).toBe('The product is a chair. It costs $14.99')
  })
})

function describeProduct(object){
  return `The product is a ${object.name}. It costs $${object.price}`
}

// Write a function that takes in an array of five numbers and returns a new array with every number multiplied by 3.
// write the tests
// make it fail
// write the Code
// make it pass
// refactor with map()
// make sure it still passes

describe('byFive',() =>{
  test('To ensure the array is multipled by 3. It should return [3,6,9,12,15]',() =>{
    let testArray = [1,2,3,4,5]
    expect(byFive(testArray)).toEqual([3,6,9,12,15])
  })
})

function byFive(anArray){
  let byFiveArray = anArray.map(value => value * 3)
  return byFiveArray
}

// Write a function that takes in an array and saves all numbers in the numbers array that are evenly divisible by 3 into another array.

// write the tests
// make it fail
// write the Code
// make it pass
// refactor with filter()
// make sure it still passes

describe('divisibleByThree',() => {
  test('To ensure an array is created which contains only numbers evenly divisible by 3. From [3,7,9,12,19] should return [3,9,12]',() => {
    let arrayOne = [3,7,9,12,19]
    expect(divisibleByThree(arrayOne)).toEqual([3,9,12])
  })
  test('To ensure an array is created which contains only numbers evenly divisible by 3. From [8,1,3,9,10] should return [3,9]',() => {
    let arrayTwo = [8,1,3,9,10]
    expect(divisibleByThree(arrayTwo)).toEqual([3,9])
  })
})


function divisibleByThree(anArray){
  let divisibleByThreeArray = anArray.filter(value => value % 3 === 0)
  return divisibleByThreeArray
}


// For these, write the test, make it fail, write the code, make it pass
//
//
//
// The World Translator
// Write a function named helloWorld that:
//
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
// Test the function for each of the supported languages


describe('translator',() => {
  test('To return hello world if the argument lanugage is fr or is en',() => {
    expect(translator('fr')).toBe("Hello World")
    expect(translator('en')).toBe("Hello World")
  })
  test('To return Hola Mundo if the argument lanugage is es',() => {
    expect(translator('es')).toBe("Hola Mundo")
  })
  test('To return Hallo Welt if the argument lanugage is de',() => {
    expect(translator('de')).toBe("Hallo Welt")
  })
})


function translator(lanuguageCode){
  switch(lanuguageCode){
  case 'en':
  default:
    return "Hello World";
    break;
  case 'es':
    return "Hola Mundo";
    break;
  case 'de':
  return "Hallo Welt";
  }
}


// The Grade Assigner
// Write a function named assignGrade that:
//
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Test the function for a few different scores.


describe('assignGrade',() =>{
  test('To return A if the grade is higher than 81',() =>{
    expect(assignGrade(90)).toBe('Your grade is A')
  })
  test('To return B if the grade is between 61 and 80',() =>{
    expect(assignGrade(80)).toBe('Your grade is B')
  })
  test('To return C if the grade is between 41 and 60',() =>{
    expect(assignGrade(49)).toBe('Your grade is C')
  })
  test('To return D if the grade is between 21 and 40',() =>{
    expect(assignGrade(22)).toBe('Your grade is D')
  })
  test('To return E if the grade is is between 0 and 20',() =>{
    expect(assignGrade(3)).toBe('Your grade is E')
  })
})

function assignGrade(score){
  switch(true){
  case (score > 80):
    return 'Your grade is A';
    break;
  case (score > 60 && score <= 80):
    return "Your grade is B"
    break;
  case (score > 40 && score <= 60):
    return 'Your grade is C';
    break;
  case (score > 20 && score <= 40):
    return 'Your grade is D';
    break;
  case (score >= 0 && score <= 20):
    return 'Your grade is E';
    break;
  }
}

// The Pluralizer
// Write a function named pluralize that:
//
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form of the noun, if necessary.
// pluralizer(5, cat) should return "5 cats"
// pluralizer(1, dog) should return "1 dog" because the number one does not require a plural noun
//
// Bonus: Make it handle a few collective nouns like "sheep", "geese", "children", "people" and "species".

describe('pluralizer',() =>{
  test('To return the correct number of cats as plural',() =>{
    expect(pluralizer('cat',2)).toBe('There are 2 cats')
  })
  test('To return singular dog',() =>{
    expect(pluralizer('dog',1)).toBe('There is  1 dog')
  })
  test('To test collective nouns as plural',() =>{
    expect(pluralizer('goose',2)).toBe('There are 2 geese')
  })
  test('To test collective nouns as singular',() =>{
    expect(pluralizer('person',1)).toBe('There is  1 person')
  })
})




function pluralizer(animal, numberOf){
  animalsObj = [{sheep: 'sheep'},
                {geese: 'goose'},
                {children:'child'},
                {people:'person'},
                {species:'species'}]


if(numberOf > 1){
  matchedArray = animalsObj.filter(value => Object.values(value).join("") === animal)
  if(matchedArray.length === 0){
    return  `There are ${numberOf} ${animal}s`
  }else if(matchedArray.length === 1){
    return `There are ${numberOf} ${Object.keys(matchedArray[0]).join("")}`
  }
  }
  else if(numberOf = 1){
   return `There is  1 ${animal}`
}
}
