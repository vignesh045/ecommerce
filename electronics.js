const container = document.getElementById("image-container");
const url = 'https://trial-fc6a1-default-rtdb.firebaseio.com/';
let a = localStorage.getItem("name");
document.getElementById("vijay").innerHTML = a;
const bookList = [
  {
    name: "JBL C100SI by Harman Wired In Ear Headphones with Mic (Black)",
    price: 644,
    id: "z1",
    src: "images/elect/hp1.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  {
    name: "Boult Audio BassBuds Storm-X in-Ear Wired Earphones with Mic and Full Metal Body for Extra Bass & HD Sound with Passive Noise Cancellation (Red)",
    price: 374,
    id: "z2",
    src: "images/elect/hp2.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  {
    name: "Philips Audio SHE1505 in-Ear Rich Bass Headphones with 10 mm Drivers, Passive Noise Isolation and Mic (Black)",
    price: 249,
    id: "z3",
    src: "images/elect/hp3.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  {
    name: "boAt Bassheads 100 in Ear Wired Earphones with Mic(Black)",
    price: 370,
    id: "z4",
    src: "images/elect/hp4.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  { 
    name: "boAt Bassheads 242 in Ear Wired Earphones with Mic(Active Black)",
    price: 300,
    id: "z5",
    src: "images/elect/hp5.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  {
    name: "boAt Rockerz 400 Wireless Bluetooth On Ear Headphones with Mic (Carbon Black)",
    price: 1111,
    id: "z6",
    src: "images/elect/hp6.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  {
    name: "boAt Rockerz 245v2 Wireless Bluetooth V5.0, 8 Hours Playback Time, IPX5 Sweat and Water Resistance, in-Built mic and Voice Assistant(Active Black)",
    price: 775,
    id: "z7",
    src: "images/elect/hp7.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },{
    name: "JBL T205BT by Harman Wireless Bluetooth in Ear Neckband Headphones with Mic (Black)",
    price: 1234,
    id: "z8",
    src: "images/elect/hp8.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },{
    name: "JBL Tune 500 by Harman Powerful Bass On-Ear Headphones with Mic (Black)",
    price: 1000,
    id: "z9",
    src: "images/elect/hp9.jpg",
    rating: 4,
    quantity: 1,
    type: "hp",
  },
  {
    name: "Lenovo IdeaPad Slim 3 2021 Intel Core i5 11th Gen 14 (35.56cm) FHD IPS Thin & Light Laptop (8GB/512GB SSD/Windows 10/MS Office/Backlit/Fingerprint Reader/2 Yr",
    price: 51000,
    id: "z10",
    src: "images/elect/l1.jpg",
    rating: 3,
    quantity: 1,
    type: "lap",
  },
  {
    name: "ASUS VivoBook S S14 Intel Core i7-1165G7 11th Gen, 14-inch FHD Thin and Light Laptop (8GB RAM/512GB SSD + 32GB Optane Memory/Windows 10/Office 2019/Iris X Graphics-",
    price: 81000,
    id: "z11",
    src: "images/elect/l2.jpg",
    rating: 3,
    quantity: 1,
    type: "lap",
  },
  {
    name: "HP 15 Thin & Light 15.6(39.62cms) FHD Laptop (11th Gen Intel Core i5-1135G7, 8GB DDR4, 1TB HDD, Windows 10 Home, MS Office, Integrated Graphics, FPR, Natural Silver, 1.76 Kg",
    price: 45000,
    id: "z12",
    src: "images/elect/l3.jpg",
    rating: 3,
    quantity: 1,
    type: "lap",
  },
  {
    name: "2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB SSD) - Silver",
    price: 81000,
    id: "z13",
    src: "images/elect/l4.jpg",
    rating: 3,
    quantity: 1,
    type: "lap",
  },
  {
    name: "2019 Apple MacBook Pro (16-inch/40.65 cm, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Silver",
    price: 21119,
    id: "z14",
    src: "images/elect/l5.jpg",
    rating: 3,
    quantity: 1,
    type: "lap",
  },
  {
    name: "2020 Apple MacBook Pro (13.3-inch/33.78 cm, 8GB RAM, 256GB SSD, 1.4GHz Quad-core 8th-Generation Intel Core i5 Processor, Two Thunderbolt 3 Ports) - Space Grey",
    price: 12222,
    id: "z15",
    src: "images/elect/l6.jpg",
    rating: 3,
    quantity: 1,
    type: "lap",
  },
  {
    name: "Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens",
    price: 30000,
    id: "z16",
    src: "images/elect/c1.jpg",
    rating: 3,
    quantity: 1,
    type: "cam",
  },
  {
    name: "Canon PowerShot SX540HS 20.3MP Digital Camera with 50x Optical Zoom (Black)",
    price: 45000,
    id: "z17",
    src: "images/elect/c2.jpg",
    rating: 3,
    quantity: 1,
    type: "cam",
  },
  {
    name: "Nikon D5600 with AF-P 18-55 mm + AF-P 70-300 mm VR Kit",
    price: 65000,
    id: "z18",
    src: "images/elect/c3.jpg",
    rating: 3,
    quantity: 1,
    type: "cam",
  },
  {
    name: "Nikon D7500 20.9MP Digital SLR Camera (Black) with AF-S DX NIKKOR 18-140mm f/3.5-5.6G ED VR Lens",
    price: 86000,
    id: "z19",
    src: "images/elect/c4.jpg",
    rating: 3,
    quantity: 1,
    type: "cam",
  },
  {
    name: "Nikon D850 45.7MP Digital SLR Camera (Black) with AF-S Nikkor 24-120mm F/4G ED VR Lens and 64GB Memory Card4.1 out of 5 stars 5",
    price: 21119,
    id: "z20",
    src: "images/elect/c5.jpg",
    rating: 3,
    quantity: 1,
    type: "cam",
  },
  {
    name: "Nikon D500 20.9MP Digital SLR Camera (Black) with AF-S DX 16-80 f/2.8-4E ED VR Lens",
    price: 50000,
    id: "z21",
    src: "images/elect/c4.jpg",
    rating: 3,
    quantity: 1,
    type: "cam",
  },
  {
    name: "SanDisk Cruzer Blade 32GB USB Flash Drive",
    price: 379,
    id: "z21",
    src: "images/elect/d1.jpg",
    rating: 3,
    quantity: 1,
    type: "dat",
  },
  {
    name: "SanDisk Ultra Dual 32GB USB 3.0 OTG Pen Drive",
    price: 499,
    id: "z21",
    src: "images/elect/d2.jpg",
    rating: 3,
    quantity: 1,
    type: "dat",
  },
  {
    name: "HP FD236W 32GB USB 2.0 Pen Drive (Gray)",
    price: 543,
    id: "z21",
    src: "images/elect/d3.jpg",
    rating: 3,
    quantity: 1,
    type: "dat",
  },
  {
    name: "Toshiba Canvio Basics 1TB Portable External HDD - USB 3.0 for PC Laptop Windows and Mac, 3 Years Warranty, External Hard Drive - Black",
    price: 3222,
    id: "z21",
    src: "images/elect/d9.jpg",
    rating: 3,
    quantity: 1,
    type: "dat",
  },
  {
    name: "Homgee P500 Class 10 16G Micro SDHC TF Flash Memory Card Data Storage UHS-1 High Speed Up to 80MB/s",
    price: 1034,
    id: "z21",
    src: "images/elect/d7.jpg",
    rating: 3,
    quantity: 1,
    type: "dat",
  },
  {
    name: "Samsung T5 500GB Up to 540MB/s USB 3.1 Gen 2 (10Gbps, Type-C) External Solid State Drive (Portable SSD) Alluring Blue (MU-PA500B)",
    price: 5000,
    id: "z21",
    src: "images/elect/d5.jpg",
    rating: 3,
    quantity: 1,
    type: "dat",
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
