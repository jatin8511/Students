const name = 'jatin'
// let students = ['jatin', 'magan', 'arpit', 'deven']
let students = [
    { name: 'jatin', age: 20, skill: 'mern stack developer' },
    { name: 'deven', age: 22, skill: 'mern stack developer' },
    { name: 'arpit', age: 25, skill: 'web developer' }
]

let laptop = {
    name: 'dell',
    storage: 256,
    ram: 12,
    color: 'black'
}

// loop 

for (let x = 0; x < students.length; x++) {
    // console.log(students[x])
}

for (let x of students) {
    // console.log(x)
}




students.map((x) => {
    console.log(x)
})

// console.log('hello  i have a ' + laptop.name + ' laptop' + ' and it has ' + laptop.storage + 'gb storage')



let values = [234, 3234, 2343, 327435734, 56, 37, 43, 6]


// values.push('jatin')
// values.pop()

// values.shift()
// values.unshift('magan')

// values.splice(2, 2, 'magan')
// values.splice(3, 1)

let part = values.slice(2, 5)


// arr.sort()
// arr.reverse()

// console.log(arr)
// values.sort((a, b) => b - a)

// console.log(values)

// console.log(values)

let arr = [
    'jatin', 'magan', 'kuldip', 'chhagan', 'jatin', 'aditya', 'maahi', 'deven', 'arpit'
]


// arr.map((x)=>console.log(x))

// let valuess = arr.map((x) => 'hello ' + x)
// console.log(valuess)

// let finded = arr.find((x) => x == 'jatin')



let filtered = arr.filter((x) => x.includes('a'))
console.log(filtered)

let str = 'hello my name is jatin'





