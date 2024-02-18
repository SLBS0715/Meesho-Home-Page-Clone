import ethnic from "./data/ethnic.js";
import WomenWestern from "./data/WomenWestern.js";
import Men from "./data/Men.js";
import Kids from "./data/Kids.js";
import Kitchen from "./data/kitchen.js";
import Beauty from "./data/Beauty.js";
import jewels from "./data/jewels.js";
import Bags from "./data/Bag.js";
import Electronics from "./data/Electronics.js";
// women ethnic

let womenethic = document.getElementById("ethnic");
function womenEthicFunc() {
  return ethnic
    .map((el) => {
      let list = "";
      list = el.data.map((element) => `<p>${element}</p>`).join(" ");

      return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
    })
    .join("");
}
womenEthic.innerHTML = womenEthicFunc();

// WomenWestern
let womenWestern = document.getElementById("womenWestern");
function womenWesternFunc() {
  return WomenWestern.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
womenWestern.innerHTML = womenWesternFunc();

// Mens
let men = document.getElementById("men");
function menFunc() {
  return Men.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
men.innerHTML = menFunc();

// Kids
let kids = document.getElementById("kids");
function kidsFunc() {
  return Kids.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
kids.innerHTML = kidsFunc();

// Home & Kitchen
let kitchen = document.getElementById("kitchen");
function kitchenFunc() {
  return Kitchen.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
kitchen.innerHTML = kitchenFunc();

// Beauty & Health
let beauty = document.getElementById("beauty");
function beautyFunc() {
  return Beauty.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
beauty.innerHTML = beautyFunc();

//Jewellery & Accessories
let Jewellery = document.getElementById("Jewellery");
function JewelleryFunc() {
  return jewels
    .map((el) => {
      let list = "";
      list = el.data.map((element) => `<p>${element}</p>`).join(" ");

      return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
    })
    .join("");
}
Jewellery.innerHTML = JewelleryFunc();

// BAGS
let bags = document.getElementById("bags");
function bagsFunc() {
  return Bags.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
bags.innerHTML = bagsFunc();

// Electronics
let electronics = document.getElementById("electronics");
function electronicsFunc() {
  return Electronics.map((el) => {
    let list = "";
    list = el.data.map((element) => `<p>${element}</p>`).join(" ");

    return `
   <div class="column">
   <h4>${el.heading}</h4>
   ${list}
  
   </div>`;
  }).join("");
}
electronics.innerHTML = electronicsFunc();
//////////////////////////////////product section /////////////////////////////////////////////////////////
import data from "./meesho/data.js";
const category = [...new Set(data.map((el) => el.category))];

console.log(category);

let filterData = [];

document.addEventListener("click", (e) => {
  // console.log(e.target.id);
  // console.log(document.getElementById(e.target.id).checked);

  const bluetoothEl = document.getElementById("bluetooth").checked;
  const ChainsEl = document.getElementById("chains").checked;
  const KurtaEl = document.getElementById("kurtas").checked;
  const AccessoriesEl = document.getElementById("accessories").checked;
  const sareesEl = document.getElementById("sarees").checked;
  const watchEl = document.getElementById("watch").checked;

  // console.log(bluetoothEl);
  filterData = data.filter(
    (el) =>
      (bluetoothEl && el.category == "bluetooth Headset") ||
      (ChainsEl && el.category == "Men Chains") ||
      (KurtaEl && el.category == "Kurtas") ||
      (AccessoriesEl && el.category == "Mobile Accessories") ||
      (sareesEl && el.category == "sarees") ||
      (watchEl && el.category == "watch")
  );
  // console.log(filterData);
  renderProductData();
});

function renderProductData() {
  let filterDataHtml = "";

  if (filterData[0]) {
    filterData.forEach((el) => {
      filterDataHtml += `
  <div class="productCard" onclick="clickProduct(${el.id})">
    <div class="product_image">
      <img src="./meesho/productImage/${el.img}" alt="">
     </div>
       <h3 class="productname" style="color:rgb(87, 85, 85);font-size:16px;">${el.name}</h3>
        <p class="product_price">
        <span>₹</span>
        <span>${el.price}</span></p>
  </div>
  `;
    });
  } else {
    data.forEach((el) => {
      filterDataHtml += `
  <div class="productCard" onclick="clickProduct()">
    <div class="product_image">
      <img src="./meesho/productImage/${el.img}" alt="">
     </div>
       <h3 class="productname" style="color:rgb(87, 85, 85);font-size:16px;">${el.name}</h3>
        <p class="product_price">
        <span>₹</span>
        <span>${el.price}</span></p>
  </div>
  `;
    });
  }

  console.log(filterDataHtml);
  document.getElementById("product_category_displayId").innerHTML =
    filterDataHtml;
}
renderProductData();
