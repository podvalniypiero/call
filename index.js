
const images=document.querySelectorAll("img");// название тега img
console.log(images);

images.forEach(function(item){
    item.addEventListener("mouseover",message)
})

function message(){
    alert("You clicked here!");

}

const items=document.querySelectorAll('.item');
console.log(items);

items.forEach(item=> {
    item.addEventListener('mouseover',()=>{

        removeFocuse(); 
        item.classList.add('selected');
})
})

removeFocuse=()=>{
    items.forEach(item=>{
        item.classList.remove('selected');
    })
}