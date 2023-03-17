
function myFun(){
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => myFuns(data))
}



function myFuns(data) {
    const info = document.getElementById('my-ul');

    for(user of data){
        const myLi = document.createElement('li');
        myLi.innerText = user.name;
        info.appendChild(myLi); 
    }

}