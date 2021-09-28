const url = "https://trial-fc6a1-default-rtdb.firebaseio.com/";
let a = localStorage.getItem("name");
document.getElementById("vijay").innerHTML = a;
let responseData;
const cartData = [];
let totalRupees;
let time = 0;
const totalPrice = document.getElementById("total");
const productList = document.getElementById("cart-list");

const getData = async () => {
    const res = await fetch(`${url}${a}.json`);
    if(!res){
      throw new Error("Hi")
    }
  const data = await res.json();
  if (!data.item) {
    const movieEl = document.createElement("div");
    movieEl.classList.add("centered");
    movieEl.innerHTML = "No items were added";
    const btnBuy = document.createElement("div");
    btnBuy.classList.add("btn-buy");
    btnBuy.innerHTML = `
    <a href="index.html"><button>Start Purchase</button></a>
    `;
    productList.append(movieEl);
    productList.append(btnBuy);
    return;
  }
  const responseData = data.item;
  totalRupees = data.totalAmount;
    totalRupees = totalRupees.toString();
    let lastThree = totalRupees.substring(totalRupees.length-3);
    let otherNumbers = totalRupees.substring(0,totalRupees.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    let cartPrice = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  totalPrice.innerHTML = "Total : ₹" + cartPrice;
  for (const key in responseData) {
    cartData.push({
      id: responseData[key].id,
      name: responseData[key].name,
      quantity: responseData[key].quantity,
      price: responseData[key].price,
      src: responseData[key].src,
    });
  }
  if (time === 0) {
    createProduct();
  }
  time++;
};

getData().
 catch ((error)=> {
  console.log("Hi")
  const movieEl = document.createElement("div");
    movieEl.classList.add("centered");
    movieEl.innerHTML = "<h3 style='color:red'>Please ! Check your Internet connection</h3>";
    productList.append(movieEl)
})
function createProduct() {
  cartData.forEach((product) => {
    const movieEl = document.createElement("div");
    movieEl.classList.add("col-lg-2");
    movieEl.classList.add("col-md-4");
    movieEl.classList.add("col-6");
    movieEl.innerHTML = `<img src=${product.src} alt="" /><h3>${product.name}</h3><p>Price : ${product.price}</p><p>Quantity : ${product.quantity}</p><button onClick="add(this)" data-product=${product.id} class="i" >+</button><button class="d" onclick="remover(this)" data-filter=${product.id} >-</button>`;
    productList.append(movieEl);
    console.log(product.name);
  });
  const btnBuy = document.createElement("div");
  btnBuy.classList.add("btn-buy");
  btnBuy.innerHTML = `
    <button onclick="addNow()">Buy now</button>`;
  productList.append(btnBuy);
}
const purchase = document.getElementById("purchase");

function addNow() {
  purchase.style.display = "flex";
}

async function buyNow() {
  const response = await fetch(`${url}${a}.json`, {
    method: "PUT",
    body: JSON.stringify({
      item: [],
      totalAmount: 0,
    }),
  });
  await getData();
  location.reload();
}

let firebase = { item: cartData, totalAmount: totalPrice };
async function add(val) {
  const productId = val.dataset.product;
  cartData.forEach((list) => {
    if (list.id === productId) {
      const existingItem = cartData.find((cart) => cart.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        console.log(list.src);
        cartData.push({
          name: list.name,
          price: list.price,
          quantity: list.quantity,
          id: list.id,
          src: list.src,
        });
      }
    }
  });
  const totalAmount = cartData.reduce(
    (prev, cart) => cart.quantity * cart.price + prev,
    0
  );
  firebase = {
    item: [...cartData],
    totalAmount: totalAmount,
  };

  const response = await fetch(`${url}${a}.json`, {
    method: "PUT",
    body: JSON.stringify(firebase),
  });
  await getData();
  location.reload();
}
async function remover(val) {
  const productId = val.dataset.filter;
  let updatedItems;
  let total;
  cartData.forEach((list) => {
    if (list.id === productId) {
      const existingItem = cartData.find((cart) => cart.id === productId);
      if (existingItem.quantity === 1) {
        updatedItems = cartData.filter((fil) => fil.id !== productId);
        total = totalRupees - existingItem.price;
      } else {
        existingItem.quantity--;
        total = cartData.reduce(
          (prev, cart) => cart.quantity * cart.price + prev,
          0
        );
      }
    }
    if (updatedItems) {
      firebase = {
        item: [...updatedItems],
        totalAmount: total,
      };
    } else {
      firebase = {
        item: [...cartData],
        totalAmount: total,
      };
    }
  });
  const response = await fetch(`${url}${a}.json`, {
    method: "PUT",
    body: JSON.stringify(firebase),
  });
  await getData();
  await location.reload();
}
