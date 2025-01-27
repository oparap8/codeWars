// 1. **addTask(taskName)**: Adds a task to the list. Each task should have a unique ID.
// 2. **removeTask(taskId)**: Removes a task by its ID.
// 3. **listTasks()**: Logs all tasks in the console in the format `Task ID: Task Name`.
// 4. **markAsComplete(taskId)**: Marks a task as complete.

function Task(name, id){
    this.name = name;
    this.id = id;
    this.complete = false
}

let tasks = {
    taskList : [],
    addTask : function (taskName) {this.taskList.push(taskName)},
    removeTask : function (taskId) {
        for (let i = 0; i < this.taskList.length; i++){
            if (this.taskList[i].id === taskId){
                this.taskList.splice(i, 1)
            }
        }
    },
    listTasks : function() {
        this.taskList.forEach(element => console.log(element))
    },
    markAsComplete : function (taskId) {
        for (let i = 0; i < this.taskList.length; i++){
            if (this.taskList[i].id === taskId){
                this.taskList[i].complete = true
            }
        }
    }
}

let washPlate = new Task('wash plate', 1)
let sweepRoom = new Task('sweep room', 2)
let cleanToilet = new Task('clean toilet', 3)

tasks.addTask(washPlate)
tasks.addTask(sweepRoom)
tasks.addTask(cleanToilet)
tasks.listTasks()
tasks.markAsComplete(1);
tasks.removeTask(2);
tasks.listTasks();