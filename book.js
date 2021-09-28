const container = document.getElementById("image-container");
const url = 'https://trial-fc6a1-default-rtdb.firebaseio.com/';
let a = localStorage.getItem("name");
document.getElementById("vijay").innerHTML = a;
const bookList = [
  {
    name: "Quantitative Aptitude ( RS Aggarwal)",
    price: 499,
    id: "b1",
    src: "images/book/rsagarwal.jpg",
    rating: 4,
    quantity: 1,
    type: "test",
  },
  {
    name: "General ( RS Aggarwal )",
    price: 499,
    id: "b2",
    src: "images/book/general.jpg",
    rating: 4,
    quantity: 1,
    type: "test",
  },
  {
    name: "Biology ( NEET preparation )",
    price: 799,
    id: "b3",
    src: "images/book/neet.jpg",
    rating: 3,
    quantity: 1,
    type: "test",
  },
  {
    name: "Programming in C",
    price: 599,
    id: "b4",
    src: "images/book/c.jpg",
    rating: 3,
    quantity: 1,
    type: "refer",
  },
  {
    name: "Spoken english",
    price: 279,
    id: "b5",
    src: "images/book/english.jpg",
    rating: 4,
    quantity: 1,
    type: "refer",
  },  {
    name: "Complete reference(JAVA)",
    price: 349,
    id: "b6",
    src: "images/book/java.jpg",
    rating: 3,
    quantity: 1,
    type: "refer",
  },
  {
    name: "Hansel & Gretel",
    price: 243,
    id: "b7",
    src: "images/book/hansel.jpg",
    rating: 4,
    quantity: 1,
    type: "story",
  },
  {
    name: "Mahabharatam",
    price: 1199,
    id: "b8",
    src: "images/book/mahabharata.jpg",
    rating: 4,
    quantity: 1,
    type: "story",
  },
  {
    name: "The secret garden",
    price: 180,
    id: "b9",
    src: "images/book/secretgarden.jpg",
    rating: 3,
    quantity: 1,
    type: "story",
  },
  {
    name: "Harry Potter",
    price: 569,
    id: "b10",
    src: "images/book/harrypotter.jpg",
    rating: 5,
    quantity: 1,
    type: "story",
  },
  {
    name: "JEE (preparation)",
    price: 599,
    id: "b11",
    src: "images/book/jee.jpg",
    rating: 4,
    quantity: 1,
    type: "test",
  },
  {
    name: "Olympiad",
    price: 299,
    id: "b12",
    src: "images/book/olympiad.jpg",
    rating: 4,
    quantity: 1,
    type: "test",
  },
  {
    name: "Jujutsu Kaisen (volume 4)",
    price: 799,
    id: "b13",
    src: "images/book/jjk.jpg",
    rating: 5,
    quantity: 1,
    type: "story",
  },
  {
    name: "Naruto",
    price: 390,
    id: "b14",
    src: "images/book/naruto.jpg",
    rating: 4,
    quantity: 1,
    type: "story",
  },
  {
    name: "Python",
    price: 643,
    id: "b15",
    src: "images/book/python.jpg",
    rating: 4,
    quantity: 1,
    type: "refer",
  },  {
    
    name: "Your Name",
    price: 1249,
    id: "b16",
    src: "images/book/yourname.jpg",
    rating: 5,
    quantity: 1,
    type: "story",
  },
  {
    name: "React JS",
    price: 349,
    id: "b17",
    src: "images/book/reactjs.jpg",
    rating: 4,
    quantity: 1,
    type: "refer",
  },
  {
    name: "Tancet",
    price: 499,
    id: "b18",
    src: "images/book/tancet.jpg",
    rating: 4,
    quantity: 1,
    type: "refer",
  },
  {
    name: "Self Help",
    price: 280,
    id: "b19",
    src: "images/book/self-help.jpg",
    rating: 3,
    quantity: 1,
    type: "refer",
  },
  {
    name: "Demon Slayer",
    price: 549,
    id: "b20",
    src: "images/book/demonslayer.jpg",
    rating: 5,
    quantity: 1,
    type: "story",
  },
  {
    name: "C#",
    price: 349,
    id: "b21",
    src: "images/book/chsharp.jpg",
    rating: 4,
    quantity: 1,
    type: "refer",
  },
  {
    name: "C++",
    price: 329,
    id: "b22",
    src: "images/book/c++.jpg",
    rating: 3,
    quantity: 1,
    type: "refer",
  },
  {
    name: "CSS",
    price: 480,
    id: "b23",
    src: "images/book/css.jpg",
    rating: 4,
    quantity: 1,
    type: "refer",
  },
  {
    name: "Attack on titan (Volume 3)",
    price: 749,
    id: "b24",
    src: "images/book/aot.jpg",
    rating: 5,
    quantity: 1,
    type: "story",
  },
];

{
  /* <div class="box story">
<div class="image">
    <img src="images/book/mahabharata.jpg" alt="">
</div>
<div class="info">
    <h3>MAHABHARATAM</h3>
    <div class="subInfo">
        <strong class="price">₹1199</strong>
        <div class="stars">
        </div>
    </div>
    <button class="btn-cart">Add to cart</button>
</div>
</div> */
}

bookList.forEach((product) => {
  let star;
  if (product.rating === 5) {
    star =
      '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>';
  } else if (product.rating === 4) {
    star =
      '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>';
  } else if (product.rating === 3) {
    star =
      '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half"></i>';
  }
  console.log(product.type);
  const movieEl = document.createElement("div");
  movieEl.classList.add("box");
  movieEl.classList.add(`${product.type}`);
  movieEl.innerHTML = `<div class="image"><img src=${product.src} alt=""></div><div class="info"><h3>${product.name}</h3>
      <div class="subInfo">
          <strong class="price">₹${product.price}</strong>
          <div class="stars">
          ${star}
          </div>
      </div>
      <button data-product=${product.id} onclick="add(this)" class="btn-cart">Add to cart</button>
  </div>`;
  container.append(movieEl);
});

const cartList = [];
let tot;
let responseData;
const fetechingRequest = async () => {
  const resp = await fetch(`${url}${a}.json`);
  const data = await resp.json();
  if(data){
    responseData = data.item;
    tot = data.totalAmount;  
  }else{
      responseData = {};
      tot = 0;
  }
  for (const key in responseData) {
    cartList.push({
      id: responseData[key].id,
      name: responseData[key].name,
      quantity: responseData[key].quantity,
      price: responseData[key].price,
      src: responseData[key].src,
    });
  }
  console.log(cartList)
};
fetechingRequest();
let firebase = { item: cartList, totalAmount: tot };

async function add(val) {
  const productId = val.dataset.product;
  console.log(productId)
bookList.forEach((list) => {
    if (list.id === productId) {
      const existingItem = cartList.find((cart) => cart.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cartList.push({
          name: list.name,
          price: list.price,
          quantity: list.quantity,
          id: list.id,
          src : list.src,
        });
      }
    }
  });
  const totalAmount = cartList.reduce(
    (prev, cart) => cart.quantity * cart.price + prev,
    0
  );
  firebase = {
    item: [...cartList],
    totalAmount: totalAmount,
  };

  const response = fetch(`${url}${a}.json`, {
    method: "PUT",
    body: JSON.stringify(firebase),
  });
}
async function remover(val) {
  const productId = val.dataset.filter;
  let updatedItems;
  productList.forEach((list) => {
    if (list.id === productId) {
      const existingItem = firebase.item.find((cart) => cart.id === productId);
      if (existingItem.quantity === 1) {
        firebase.item = firebase.item.filter((fil) => fil.id !== productId);
        firebase.totalAmount = firebase.totalAmount - existingItem.price;
      } else {
        existingItem.quantity--;
        firebase.totalAmount = firebase.totalAmount - existingItem.price;
      }
    }
  });
  const response = await fetch(`${url}${a}.json`, {
    method: "PUT",
    body: JSON.stringify(firebase),
  });
}
