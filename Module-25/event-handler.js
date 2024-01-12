function handleClick(){
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = 'set by inner function';
}

// direct way

document.getElementById('handle-event').addEventListener('click', function(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'set by event listener function';
})

// add event listener connect input element to click handler 

document.getElementById('update-name').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    // console.log(nameField.value); input value return 
    const p = document.getElementById('clicking-method');
    p.innerText = nameField.value;
    nameField.value = '';


})