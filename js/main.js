// add task input field.
let taskInput = document.getElementById('newTask');
// add task button
let addBtn = document.getElementById('addBtn');
// ul incompleteTasks
let incompleteTask = document.getElementById('incompleteTasks');
// ul completed
let doneTask = document.getElementById('done');




// Set the click addTask function.
addBtn.addEventListener('click', function() {
    console.log('Add Task Check!!!!');

    // check if the input is not empty
    if (taskInput.value != '') {

        // create a li element
        let listItem = document.createElement('li');
        // create a input check box element
        let checkBox = document.createElement('input'); //checkbx
        // create a span element
        let span = document.createElement('span');
        // create a delete button
        let deleteBtn = document.createElement('button'); //delete button

        // add task to span tag
        span.innerText = taskInput.value;

        // set type
        checkBox.type = 'checkbox';
        // add delete text
        deleteBtn.innerText = 'Delete';
        // set delete class
        deleteBtn.className = 'delete';


        //Append input checkBox, span and delete button to li
        listItem.appendChild(checkBox);
        listItem.appendChild(span);
        listItem.appendChild(deleteBtn);
        //Append li to incompleteTask
        incompleteTask.appendChild(listItem);

        // the new task is incomplete, when checked the input checkbox the task will move to done
        // set bindTask parameter
        bindTask(listItem, completed);

        // whenever add a new task the task input will be empty
        taskInput.value = '';
    } else {
        alert('Please Enter Your Task!');
    }

});


// set task completed
let completed = function() {
    console.log('Complete Task Check!!!');

    let listItem = this.parentNode;
    doneTask.appendChild(listItem);
    // when checked the check box. The task item will move to completed.
    // set bindTask parameter
    bindTask(listItem, incomplete);

}

// set task incomplete.
let incomplete = function() {
    console.log('Incomplete Task Check!!!');

    let listItem = this.parentNode;
    incompleteTask.appendChild(listItem);
    // when uncheck the check box. The task item will move to incomplete.
    // set bindTask parameter
    bindTask(listItem, completed);
}


// create a checkBox and delete function
let bindTask = function(taskList, checkBoxEvent) {
    console.log('Task Checkbox Check!!!');

    // select Tasks checkBoxs and checked or uncheck
    taskList.querySelector('input[type = checkbox]').onchange = checkBoxEvent;

    // select delete button and Delete task function.
    taskList.querySelector('button.delete').onclick = function() {
        console.log('Delete Task Check!!!');

        //confirm that if you want to delete the tasks
        let result = confirm("Are you sure you want to delete?");
        if (result) {
            let listItem = this.parentNode;
            let ul = listItem.parentNode;

            //Delete the the item from ul.
            ul.removeChild(listItem);
        }

    }

}
