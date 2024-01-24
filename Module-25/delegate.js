const items = document.getElementsByClassName('item');
for(const item of items){
    item.addEventListener('click', function(){
        // remove the item 
        document.getElementById('item-container').removeChild(item);
    })
}