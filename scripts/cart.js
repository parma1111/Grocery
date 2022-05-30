let data=JSON.parse(localStorage.getItem("items"))
var cart=document.getElementById("cart");
var sum=data.length;
var prices=0;

data.map(function(el,index){
 prices=prices+el.price
 console.log(prices)
 var countdiv=document.getElementById("cart_total")
countdiv.innerText=prices
    var div1=document.createElement("div")

    let img=document.createElement("img");
    img.src=el.image;
    let price=document.createElement("p")
    price.innerText=el.price;
    let name=document.createElement("p")
    name.innerText=el.name
 
    let add=document.createElement("button")
    add.innerText="remove"
    add.setAttribute("id","remove")
    add.addEventListener("click",function(){
       remove(el,index)
        console.log(el)
    })
    div1.append(img,name,price,add)
    cart.append(div1)
   })

function remove(el,index)
{
    window.location.reload();
    data.splice(index,1)
    localStorage.setItem("items",JSON.stringify(data))
}