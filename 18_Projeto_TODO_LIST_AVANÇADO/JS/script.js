//Seleção de elementos


setTimeout(() => {
    const todoForm = document.querySelector("#todo-form2");
    const todoInput = document.querySelector("#todo-input");
    const todoList = document.querySelector("#todo-list");
    const editForm = document.querySelector("#edit-form");
    const editInput = document.querySelector("#edit-input");
    const cancelEditBtn = document.querySelector("#cancel-edit-btn");
    const searchInput = document.querySelector("#search-input");
    const eraseBtn = document.querySelector("#erase-button");
    const filterBtn = document.querySelector("#filter-select");
    
    let oldInputValue;
    
    //Funcao
        const saveTodo = (text,done = 0, save = 1) => {
            const todo = document.createElement("div")
            todo.classList.add("todo")
    
            const todoTitle = document.createElement("h3")
            todoTitle.innerText = text
            todo.appendChild(todoTitle);
            console.log(todo)
    
            const doneBtn = document.createElement("button")
            doneBtn.classList.add("finish-todo") /*Precisamos da classe dele para identificalo igualno html */
            doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'/*Colocar em forma de texto uma tag igual no html para cria-lo */
            todo.appendChild(doneBtn);
    
            const editBtn = document.createElement("button")
            editBtn.classList.add("edit-todo") /*Precisamos da classe dele para identificalo igualno html */
            editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'/*Colocar em forma de texto uma tag igual no html para cria-lo */
            todo.appendChild(editBtn);
    
            const deleteBtn = document.createElement("button")
            deleteBtn.classList.add("remove-todo") /*Precisamos da classe dele para identificalo igualno html */
            deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'/*Colocar em forma de texto uma tag igual no html para cria-lo */
            todo.appendChild(deleteBtn); 
    
            //Utilizando dados da localStorage
            if(done){
                todo.classList.add("done")
            }
            if(save){
                saveTodoLocalStorage(text, done)
            }
    
            todoList.appendChild(todo);
            todoInput.value = "";
            todo.focus();
        }
    
        const toggleForms = () => {
            editForm.classList.toggle("hide")
            todoForm.classList.toggle("hide")
            todoList.classList.toggle("hide")
        };
    
        const updateTodo = (text) => {
            const todos = document.querySelectorAll(".todo")
            todos.forEach((todo) => {
                let todoTitle = todo.querySelector("h3")
                if(todoTitle.innerText === oldInputValue){
                    todoTitle.innerText = text;
                    updateTodosLocalStorage(oldInputValue, text);
                }
            })
        }
        const getSearchTodos = (search) => {
            const todos = todo.querySelectorAll(".todo");
            todos.forEach((todo) => {
                let todoTitle = todo.querySelector("h3").innerHTML.toLowerCase();
                const normalizedSearch = search.toLowerCase();
                todo.style.display = "flex";/*Faz aparecer as outras tarefas  */
                if(!todoTitle.includes(search)){/*Osquenao tivereminclusos usando o includes */
                    todo.style.display = "none";/*Faz desaparecer se nao achar */
                }
            
            
        });
    };
    const filterTodos = (filterValue)=>{
        const todos = document.querySelectorAll(".todo");
        switch (filterValue) {
            case "all":
                todos.forEach((todo)=>(todo.style.display="flex"));
                break;
    
            case "done":
                todos.forEach((todo)=>(todo.classList.contains("done")? todo.style.display="flex":todo.style.display="none"));
                break;
        
            default:
                break;
        }
    }
    
        //Eventos
        todoForm.addEventListener("submit", (e) => {
    
            e.preventDefault();
            console.log("Enviou form")
            const inputValue = todoInput.value;
    
            if (inputValue){
                saveTodo(inputValue);
                //save todo
            }
        });
    
        document.addEventListener("click", (e) => {
            const targetEl = e.target /*ELE VE SE ALGUEM FOI CLICADO */
            const parentEl = targetEl.closest("div");
            let todoTitle;
    
            if(parentEl && parentEl.querySelector("h3")){
                todoTitle = parentEl.querySelector("h3").innerText;
            }
            if(targetEl.classList.contains("finish-todo")){/*AQUI ELE VERIFICA SE TAL ELEMENTO FOI CLICADO */
                console.log("clicou para finalizar");
                parentEl.classList.toggle("done");
                updateTodosStatusLocalStorage(todoTitle);
            } 
            if(targetEl.classList.contains("remove-todo")){
                parentEl.remove();
                removeTodoLocalStorage(todoTitle);
            }
            if(parentEl.classList.contains("edit-todo")){
                toggleForms()
                editInput.value = todoTitle;
                oldInputValue = todoTitle;
            }
    
        });
        cancelEditBtn.addEventListener("click", (e) => {
            e.preventDefault();
    
            toggleForms()
        });
        editForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const editInputValue = editInput.value
            if(editInputValue) {
                updateTodo(editInputValue)
            }
            toggleForms();
        });
        searchInput.addEventListener("keyup", (e) => {
            const search = e.target.value 
            getSearchTodos(search);
        });
        eraseBtn.addEventListener("click", (e) =>{
            e.preventDefault();
            searchInput.value = "";
            search.dispatchEvent(new Event("Keyup"));
        });
        filterBtn.addEventListener("change", (e) => {
            const filterValue = e.target.value;
            filterTodos(filterValue);
        });
        //Local Storage
        const getTodosLocalStorage = () => {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            return todos;
        }

        const loadTodos = () => {
            const todos=getTodosLocalStorage();

            todos.forEach((todo)=>{
                saveTodo(todo.text,todo.done,0)
            });
        };

        
        const saveTodoLocalStorage = (todo) => {
            const todos = getTodosLocalStorage()
            todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(todos));
        };
        const removeTodoLocalStorage = (todoText)=>{
            const todos = getTodosLocalStorage();
            const filteredTodos = todos.filter(todo =>todo.text !==todoText);
            localStorage.setItem("todos", JSON.stringify(filteredTodos));
        };
        const updateTodosStatusLocalStorage = (todoOldText,todoNewText) => {
            const todos = getTodosLocalStorage();
            todos.map((todo) => todo.text ===todoText?todo.done = !todo.done:null);
            localStorage.setItem("todos", JSON.stringify(filteredTodos));
        };
        const updateTodosLocalStorage = (todoText) => {
            const todos = getTodosLocalStorage();
            todo.text ===todoOldText?(todo.text = todoNewText):null;
            localStorage.setItem("todos", JSON.stringify(filteredTodos));
        };
        loadTodos();
        
    }, 100);
    
    