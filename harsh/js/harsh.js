let harshElem = document.getElementById('harsh')
let harsh = {
    name: 'Harsh',
    age: 21,
    skill: 'mern stack developer',
    img: 'https://th.bing.com/th/id/R.20e76e9adc006498aaa6c3d973b6544b?rik=gqmSZYHuk623kQ&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20140415073146%2fdoraemon%2fen%2fimages%2f4%2f41%2fGian.png&ehk=Wy3tVxUnl3Mn8oc9aH8J2weGHqrJZ41cmDOretwVcbg%3d&risl=&pid=ImgRaw&r=0'
}

harshElem.innerHTML = `<div>
    <img src="${harsh.img}" alt="">
<h2>${harsh.name}</h2>
<p>${harsh.age}</p>
<p>${harsh.skill}</p>
    </div>`
