

function mypartice() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => btnWork(data))

}


function btnWork(data){

    const uls = document.getElementById('ul-p');

    for(user of data){
        const liC = document.createElement('li');
        liC.innerText = user.name;

        uls.appendChild(liC);
    }



}


