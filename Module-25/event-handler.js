function handleClick(){
    const clickingMethod = document.getElementById('clicking-method');
    clickingMethod.innerText = 'set by inner function';
}

// direct way

document.getElementById('handle-event').addEventListener('click', function(){
    const p = document.getElementById('clicking-method');
    p.innerText = 'set by event listener function';
})

document.getElementById('update-name').addEventListener('click', function(){
    const 
})