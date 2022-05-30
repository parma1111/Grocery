let i=0;
let id;
var time=Math.floor(Math.random()*4*1000)
var arr=["Your order is accepted","Your order is being packed","Your order is in transit","Your order is out for delivery","Order delivered"];
function debounce(e) {
    e.preventDefault();
    id=setInterval(function (){
        if(i==arr.length){
            clearInterval(id)
        }else{
            alert(arr[i])
            i++;
        }
    },time)
}