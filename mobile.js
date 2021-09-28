const container = document.getElementById("image-container");
const url = 'https://trial-fc6a1-default-rtdb.firebaseio.com/';
let a = localStorage.getItem("name");

document.getElementById("vijay").innerHTML = a;
const bookList = [
  {
    name: "Redmi ( sea blue, 4GB)",
    price: 8999,
    id: "m1",
    src: "images/mobile/r1.jpg",
    rating: 4,
    quantity: 1,
    type: "red",
  },
  {
    name: "Redmi 9 prime ( Midnight black, 64GB  )",
    price: 11999,
    id: "m2",
    src: "images/mobile/r2.jpg",
    rating: 5,
    quantity: 1,
    type: "red",
  },
  {
    name: "Redmi 9 Power (Midnight white ,64GB )",
    price: 10799,
    id: "m3",
    src: "images/mobile/r3.jpg",
    rating: 3,
    quantity: 1,
    type: "red",
  },
  {
    name: "Redmi note 9( Blue ,64GB )",
    price: 10599,
    id: "m4",
    src: "images/mobile/r1.jpg",
    rating: 5,
    quantity: 1,
    type: "red",
  },
  {
    name: "Redmi 9 Pro( Green ,128GB )",
    price: 14999,
    id: "m5",
    src: "images/mobile/r1.jpg",
    rating: 4,
    quantity: 1,
    type: "red",
  },  
  {
    name: "Redmi Note 10 (White , 128GB)",
    price: 16499,
    id: "m6",
    src: "images/mobile/r3.jpg",
    rating: 5,
    quantity: 1,
    type: "red",
  },
  {
    name: "Samsung Galaxy F12 ( White , 128GB)",
    price: 16999,
    id: "m7",
    src: "images/mobile/s2.jpg",
    rating: 5,
    quantity: 1,
    type: "samsung",
  },
  {
    name: "Samsung Galaxy M21 ( blue, 64GB  )",
    price: 13999,
    id: "m8",
    src: "images/mobile/s3.jpg",
    rating: 4,
    quantity: 1,
    type: "samsung",
  },
  {
    name: "Samsung Galaxy A20 (Midnight black ,64GB )",
    price: 13799,
    id: "m9",
    src: "images/mobile/s4.jpg",
    rating: 3,
    quantity: 1,
    type: "samsung",
  },
  {
    name: "Samsung Galaxy M30s ( Black ,64GB )",
    price: 11599,
    id: "m10",
    src: "images/mobile/s4.jpg",
    rating: 5,
    quantity: 1,
    type: "samsung",
  },
  {
    name: "Samsung Galaxy M32( blue ,128GB )",
    price: 18999,
    id: "m11",
    src: "images/mobile/s3.jpg",
    rating: 5,
    quantity: 1,
    type: "samsung",
  },  
  {
    name: "Samsung Galaxy A72 (black , 128GB)",
    price: 17499,
    id: "m12",
    src: "images/mobile/s4.jpg",
    rating: 4,
    quantity: 1,
    type: "samsung",
  },
  {
    name: "POCO M3 (black , 128GB)",
    price: 17499,
    id: "m13",
    src: "images/mobile/p2.jpg",
    rating: 4,
    quantity: 1,
    type: "poco",
  },
  {
    name: "POCO X3 (blue , 128GB)",
    price: 16999,
    id: "m14",
    src: "images/mobile/p1.jpg",
    rating: 5,
    quantity: 1,
    type: "poco",
  },
  {
    name: "POCO F1 (blue , 128GB)",
    price: 17499,
    id: "m15",
    src: "images/mobile/p1.jpg",
    rating: 4,
    quantity: 1,
    type: "poco",
  },
  {
    name: "POCO M2 (black , 64GB)",
    price: 13499,
    id: "m16",
    src: "images/mobile/p2.jpg",
    rating: 4,
    quantity: 1,
    type: "poco",
  },
  {
    name: "POCO X3 Pro (blue , 128GB)",
    price: 18499,
    id: "m17",
    src: "images/mobile/p1.jpg",
    rating: 5,
    quantity: 1,
    type: "poco",
  },
  {
    name: "POCO C3 (black , 64GB)",
    price: 13499,
    id: "m18",
    src: "images/mobile/p1.jpg",
    rating: 5,
    quantity: 1,
    type: "poco",
  },
  {
    name: "RealMe C1 (Grey , 64GB)",
    price: 13499,
    id: "m19",
    src: "images/mobile/re1.jpg",
    rating: 3,
    quantity: 1,
    type: "real",
  },
  {
    name: "Realme 8 Pro (Blue , 64GB)",
    price: 13499,
    id: "m20",
    src: "images/mobile/re2.jpg",
    rating: 4,
    quantity: 1,
    type: "real",
  },
  {
    name: "RealMe 7 Max 5G (White , 128GB)",
    price: 21499,
    id: "m21",
    src: "images/mobile/re3.jpg",
    rating: 4,
    quantity: 1,
    type: "real",
  },
  {
    name: "Realme Narzo (Grey , 64GB)",
    price: 14499,
    id: "m22",
    src: "images/mobile/re1.jpg",
    rating: 3,
    quantity: 1,
    type: "real",
  },
  {
    name: "Realme C25 (Light Blue , 64GB)",
    price: 13499,
    id: "m23",
    src: "images/mobile/re1.jpg",
    rating: 4,
    quantity: 1,
    type: "real",
  },
  {
    name: "Realme 8 (White , 64GB)",
    price: 13999,
    id: "m24",
    src: "images/mobile/re3.jpg",
    rating: 5,
    quantity: 1,
    type: "real",
  },
  {
    name: "IPhone 7 (Black , 64GB)",
    price: 33499,
    id: "m25",
    src: "images/mobile/i2.jpg",
    rating: 4,
    quantity: 1,
    type: "iphone",
  },
  {
    name: "IPhone XR (Black ,64GB)",
    price: 48499,
    id: "m26",
    src: "images/mobile/i1.jpg",
    rating: 5,
    quantity: 1,
    type: "iphone",
  },
  {
    name: "IPhone XR (Blue , 64GB)",
    price: 48499,
    id: "m27",
    src: "images/mobile/i1.jpg",
    rating: 5,
    quantity: 1,
    type: "iphone",
  },
  {
    name: "IPhone 10 (White , 128GB)",
    price: 79499,
    id: "m28",
    src: "images/mobile/i4.png",
    rating: 4,
    quantity: 1,
    type: "iphone",
  },
  {
    name: "IPhone 11 (Blue , 128GB)",
    price: 83499,
    id: "m29",
    src: "images/mobile/i5.jpg",
    rating: 5,
    quantity: 1,
    type: "iphone",
  },
  {
    name: "IPhone 12 (Black , 128GB)",
    price: 94499,
    id: "m30",
    src: "images/mobile/i2.jpg",
    rating: 4,
    quantity: 1,
    type: "iphone",
  },
];

{
  /* <div cl
  ass="box story">
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
  console.log(a);
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