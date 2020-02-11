/*

   Welcome to JS Interation

   Down below you will find instructions for code to write.

   As you write and save your code, you can look in your terminal where you
   ran `yarn test` to see if your code is working. The tests continuously check
   your work each time you save. If a test is failing either you have not yet
   defined that function or you have not defined it correctly.

   Once you finish a function and have it correct, the test will tell you if/how
   the next function is working.

*/

/**
 * 1) Define a function named `yelling` that takes an array of
 * strings as an argument and returns a new array with all
 * the words forced to uppercase
 *
 * Example:
 *
 * const yelling = (array) => {
 *    // your code here
 * }
 */

const yelling = words => {
  return words.map(word => {
    return word.toUpperCase()
  })
}

/**
 *
 * 2) Define a function named `doubleTrouble` that takes an array of
 * numbers as an argument and returns a new array with all
 * the numbers multiplied by 2
 */

const doubleTrouble = passingArray => {
  return passingArray.map(selectedNum => {
    return selectedNum * 2
    //why do we use return twice
  })
}

/*
 * 3) Define a function stringyIndexes() that takes an array of
 * strings as an argument and returns a new array with each string
 * suffixed with " is at index X" where X is the index of the element
 */

const stringyIndexes = basicStrings => {
  let i = 0
  return basicStrings.map(newStrings => {
    return basicStrings[i] + ' is at index ' + [i++]
  })
}

/*
 * 4) Define a function onlyTheEvenSurvive that accepts an array of
 * numbers and returns only the elements that are even
 */

const onlyTheEvenSurvive = allNums => {
  return allNums.filter(evenNums => {
    return evenNums % 2 === 0
  })
}

/*
 * 5) Define a function onlyTheEvenIndexedSurvive that accepts an array of
 * numbers and returns only the elements at indexes that are even
 */

const onlyTheEvenIndexedSurvive = numbers => {
  return numbers.filter((number, index) => {
    if (index % 2 === 0) {
      return number
    }
  })
}

/*
 * 6)  Define a function bestMoviesOfTheYear that accepts an array of
 * movie objects AND a year and returns the names of movies that are
 * from that year AND have a score more than 90
 *
 * A movie object looks like this:
 *
 * {
 *   name: "Get Out",
 *   year: "2017",
 *   score: 99
 * }
 */

const bestMoviesOfTheYear = (movies, year) => {
  return movies
    .filter(movie => {
      return movie.year === year && movie.score > 90
      // what is movie
    })
    .map(movie => {
      return movie.name
      // what is movie
    })
}

/*
 * 7) Define a function everyoneIsOdd that accepts an array of
 * numbers and returns true if every element of the array is
 * odd.
 */

const everyoneIsOdd = allNums => {
  return allNums.every(oddNums => {
    return oddNums % 2 !== 0
  })
}
/*
 * 8) Define a function findTheNeedle that accepts an array of
 * strings and returns the one string that contains the word
 * `needle` inside
 */

const findTheNeedle = string => {
  return string.find(x => x.includes('needle'))
}

/*
 * 9) Define a function findTheNeedleIndex that accepts an array of
 * strings and returns the index of the string that contains
 *  the word `needle` inside
 */

const findTheNeedleIndex = array => {
  return array.findIndex(string => string.includes('needle'))
}

/*
 *` 10)  Define a function someoneToLove that accepts an array of
 * strings and returns true if at least one string is exactly
 * four characters long
 */

const someoneToLove = passingArray => {
  let checker = false //boolean value. needs to be let to switch from false to true
  passingArray.forEach(selectedString => {
    if (selectedString.length === 4) {
      checker = true
    }
  })
  return checker
}

/*
 * 11) Define a function mapYourself that accepts an array of
 * numbers and returns a new array where each number is doubled.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

const mapYourself = passingArray => {
  let newArray = []
  for (let i = 0; i < passingArray.length; i++) {
    let newElement = passingArray[i]
    newElement = newElement * 2
    newArray.push(newElement)
  }
  return newArray
}

/*
 * 12) Define a function filterYourself that accepts an
 * array of numbers and returns a new array containing
 * only the even numbers.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

const filterYourself = numbersArray => {
  const evenArray = [] //why can this be a const
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 === 0) evenArray.push(numbersArray[i])
  }
  return evenArray
}

/*
 * 13) Define a function everyYourself that accepts an
 * array of numbers and returns true if every number
 * in the array is even.
 *
 * However, you cannot use any of the Array enumerables.
 *
 * So no using forEach, map, filter, reduce, etc.
 */

const everyYourself = numbersArray => {
  let checker = true
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 !== 0) {
      checker = false
    }
  }
  return checker
}

/*
 * 14) Given an array of integers your solution should find the smallest integer.
 */

const findSmallestInt = args => {
  var min = args[0]
  for (var i = 0; i < args.length; i++) {
    if (args[i] < min) {
      min = args[i]
    }
  }
  return min
}

/*
 * 15) Simple, given a string of words, return the length of the shortest word(s).
 * String will never be empty and you do not need to account for different data types.
 */

const findShort = (s) => {

  let shortest = s.split(' ').reduce((shortestWord, currentWord) => {

    return shortestWord.length < currentWord.length ? shortestWord : currentWord;

  }, (s))
  return shortest.length
}

/*
 * 16) Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
 * You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
 */

function litres (time) {
  const liquid = Math.floor(time / 2)
  return liquid
}

/*
 * 17) Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive.
 * The string can contain any char.
*/

const similarXO = (str) => {
  if (!str.match(/[x]/ig) && !str.match(/[o]/ig)) {
    return true
  } else if (!str.match(/[x]/ig) || !str.match(/[o]/ig)) {
    return false
  }
  return str.match(/[x]/ig).length === str.match(/[o]/ig).length
}

/*
 * 18) The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
 * They would like your help with an application form that will tell prospective members which category they will be placed.
 * To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

 * Input
 * Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
 * Note for F#: The input will be of (int list list) which is a List<List>
 * Example Input
 * [[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
 * Output
 * Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
 * Example Output
 * ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/

function validSenior (data) {
  return data.map(person => {
    return person[0] >= 55 && person[1] > 7
      ? 'Senior' : 'Open'
  })
}

/*
 * 19) Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
 * If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
 * Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// function loveFunc(flower1, flower2){
//   if (flower1 %2 == 0 && flower2 %2 != 0) {
//   return true; }
//  else if (flower2 %2 == 0 && flower1 %2 != 0) {
//  return true; }
//  else {
//   return false;
//   }
// }

const loveFunc = (flower1, flower2) => {
  if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true
  } else if (flower2 % 2 === 0 && flower1 % 2 !== 0) {
    return true
  } else {
    return false
  }
}

/*
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

const ensureDefined = (t, method) => {
  if (eval(`typeof ${method}`) !== 'function') {
    t.fail(
      `\n\n\n\n\n⚡️⚡️⚡️⚡️⚡️ The next step is to define the function ${method} ⚡️⚡️⚡️⚡️⚡️\n\n\n`
    )
  } else {
    t.pass()
  }
}

test('Function Check - yelling', t => ensureDefined(t, 'yelling'))
test('yelling()', t => {
  t.deepEqual(yelling(['now', 'is', 'the', 'time']), [
    'NOW',
    'IS',
    'THE',
    'TIME'
  ])
})

test('Function Check - double tree', t => ensureDefined(t, 'doubleTrouble'))
test('doubleTrouble()', t => {
  t.deepEqual(doubleTrouble([2, 3, 9, 0, -5]), [4, 6, 18, 0, -10])
})

test('Function Check - string index', t => ensureDefined(t, 'stringyIndexes'))
test('stringyIndexes', t => {
  t.deepEqual(stringyIndexes(['how', 'now', 'brown', 'cow']), [
    'how is at index 0',
    'now is at index 1',
    'brown is at index 2',
    'cow is at index 3'
  ])
})

test('Function Check - only the even survive', t =>
  ensureDefined(t, 'onlyTheEvenSurvive'))
test('onlyTheEvenSurvive', t => {
  t.deepEqual(onlyTheEvenSurvive([42, 50, 100, 5, -43, 17, 44]), [
    42,
    50,
    100,
    44
  ])
})

test('Function Check - only the even index survive', t =>
  ensureDefined(t, 'onlyTheEvenIndexedSurvive'))
test('onlyTheEvenIndexedSurvive', t => {
  t.deepEqual(
    onlyTheEvenIndexedSurvive([
      31,
      67,
      64,
      96,
      14,
      24,
      43,
      51,
      48,
      80,
      58,
      43,
      64,
      84,
      98,
      99,
      69,
      93,
      5,
      32,
      29,
      4,
      28,
      18,
      86,
      22,
      20,
      74,
      35,
      27,
      85,
      79,
      65,
      32,
      56,
      94,
      93,
      20,
      29,
      22,
      72
    ]),
    [
      31,
      64,
      14,
      43,
      48,
      58,
      64,
      98,
      69,
      5,
      29,
      28,
      86,
      20,
      35,
      85,
      65,
      56,
      93,
      29,
      72
    ]
  )
})

test('Function Check - best movie', t =>
  ensureDefined(t, 'bestMoviesOfTheYear'))
test('bestMoviesOfTheYear', t => {
  const movies = [
    { name: 'The Grand Budapest Hotel', year: 2014, score: 91 },
    { name: 'Birdman', year: 2014, score: 91 },
    { name: 'Transformers: Age of Extinction', year: 2014, score: 18 },
    { name: 'Rage', year: 2014, score: 14 },
    { name: 'Get Out', year: 2017, score: 99 },
    { name: 'Justice League', year: 2017, score: 40 },
    { name: 'Ghost in the Shell', year: 2017, score: 46 },
    { name: 'The Big Sick', year: 2017, score: 98 }
  ]

  t.deepEqual(bestMoviesOfTheYear(movies, 2014), [
    'The Grand Budapest Hotel',
    'Birdman'
  ])

  t.deepEqual(bestMoviesOfTheYear(movies, 2017), ['Get Out', 'The Big Sick'])

  t.deepEqual(bestMoviesOfTheYear(movies, 2001), [])
})

test('Function Check - every one is odd', t =>
  ensureDefined(t, 'everyoneIsOdd'))
test('everyoneIsOdd', t => {
  t.is(everyoneIsOdd([9, 15, 27, 101, 33]), true)
  t.is(everyoneIsOdd([9, 23, 3, 4, 77]), false)
})

test('Function Check find the needle', t => ensureDefined(t, 'findTheNeedle'))
test('findTheNeedle', t => {
  t.is(
    findTheNeedle(['one', 'time', 'there was a needle at', 'the market']),
    'there was a needle at'
  )
})

test("Function Check - find the needle's index", t =>
  ensureDefined(t, 'findTheNeedleIndex'))
test('findTheNeedleIndex', t => {
  t.is(
    findTheNeedleIndex(['one', 'time', 'there was a needle at', 'the market']),
    2
  )
})

test('Function Check - someone to love', t => ensureDefined(t, 'someoneToLove'))
test('someoneToLove()', t => {
  t.is(someoneToLove(['how', 'now', 'brown', 'cow']), false)
  t.is(someoneToLove(['how', 'now', 'blue', 'cow']), true)
})

test('Function Check - map yourself', t => ensureDefined(t, 'mapYourself'))
test('mapYourself()', t => {
  const originalMap = Array.prototype.map

  Array.prototype.map = () => []

  t.deepEqual(mapYourself([1, 2, 3]), [2, 4, 6])
  t.deepEqual(mapYourself([9, 0, 1]), [18, 0, 2])

  Array.prototype.map = originalMap
})

test('Function Check - filter yourself', t =>
  ensureDefined(t, 'filterYourself'))
test('filterYourself()', t => {
  // const original = Array.prototype.filter

  // Array.prototype.filter = () => []

  t.deepEqual(filterYourself([8, 1, 2, 3]), [8, 2])

  // Array.prototype.filter = original
})

test('Function Check - Every Yourself', t => ensureDefined(t, 'everyYourself'))
test('everyYourself()', t => {
  // const original = Array.prototype.every

  // Array.prototype.every = () => undefined

  t.deepEqual(everyYourself([8, 1, 2, 3]), false)
  t.deepEqual(everyYourself([8, 10, 22, 38]), true)

  // Array.prototype.every = original
})

test('Function Check - Find Smallest Integer', t => ensureDefined(t, 'findSmallestInt'))
test('findSmallestInt()', t => {
  t.deepEqual(findSmallestInt([78, 56, 232, 12, 8]),8)
  t.deepEqual(findSmallestInt([78, 56, 232, 12, 18]),12)
  t.deepEqual(findSmallestInt([78, 56, 232, 412, 228]),56)
  t.deepEqual(findSmallestInt([78, 56, 232, 12, 0]),0)
  t.deepEqual(findSmallestInt([1, 56, 232, 12, 8]),1)
})

test('Function Check - Find Shortest Word', t => ensureDefined(t, 'findShort'))
test('findShort()', t => {
  t.deepEqual(findShort('bitcoin take over the world maybe who knows perhaps'), 3)
  t.deepEqual(findShort('turns out random test cases are easier than writing out basic ones'), 3)
})

test('Function Check - Keep Hydrated', t => ensureDefined(t, 'litres'))
test('litres()', t => {
  t.deepEqual(litres(2), 1);
  t.deepEqual(litres(1.4), 0);
  t.deepEqual(litres(12.3), 6);
  t.deepEqual(litres(0.82), 0);
  t.deepEqual(litres(11.8), 5);
  t.deepEqual(litres(1787), 893)
  t.deepEqual(litres(0), 0)
  t.deepEqual(litres(404.4), 202)
})

test('Function Check - Equal X/O', t => ensureDefined(t, 'similarXO'))
test('similarXO()', t => {
  t.deepEqual(similarXO('xo'), true)
  t.deepEqual(similarXO('xxOo'), true)
  t.deepEqual(similarXO(' '), true)
  t.deepEqual(similarXO('xxxm'), false)
  t.deepEqual(similarXO('Oo'), false)
  t.deepEqual(similarXO('ooom'), false)
  t.deepEqual(similarXO('xxxoooo'), false)
})

test('Function Check - Categorize New Member', t => ensureDefined(t, 'validSenior'))
test('validSenior()', t => {
  t.deepEqual(validSenior([[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
  t.deepEqual(validSenior([[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
  t.deepEqual(validSenior([[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])
})

test('Function Check - Petals for Love', t => ensureDefined(t, 'loveFunc'))
test('loveFunc()', t => {
  t.deepEqual(loveFunc(1,4), true)
  t.deepEqual(loveFunc(2,2), false)
  t.deepEqual(loveFunc(0,1), true)
  t.deepEqual(loveFunc(0,0), false)
})

/* eslint-enable */
