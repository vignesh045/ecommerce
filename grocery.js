const container = document.getElementById("image-container");
const url = 'https://trial-fc6a1-default-rtdb.firebaseio.com/';
let a = localStorage.getItem("name");

const bookList = [
  {
    name: "Pril Perfect Active Lime Grease Fighter - 750 ml (Green)",
    price: 149,
    id: "q1",
    src: "images/gro/h1.jpeg",
    rating: 4,
    quantity: 1,
    type: "stap",
  },
  {
    name: "Vim Dishwash Liquid Gel Lemon 750ml Bottle",
    price: 174,
    id: "q2",
    src: "images/gro/h2.jpg",
    rating: 4,
    quantity: 1,
    type: "stap",
  },
  {
    name: "Lizol Disinfectant Surface & Floor Cleaner Liquid, Citrus - 5 L | Kills 99.9% Germs",
    price: 374,
    id: "q3",
    src: "images/gro/h3.jpg",
    rating: 4,
    quantity: 1,
    type: "stap",
  },
  {
    name: "Odonil Bathroom Air Freshener Zipper - Joyful Lavender - 10 g",
    price: 320,
    id: "q4",
    src: "images/gro/h4.jpg",
    rating: 4,
    quantity: 1,
    type: "stap",
  },
  { 
    name: "Godrej aer Smart Matic – Automatic Air Freshener Refill, Premium Fragrance - Alive (2200 sprays)",
    price: 201,
    id: "q5",
    src: "images/gro/h5.jpg",
    rating: 4,
    quantity: 1,
    type: "stap",
  },
  {
    name: "Mortein Mosquito Killer Liquid Vaporizer Refill - Buy 4, Get 2 Free Pack",
    price: 306,
    id: "q6",
    src: "images/gro/h6.jpg",
    rating: 4,
    quantity: 1,
    type: "stap",
  },
  {
    name: "Chaayos Mini Samosas (150g Pack) | Chai Time Snack | Ready to Eat Mini Samosa Snacks | Tasty Mini Samosas | Indian",
    price: 175,
    id: "q7",
    src: "images/gro/s1.jpg",
    rating: 4,
    quantity: 1,
    type: "snack",
  },{
    name: "Kurkure Namkeen - Puffcorn (Yummy Cheese) - 55 g Pack",
    price: 20,
    id: "q8",
    src: "images/gro/s2.jpg",
    rating: 4,
    quantity: 1,
    type: "snack",
  },{
    name: "Lotte Choco Pie, 336g",
    price: 100,
    id: "q9",
    src: "images/gro/s3.jpg",
    rating: 4,
    quantity: 1,
    type: "snack",
  },
  {
    name: "A2B Snacks - Madras Mixture, 200g Carton",
    price: 89,
    id: "q10",
    src: "images/gro/s4.jpg",
    rating: 3,
    quantity: 1,
    type: "snack",
  },
  {
    name: "Unibic Snack Bar Almond & Oats, 12 x 30 g",
    price: 255,
    id: "q11",
    src: "images/gro/s5.jpg",
    rating: 4,
    quantity: 1,
    type: "snack",
  },  
   {
      name: "Haldiram's Nagpur Moong Dal, 200g",
    price: 49,
    id: "q12",
    src: "images/gro/s6.jpg",
    rating: 3,
    quantity: 1,
    type: "snack",
  },
  {
    name: "head & Shoulders Cool Menthol Anti Dandruff Shampoo 650 ML",
    price: 150,
    id: "q13",
    src: "images/gro/p1.jpg",
    rating: 4,
    quantity: 1,
    type: "per",
  },
  {
    name: "Mamaearth Onion Hair Fall Shampoo for Hair Growth & Hair Fall Control, with Onion Oil & Plant Keratin 250ml",
    price: 231,
    id: "q14",
    src: "images/gro/p2.jpg",
    rating: 4,
    quantity: 1,
    type: "per",
  },
  {
    name: "Himalaya Anti-Hair Fall Shampoo With Bhringaraja 400 ml",
    price: 204,
    id: "q15",
    src: "images/gro/p3.jpg",
    rating: 4,
    quantity: 1,
    type: "per",
  },
  {
  name: "NIVEA Women Face Wash for Acne Prone Skin, Milk Delights Turmeric, Reduces 99.9% Acne causing Bacteria, 100 ml ",
    price: 450,
    id: "q16",
    src: "images/gro/p4.jpg",
    rating: 4,
    quantity: 1,
    type: "per",
  },
  {
  name: "Himalaya Purifying Neem Face Wash, 400 ml",
    price: 150,
    id: "q17",
    src: "images/gro/p5.jpg",
    rating: 4,
    quantity: 1,
    type: "per",
  },
   {
 name: "Biotique Bio White Advanced Fairness Face Wash, 200 ml",
  price: 120,
  id: "q18",
  src: "images/gro/p6.jpg",
  rating: 4,
  quantity: 1,
  type: "per",
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
  const response = await fetch(`${a}cart.json`, {
    method: "PUT",
    body: JSON.stringify(firebase),
  });
}
