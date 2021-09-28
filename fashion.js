const container = document.getElementById("image-container");
const url = "https://trial-fc6a1-default-rtdb.firebaseio.com/";
const a = localStorage.getItem("name");
document.getElementById("vijay").innerHTML = a;
const bookList = [
  {
    name: "Peter England (Formal shirts)",
    price: 570,
    id: "f1",
    src: "images/4.jpg",
    rating: 3,
    quantity: 1,
    type: "men",
  },
  {
    name: "High Lander ( Formal shirt)",
    price: 499,
    id: "f2",
    src: "images/fshirt2.png",
    rating: 5,
    quantity: 1,
    type: "men",
  },
  {
    name: "Yasko (Formal shirt)",
    price: 549,
    id: "f3",
    src: "images/fshirt3.jpg",
    rating: 4,
    quantity: 1,
    type: "men",
  },
  {
    name: "Peter England (Casual shirts)",
    price: 499,
    id: "f4",
    src: "images/cs1.jpg",
    rating: 3,
    quantity: 1,
    type: "men",
  },
  {
    name: "OTTO (Casual shirts)",
    price: 479,
    id: "f5",
    src: "images/cs2.jpg",
    rating: 5,
    quantity: 1,
    type: "men",
  },
  {
    name: "Yasko (Casual shirts)",
    price: 490,
    id: "f6",
    src: "images/cs3.jpg",
    rating: 3,
    quantity: 1,
    type: "men",
  },
  {
    name: "Puma (Jeans)",
    price: 643,
    id: "f7",
    src: "images/j1.jpg",
    rating: 4,
    quantity: 1,
    type: "men",
  },
  {
    name: "Peter England (Jeans)",
    price: 899,
    id: "f8",
    src: "images/j2.jpg",
    rating: 5,
    quantity: 1,
    type: "men",
  },
  {
    name: "Adidas (Jeans)",
    price: 680,
    id: "f9",
    src: "images/j3.jpg",
    rating: 4,
    quantity: 1,
    type: "men",
  },
  {
    name: "Peter England (Cotton pant)",
    price: 449,
    id: "f10",
    src: "images/ct1.jpg",
    rating: 5,
    quantity: 1,
    type: "men",
  },
  {
    name: "HigherLand (Cotton pants)",
    price: 570,
    id: "f11",
    src: "images/ct2.jpg",
    rating: 4,
    quantity: 1,
    type: "men",
  },
  {
    name: "Puma (Cotton pants)",
    price: 1299,
    id: "f12",
    src: "images/ct3.jpg",
    rating: 5,
    quantity: 1,
    type: "men",
  },
  {
    name: "Nike (Shoes)",
    price: 1249,
    id: "f13",
    src: "images/sh1.jpg",
    rating: 4,
    quantity: 1,
    type: "men",
  },
  {
    name: "Nivia (Shoes)",
    price: 849,
    id: "f14",
    src: "images/sh2.jpg",
    rating: 4,
    quantity: 1,
    type: "men",
  },
  {
    name: "Sariya (Cotton sarees)",
    price: 790,
    id: "f15",
    src: "images/co1.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Kanchee (Cotton sarees)",
    price: 1249,
    id: "f16",
    src: "images/co2.jpg",
    rating: 5,
    quantity: 1,
    type: "women",
  },
  {
    name: "Himal (Cotton sarees)",
    price: 940,
    id: "f17",
    src: "images/co3.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Madurai Malli (Fancy sarees)",
    price: 850,
    id: "f18",
    src: "images/fa1.jpg",
    rating: 3,
    quantity: 1,
    type: "women",
  },
  {
    name: "Kanchipuram (Fancy sarees)",
    price: 1280,
    id: "f19",
    src: "images/fa3.jpg",
    rating: 5,
    quantity: 1,
    type: "women",
  },
  {
    name: "Kerela (Fancy Sarees)",
    price: 1349,
    id: "f20",
    src: "images/fa2.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Kumari (Chudi)",
    price: 649,
    id: "f21",
    src: "images/ch2.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Malay (Chudi)",
    price: 940,
    id: "f22",
    src: "images/ch1.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Western (Chudi)",
    price: 850,
    id: "f23",
    src: "images/ch3.jpg",
    rating: 3,
    quantity: 1,
    type: "women",
  },
  {
    name: "Nike (Handbags)",
    price: 1249,
    id: "f24",
    src: "images/ha1.jpg",
    rating: 5,
    quantity: 1,
    type: "women",
  },
  {
    name: "Adidas (Handbags)",
    price: 1349,
    id: "f25",
    src: "images/ha2.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Puma (Handbags)",
    price: 790,
    id: "f26",
    src: "images/ha3.jpg",
    rating: 4,
    quantity: 1,
    type: "women",
  },
  {
    name: "Adi (Set)",
    price: 960,
    id: "f27",
    src: "images/ks1.jpg",
    rating: 4,
    quantity: 1,
    type: "kids",
  },
  {
    name: "KK (Set)",
    price: 850,
    id: "f28",
    src: "images/ks2.jpg",
    rating: 3,
    quantity: 1,
    type: "kids",
  },
  {
    name: "Nova (Set)",
    price: 1249,
    id: "f29",
    src: "images/ks3.jpg",
    rating: 5,
    quantity: 1,
    type: "kids",
  },
  {
    name: "Nova (T-shirt)",
    price: 449,
    id: "f30",
    src: "images/kt1.jpg",
    rating: 4,
    quantity: 1,
    type: "kids",
  },
  {
    name: "Nova (Shirt)",
    price: 410,
    id: "f31",
    src: "images/kt3.jpg",
    rating: 5,
    quantity: 1,
    type: "kids",
  },
  {
    name: "Vega (T-shirt)",
    price: 449,
    id: "f32",
    src: "images/kt2.jpg",
    rating: 4,
    quantity: 1,
    type: "kids",
  },
];
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
  if (data) {
    responseData = data.item;
    tot = data.totalAmount;
  } else {
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
  console.log(cartList);
};
fetechingRequest();
let firebase = { item: cartList, totalAmount: tot };

async function add(val) {
  console.log(cartList);
  const productId = val.dataset.product;
  console.log(productId);
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
          src: list.src,
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
