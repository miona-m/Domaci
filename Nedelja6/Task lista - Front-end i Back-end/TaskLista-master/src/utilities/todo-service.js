
let apiUrl = 'http://localhost'
let apiPort = "4001";



function getToDo(username) {
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          id: username
        })
    })
    .then(response => response.json()
        , (error) => {
            console.log(error);
        })
    return res;
}
function getAllToDo(){
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`).then(response => response.json()
        , (error) => {
            console.log(error);
        });
    return res;
}

function addToDo(username){
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
          id: username
        })
    })
    return res;
}

function deleteToDo(username) {
    let res = fetch(`${apiUrl}:${apiPort}/api/todo`,{
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
          id: username
        })
    })
    .then(response => response.json(), (error) => {
            console.log(error);
        })
    return res; 
}


export{
    getToDo,
    getAllToDo,
    addToDo,
    deleteToDo
}