let div=document.querySelector("div");
let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(event){
    event.stopImmediatePropagation();
    let item=document.createElement("li");
    item.innerText=input.value;
    ul.appendChild(item);
    console.log(input.value);
    input.value="";
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("delete");
    delBtn.style.backgroundColor="purple";
    delBtn.style.padding="5px 15px 5px 15px ";
    delBtn.style.borderRadius="8px";
    delBtn.style.marginLeft="50px";
    item.style.fontSize="23px"
    delBtn.style.color="white";
    item.appendChild(delBtn);
console.dir("clicked");
});
    ul.addEventListener("click",function(event){
        if(event.target.nodeName=="BUTTON"){
            let listItem=event.target.parentElement;
            listItem.remove()
            console.log("deleted");
        }else{
            console.log("not deleted")
        }
    })

