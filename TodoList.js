let list = document.querySelector("ul");
console.dir(list);


let type = document.querySelector("input");

function add(event){
    event.stopPropagation;
    let newList = document.createElement("li");
    list.appendChild(newList);
    newList.innerText = this.value;
    this.value = "";

    let cut = document.createElement("button");
    cut.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    newList.appendChild(cut);
    newList.classList.add('hover');
    
    cut.addEventListener("click",function(event){
        newList.remove('newList');
    })
}





type.addEventListener("change", add);


   




