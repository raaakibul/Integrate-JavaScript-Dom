document.getElementById("delete-btn").addEventListener("click", function(){
    document.getElementById("delete-info").style.display = "none";
})
// focus 
document.getElementById("delete-confirm").addEventListener('focus', function(){
    document.body.style.backgroundColor = 'lightcoral';
})
// blur
document.getElementById("delete-confirm").addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})
// keydown
// document.getElementById("delete-confirm").addEventListener('keydown', function(){
//     document.body.style.backgroundColor = 'black';
// })

// keyup
// document.getElementById("delete-confirm").addEventListener('keyup', function(){
//     document.body.style.backgroundColor = 'pink';
// })


