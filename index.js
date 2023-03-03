let addbutton = document.getElementById('inputbtn');
let listcontainer = document.getElementById('list_container');
let todoinput = document.getElementById('inputlist');

addbutton.addEventListener('click', function (){
    const todotext = todoinput.value;
    
    if(!todotext) {
        alert("Enter a text!");
        return;
    }
    var todocontainer =document.createElement('div');
    listcontainer.appendChild(todocontainer);
    todocontainer.classList.add('todocon');

    var todo = document.createElement('div')
    todocontainer.appendChild(todo);
    todo.classList.add('todos');

    var pharagraph = document.createElement('p')
    pharagraph.innerText = todoinput.value;
    todo.appendChild(pharagraph);

    var deletebtn = document.createElement("button")
    deletebtn.classList.add('deletebtn');
    deletebtn.innerHTML = "delete";
    todocontainer.appendChild(deletebtn);

    deletebtn.addEventListener('click',function(){
        listcontainer.removeChild(todocontainer)
    })
    todoinput.value = "" ;
    // listcontainer.appendChild(pharagraph);
    // pharagraph.classList.add('todotext');
})
