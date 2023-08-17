function makeGreen(){
    document.body.style.backgroundColor = 'green';
}

function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


const grayButton = document.getElementById('make-gray-button');
grayButton.onclick = makeGray;

function makeGray(){
    document.body.style.backgroundColor = 'gray';
}