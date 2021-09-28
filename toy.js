const container = document.getElementById("image-container");
const url = "https://trial-fc6a1-default-rtdb.firebaseio.com/";
let a = localStorage.getItem("name");

document.getElementById("vijay").innerHTML = a;
const bookList = [
  {
    name: "MAMYPOKKO PANTS(Extra absorb diapers  -L 96 pieces)",
    price: 1149,
    id: "t1",
    src: "images/toy/7.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Huggies Wonder Baby Dry Pants, Double Extra Large ((15 - 25 kg), 22 Counta absorb diapers)",
    price: 374,
    id: "t2",
    src: "images/toy/8.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Doobidoo Baby Pants - Large Size Diapers (96 Count) - All Round Softness with Bubble soft topsheet and anti leak side cuffs (9-14 kgs)",
    price: 574,
    id: "t3",
    src: "images/toy/9.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Mamaearth Daily Moisturizing Natural Baby Lotion (400 ml)",
    price: 320,
    id: "t4",
    src: "images/toy/l2.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Himalaya Baby Body Lotion, For All Skin Types (400 ml)",
    price: 201,
    id: "t5",
    src: "images/toy/l1.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Johnson's Baby Lotion, 500ml",
    price: 306,
    id: "t6",
    src: "images/toy/l3.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Johnson's Baby Powder, 600g",
    price: 275,
    id: "t7",
    src: "images/toy/p1.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Mee Mee Baby Powder (Fresh Feel - 500 g (Single Pack))",
    price: 234,
    id: "t8",
    src: "images/toy/p2.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Himalaya Baby Powder (400g)",
    price: 231,
    id: "t9",
    src: "images/toy/p3.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Fareto Microfibre 58 X 42 Inches Blanket, Aqua Blue And Olive Green, 1 Piece",
    price: 499,
    id: "t10",
    src: "images/toy/b1.jpg",
    rating: 3,
    quantity: 1,
    type: "baby",
  },
  {
    name: "BeyBee® New Born Babies Combo Blanket & Dry Sheet (Blue, Royal Blue)",
    price: 475,
    id: "t11",
    src: "images/toy/b2.jpg",
    rating: 4,
    quantity: 1,
    type: "baby",
  },
  {
    name: "Happy Home Products 2nd Gen New Born Baby Full Size Sleeping Sat 5 Pic Set 0-30 Months (Pink- Blue)",
    price: 999,
    id: "t12",
    src: "images/toy/b3.jpg",
    rating: 3,
    quantity: 1,
    type: "baby",
  },
  {
    name: "WireScorts Bot Robot Toy (Multicolor)",
    price: 650,
    id: "t13",
    src: "images/toy/g1.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "eErlik Plastic Friction Powered Cars, Pack Of 4, Multicolour",
    price: 231,
    id: "t14",
    src: "images/toy/g2.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "Centy Toys Plastic Pull Back Auto Rickshaw, Number Of Pieces: 1, Multicolour",
    price: 564,
    id: "t15",
    src: "images/toy/g3.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "SUPER TOY LCD Writing Tablet 8.5Inch E-Note Pad ",
    price: 450,
    id: "t16",
    src: "images/toy/g6.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "Negi Drop Puzzle Game",
    price: 150,
    id: "t17",
    src: "images/toy/g4.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "Handcrafted Wooden Labyrinth Board Game Ball in Maze - Indoor Puzzle Game Toys for Kids ( Brown , 6 Inch)",
    price: 650,
    id: "t18",
    src: "images/toy/g5.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "Jassi Toy Special Couple Teddy Bear for Birthday/ Valentine Day Gift (Brown, 18cm)",
    price: 300,
    id: "t19",
    src: "images/toy/g7.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "TEDSTREE 4 Feet/ 121cm Skin Friendly Ultra Soft Giant Stuffed Teddy Bear with Paw Printed Perfect for Presents, Valentines",
    price: 500,
    id: "t20",
    src: "images/toy/g9.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "Ventp ProductionBest Gift A Teddy Bear Purple Color Medium Size 3 Feet for Your Loved On  2.2 out of 5 stars 4",
    price: 664,
    id: "t21",
    src: "images/toy/g8.jpg",
    rating: 4,
    quantity: 1,
    type: "toy",
  },
  {
    name: "Nivia 1019 Football, Youth Size 5",
    price: 300,
    id: "t22",
    src: "images/toy/s1.jpg",
    rating: 4,
    quantity: 1,
    type: "sport",
  },
  {
    name: "WRF Brazuca PU Football, Size 5, (Multicolour)",
    price: 650,
    id: "t23",
    src: "images/toy/s2.jpg",
    rating: 4,
    quantity: 1,
    type: "sport",
  },
  {
    name: "adidas UCL Finale Soccer Ball",
    price: 1150,
    id: "t24",
    src: "images/toy/s3.jpg",
    rating: 4,
    quantity: 1,
    type: "sport",
  },
  {
    name: "XTROKE® Popular Willow Cricket Bat with Red Tennis Ball and Bat Cover Combo for All Tennis Ball Full Size",
    price: 650,
    id: "t25",
    src: "images/toy/s4.jpg",
    rating: 4,
    quantity: 1,
    type: "sport",
  },
  {
    name: "Kookaburra Wooden Tennis Cricket Bat Size 5 for 12-13 Years Kids Free Tennis Ball",
    price: 550,
    id: "t26",
    src: "images/toy/s5.jpg",
    rating: 4,
    quantity: 1,
    type: "sport",
  },
  {
    name: "11D Leather Cricket Ball (Red) for t-20 Match Best Performance Ball, Pack of 1 Ball",
    price: 249,
    id: "t27",
    src: "images/toy/s6.jpg",
    rating: 4,
    quantity: 1,
    type: "sport",
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
