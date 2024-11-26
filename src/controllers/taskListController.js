const taskListModel = require("../models/taskListModel")

module.exports = {
    //get/app
    index: (req,res)=>{
        const taskLists = taskListModel.getAllTaskList()
        res.render('app',{taskLists})
    },
    //get/app/nova-lista

    create:(req,res) =>{
        res.render('create.ejs')
    },
    //post/app/nova-lista
    save: (req,res) =>{
        const {title} = req.body
        const newList = taskListModel.createList(title)

        taskListModel.saveList(newList)
        res.redirect('/app')
    },

    //get/app/:id
    show : (req,res) =>{
        const id = req. params.id
        if(!id) throw new Error('Lista de tarefas Não encontrada');
            
        const taskList = taskListModel.getTaskListById(id)
        res.render('show',{taskList})
    },
    //post/app/:id/excluir

    delete: (req,res) =>{
        const {id} = req.params
        taskListModel.deleteList(id)

        res.redirect('/app')
    },
    //post/app/:id/nova-tarefa

    addTask: (req,res) =>{
        const {id} = req.params
        const{title}= req.body

        taskListModel.addTask(id,title)
        res.redirect(`/app/${id}`)
    },
    //post/app/:listId/completar/:taskid
    completedTask: (req,res) =>{
        const {listId, taskId} = req.params 
        taskListModel.completedTask(listId,taskId)

        res.redirect(`/app/${listId}`)
    },
    //post/app/:listId/desfazer/:taskid
    undoTask: (req,res) =>{
        const {listId, taskId} = req.params 
        taskListModel.undoTask(listId,taskId)

        res.redirect(`/app/${listId}`)
    }
}