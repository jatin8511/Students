let alluser = [
    {
        img: 'https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?w=2000',
        name: 'dhruvin',
        age: 20,
        place: 'junagadh',
        id: 1
    },
    {
        img: 'https://img.freepik.com/free-vector/cute-rabbit-holding-carrot-cartoon-vector-icon-illustration-animal-nature-icon-isolated-flat_138676-7315.jpg?w=2000',
        name: 'magan',
        age: 22,
        place: 'rajkot',
        id: 2
    },
    {
        img: 'https://img.freepik.com/premium-vector/cute-rabbit-drinking-coffee-cartoon-vector-icon-illustration-animal-drink-icon-concept-isolated-fla_670095-250.jpg',
        name: 'haresh',
        age: 23,
        place: 'amreli',
        id: 3
    },
    {
        img: 'https://img.freepik.com/free-vector/cute-astronaut-dance-cartoon-vector-icon-illustration-technology-science-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3851.jpg?w=2000',
        name: 'nitesh',
        age: 21,
        place: 'jaipur',
        id: 4
    },
    {
        img: 'https://img.freepik.com/premium-vector/cute-astronaut-thumbs-up-cartoon-illustration-vector-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_226569-3.jpg?w=360',
        name: 'jayesh',
        age: 23,
        place: 'udaipur',
        id: 5
    },
    {
        img: 'https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000',
        name: 'chetan',
        age: 22,
        place: 'jaisalmer',
        id: 6
    }
]


let mainuser = document.getElementById('mainuser')
let sidepage = document.getElementById('sidepage')

let sidepageuser = []

mainuser.innerHTML = alluser.map((userdata) => {
    return `<div class="card ">
    <div class='img'>

<img src="${userdata.img}" class="card-img-top image">
</div>
<div class="card-body">
  <h5 class="card-title">${userdata.name}</h5>
  <h3>${userdata.age}</h3>
  <h2>${userdata.place}</h2>
  <button onclick="selectuser(${userdata.id})" class="btn btn-primary">select</button>
</div>
</div>`
}).join('')

const opensidepage = () => {

    if (sidepage.style.left == '-1000px') {
        sidepage.style.left = '0'
    } else {
        sidepage.style.left = '-1000px'
    }

}

const selectuser = (userid) => {
    let user = alluser.find((i) => {
        return i.id == userid
    })
console.log(user)
    sidepageuser.push(user)
    sidepage.innerHTML = sidepageuser.map((userdata) => {
        return `<div class="card ">
<img src="${userdata.img}" class="card-img-top image">
<div class="card-body">
  <h5 class="card-title">${userdata.name}</h5>
  <h3>${userdata.age}</h3>
  <h2>${userdata.place}</h2>
  <button onclick="rejectuser(${userdata.id})" class="btn btn-danger">reject</button>
</div>
</div>`
    }).join('')
}


// remove selected user

const rejectuser = (userid) => {
    sidepageuser = sidepageuser.filter((user) => user.id != userid)
 
    sidepage.innerHTML = sidepageuser.map((userdata) => {
        return `<div class="card ">
<img src="${userdata.img}" class="card-img-top image">
<div class="card-body">
  <h5 class="card-title">${userdata.name}</h5>
  <h3>${userdata.age}</h3>
  <h2>${userdata.place}</h2>
  <button onclick="rejectuser(${userdata.id})" class="btn btn-danger">reject</button>
</div>
</div>`
    }).join('')
}


