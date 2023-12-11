title.innerHTML = 'Javascript funciton'

// function Hello(name, skill) {
//     return 'hello ' + name + ' you are a ' + skill
// }


// console.log(Hello('jatin', 'mern stack developer'))

// alert(Hello('ayushi', 'web developer'))





// let Add = (num1, num2) => num1 + num2
// alert(Add(34, 54))

// let Add = name => 'hello ' + name
// alert(Add('jatin'))


let person = {
    firstName: 'jatin',
    lastName: 'raval',
    fullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.fullName())