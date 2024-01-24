const items = document.getElementsByClassName('item');
for(const item of items){
    item.addEventListener('click', function(event){
        // remove the item 
        //document.getElementById('item-container').removeChild(item);
        event.target.parentNode.removeChild(event.target);
    })
}

document.getElementById('add-item').addEventListener('click', function(){
    const li = document.createElement('li');
    li.innerText = "Add Item";
    const parent = document.getElementById('item-container');
    parent.appendChild(li);

})