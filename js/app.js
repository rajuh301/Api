function loadData2(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1'

    fetch(url)

    .then(res => res.json())
    .then(data => console.log(data))
}

function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data => displayUrls(data))
}


function displayUrls(data){
    console.log(data)
}


function loadData4(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json)
    .then(data => displayUrls4(data))
}

function displayUrls4(data){
    console.log(data)
}

