function loadusers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUrls2(data))
}
 


function displayUrls2(data){
    const ul = document.getElementById('users-list');

    for(users of data){
       

        const li = document.createElement('li');
        li.innerText = users.name;
        ul.appendChild(li);
    }
}