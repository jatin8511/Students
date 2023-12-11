let productsWrapper = document.getElementById('productsWrapper')
const Shoes = [
    {
        id: 38,
        title: 'shoes1',
        img: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 39,
        title: 'shoes2',
        img: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 40,
        title: 'shoes3',
        img: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 41,
        title: 'shoes4',
        img: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 42,
        title: 'shoes5',
        img: 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 43,
        title: 'shoes6',
        img: 'https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 44,
        title: 'shoes7',
        img: '',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 45,
        title: 'shoes8',
        img: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 46,
        title: 'shoes9',
        img: 'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 47,
        title: 'shoes10',
        img: 'https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 48,
        title: 'shoes11',
        img: 'https://images.pexels.com/photos/2048548/pexels-photo-2048548.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 49,
        title: 'shoes12',
        img: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 50,
        title: 'shoes13',
        img: 'https://images.pexels.com/photos/186035/pexels-photo-186035.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 51,
        title: 'shoes14',
        img: 'https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 52,
        title: 'shoes15',
        img: 'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 53,
        title: 'shoes16',
        img: 'https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 54,
        title: 'shoes17',
        img: 'https://images.pexels.com/photos/1580267/pexels-photo-1580267.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 55,
        title: 'shoes18',
        img: 'https://images.pexels.com/photos/1670766/pexels-photo-1670766.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 56,
        title: 'shoes19',
        img: 'https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
    {
        id: 57,
        title: 'shoes20',
        img: 'https://images.pexels.com/photos/40662/shoes-footwear-hiking-shoes-walking-40662.jpeg?auto=compress&cs=tinysrgb&w=600',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, nisi?  ',
        price: 100,
        quantity: 1
    },
]


let Cart = []

let cartElem = document.getElementById('cart')
const CartToggle = () => {
    if (cartElem.style.left == '-100%') {
        cartElem.style.left = '0'
    } else {
        cartElem.style.left = '-100%'
    }
}
Shoes.map((shoe) => {
    productsWrapper.innerHTML += `  <div class="card">
<div class="img">
    <img src='${shoe.img}' alt="">
</div>
<h3>${shoe.title}</h3>
<p>${shoe.price}</p>
<div>
    <button onclick='AddToCart(${shoe.id})'>AddToCart</button>
</div>
</div>`
})

const AddToCart = (id) => {
    let obj = Shoes.find((shoe) => shoe.id == id)
    Cart.push(obj)


    cartElem.innerHTML = Cart.map((shoe)=>{
        return `<div class="cartCard">
        <div class="img"><img src="${shoe.img}" alt=""></div>
        <h3>${shoe.title}</h3>
        <p>${shoe.price}</p>
        <div><button>Remove</button></div>
    </div>`
    }).join('')

  


}