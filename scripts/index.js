// Store cart items in local storage with key: "items"

const url='https://grocery-masai.herokuapp.com/items';
const container = document.getElementById("items");

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    appendData(res.data);
  })
  .catch(function (err) {
      console.log(err);
  });
  
function appendData(data) {
  container.innerHTML="";
  data.map(function (el) {
    let div = document.createElement("div");

    let name = document.createElement("p")
    name.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = el.price;

    let img = document.createElement("img");
    img.src = el.image;

  let add=document.createElement("button")
  add.innerText="Add to Cart"
  add.setAttribute("id","add_to_cart")
  add.addEventListener("click",function() {
    addtocart(el)
    console.log(el)
  })
      div.append(img,name,price,add)
      container.append(div);
  });
}

var arr=JSON.parse(localStorage.getItem("items"))||[];
var count=document.getElementById("item_count")
count.innerText=arr.length
function addtocart(el){
  window.location.reload()
  arr.push(el)

  localStorage.setItem("items", JSON.stringify(arr))
}
