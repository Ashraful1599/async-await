async function getDemodata(){
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let json = await data.json();
    
    document.getElementById("demo").innerHTML = json.userId;
}

getDemodata();