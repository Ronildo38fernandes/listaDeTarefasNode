

let taskLists = [
    {id:'1',title:'Estudos',tasks:[{id:'1', title: 'Estudar nodeJs', completed: false}]},
    {id:'2',title:'tarefas de casa',tasks:[{id:'2', title: 'Lavar calçada', completed: false}]},
    {id:'3',title:'coisas do trabalho',tasks:[{id:'3', title: 'Verificar chamados', completed: false}]}
]


module.exports = {
    // Método que retorna a lista de todas as tarefas
    getAllTaskList: () => {
        // Retorna a variável global taskLists (assumindo que ela está definida em outro lugar no código)
        return taskLists;
    },
    getTaskListById(id){
        return taskLists.find(list=> list.id === id)
    },

    // Método para criar uma nova lista de tarefas com um título
    createList: (title) => {
        // Cria um novo objeto de lista com um ID único e o título fornecido
        const newList = {
            id: Math.floor(Math.random() * 99999).toString(), // Gera um ID aleatório entre 0 e 99999 e o converte para string
            title: title, // Define o título da lista com o valor recebido como argumento
            tasks: []
        };
        // Retorna o objeto da nova lista
        return newList;
    },

    // Método para salvar uma lista de tarefas em uma variável global (ou banco de dados)
    saveList: (taskList) => {
        // Verifica se o título da lista está vazio
        if (taskList.title === '') throw new Error('titulo vazio'); // Lança um erro se o título for uma string vazia

        // Adiciona a lista à variável global taskLists
        taskLists.push(taskList);
    },
    deleteList:(listId)=>{
        const listIndex = taskLists.findIndex(list =>list.id === listId)
        taskLists.splice(listIndex,1)
    },

    addTask: (listId , taskTitle) =>{

        const newTask = {
            id : Math.floor(Math.random() * 99999).toString(),
            title: taskTitle,
            completed: false
        }
        taskLists.find(list=> list.id === listId).tasks.push(newTask)
    },

    completedTask: (listId,taskId) =>{
        const taskList =  taskLists.find(list=> list.id === listId)
        const task = taskList.tasks.find(task => task.id === taskId)
        task.completed = true
    },

    undoTask:(listId,taskId) =>{
        const taskList =  taskLists.find(list=> list.id === listId)
        const task = taskList.tasks.find(task => task.id === taskId)
        task.completed = false
    },

};