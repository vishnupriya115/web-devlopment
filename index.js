let parent=document.getElementById("parent");
let btn=document.getElementById("btn");
let toggle=1
btn.addEventListener("click",function()
{ if(toggle==1){
    parent.Style.backgroundColor="rgb(52,52,52)"
    toggle=0
}
else{
    parent.Style.backgroundColor="beige"
    toggle=1
}
})
let a=123.456;
//console.lof(Math.ceil(a)->ceil,round,floor,random)
console.log(Math.ceil(a))
console.log(Math.floor(a))
console.log(Math.round(a))
console.log(Math.random())
//math.random the values are btw 0 and 1 ,0 is included 1 is not included
//floor is more prefered
console.log(Math.floor(Math.random()*10)+1)
let max=55;
let min=40;
console.log(Math.floor((Math.random()*(max-min+1))+1)