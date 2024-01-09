// 2nd way
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// 3rd way
const blueButton = document.getElementById('blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


