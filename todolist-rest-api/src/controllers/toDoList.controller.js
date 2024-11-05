import Task from '../models/toDoList.model.js'

function listAllTasks(req, res) {
    Task.find({}).then((task) => res.json(task)).catch((err) => res.json(err))
}

function createTask(req, res) {
    new Task(req.body).save().then((task) => res.json(task)).catch((err) => res.json(err))
}

function readTask(req, res) {
    const { taskId } = req.params

    Task.findById(taskId).then((task) => res.json(task)).catch((err) => res.json(err))
}

function updateTask(req, res) {
    const { taskId } = req.params

    Task.findOneAndUpdate({ _id: taskId }, req.body, { new: true }).then((task) => res.json(task)).catch((err) => res.json(err))
}

function deleteTask(req, res) {
    const { taskId } = req.params

    Task.findOneAndDelete({ _id: taskId }).then((task) => res.json({ message: 'Task successfully deleted' })).catch((err) => res.json(err))
}

export {
    listAllTasks,
    createTask,
    readTask,
    updateTask,
    deleteTask
}