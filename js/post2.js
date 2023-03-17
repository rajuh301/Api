function newFetch(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => newFuncation (data))
}



function newFuncation (datas){
    const div = document.getElementById('div');
    for(const data of datas){
        console.log(data)

        const cDiv = document.createElement('div');
        cDiv.classList.add('textStyle')
        cDiv.innerHTML=`

        <h3>ID: ${data.id}</h3>
        <h2>Title: ${data.title}</h2>
        <p>Post Description: ${data.body}</p>
        `;

        div.appendChild(cDiv);
    }


}

