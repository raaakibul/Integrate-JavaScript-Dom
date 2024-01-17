document.getElementById("delete-btn").addEventListener("click", function(){
    document.getElementById("delete-info").style.display = "none";
})
// focus 
document.getElementById("delete-confirm").addEventListener('focus', function(){
    document.body.style.backgroundColor = 'lightcoral';
})