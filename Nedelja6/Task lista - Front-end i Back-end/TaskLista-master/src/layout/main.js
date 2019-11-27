import { TaskList } from "../components/taskList";
import { InputForm } from "../components/inputForm";
import { Task } from "../components/task";
import { getToDo } from "../utilities/todo-service";
import { UserInput } from "../components/userInput";
import { addToDo } from "../utilities/todo-service";
import { deleteToDo } from "../utilities/todo-service";
import { ADDRGETNETWORKPARAMS } from "dns";


class Main {
    constructor() {
        let inputForm=new InputForm();
        let taskList=new TaskList();
        let userInput= new UserInput();

        this.node=document.createElement('main');
        this.node.appendChild(inputForm.getNode());
        this.node.appendChild(userInput.getNode());
        this.node.appendChild(taskList.getNode());

        userInput.btnAddUserOnClick(function(){
            getToDo(userInput.txtUsername.value).then(data =>{
                let items=data.items;
                items.forEach(item => {
                    let task = new Task(item.title);
                    task.setBtnDeleteClickEvent(()=>{
                        task.deleteItem();
                    })
                    taskList.addTask(task);
                })
            })

        },

        inputForm.setBtnAddOnClick(function(){
            let text=inputForm.txtTitle.value;
            text=text.trim();

            if(text=='')return;
            
        addToDo(userInput.username, text).then(data=>{
                if (data.success == 'true') {
                    let task = new Task(text);
                    task.setBtnDeleteClickEvent(() =>{
                        deleteToDo(userInput.username, task.title).then(data => console.log(data));
                        task.deleteItem();
                    });
                   taskList.addTask(task); 
                } 
            })
        
            let task=new Task(text);
            task.setBtnDeleteClickEvent(()=>{
                task.deleteItem();
            });
            taskList.addTask(task);
        }),
    
        getToDo('marko').then(data =>{
            let items=data.items;
            items.forEach(item => {
                let task = new Task(item.title);
                task.setBtnDeleteClickEvent(()=>{
                    task.deleteItem();
                })

                taskList.addTask(task);
            })
            
        })
    )
 }
 getNode(){
    return this.node;
}

}

export {
    Main
}
