const blogTitles = document.getElementsByTagName('h3');
// console.log(blogTitles);
for(const h3 of blogTitles){
    console.log(h3);
    console.log(h3.innerHTML);
    console.log(h3.innerText);
}

const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails){
    console.log(p);
    console.log(p.innerText);
}

const firstTitle = document.getElementById('first-title');
firstTitle.style.color = 'red';
firstTitle.style.backgroundColor = 'black';

const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center';
secondTitle.style.color = 'red';
secondTitle.style.fontSize = '20px';
secondTitle.style.backgroundColor = 'yellow';
secondTitle.style.fontWeight = 'bold';
secondTitle.innerText= 'Title updated by JavaScript';
secondTitle.style.padding='10px';
secondTitle.style.marginLeft = '20px';

const blogs = document.getElementsByClassName('blog');
for(const blog of blogs){
    console.log(blog);
    
}




