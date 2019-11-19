const addTaskButton = document.querySelector('#btn-add');
const taskListContainer = document.querySelector('#tasks-container');
const textBoxTitle = document.querySelector('#txt-title');

addTaskButton.addEventListener('click', btnAddClick);
textBoxTitle.addEventListener('keyup', txtKeyUp);
function btnAddClick(e) {
    e;
    addItem();
}

function txtKeyUp(e) {
    if (e.keyCode === 13) {
        addItem();
    }
}

function addItem() {
    let txtBox = document.querySelector('#txt-title');
    let text = txtBox.value;
    text = text.trim();

    if (text === '') {
        alert('Task title can\'t be empty!');
        return;
    }
    let priority = document.querySelector('#select-box');
    let options = priority.options;

    let itemContainer = document.createElement('div');
    itemContainer.className = 'task-title';

    let itemText = document.createElement('p');
    itemText.innerHTML =`<h1>${options[options.selectedIndex].value}</h1> ${text}`;
    itemText.className = 'task-title';

    let checkContainer = document.createElement('div');
    checkContainer.className = 'task-check';

    let removeBtn = document.createElement('div');
    removeBtn.className = 'task-remove-btn';
    removeBtn.addEventListener('click', removeTask);
    removeBtn.innerHTML = 'X';

    let chkDone = document.createElement('input');
    chkDone.type = 'checkbox';
    chkDone.className = 'chk-state';
    chkDone.value = 'done';
    chkDone.addEventListener('change', handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);

    txtBox.value = '';

}

function removeTask(e) {
    if (!confirm('Are you sure?')) {
        return;
    }
    let btnToRemove = e.target;
    let divToRemove = btnToRemove.parentElement.parentElement;
    divToRemove.remove();
}

function handleCheckChange(e) {
    let chkBox = e.target;
    let checkContainer = chkBox.parentElement;
    let itemContainer = checkContainer.parentElement;

    if (chkBox.checked) {
        itemContainer.children[0].style.textDecoration = 'line-through';
    } else {
        itemContainer.children[0].style.textDecoration = 'none';
    }
}

let buttonRemoveSelected = document.querySelector('#remove-selected-button');
buttonRemoveSelected.addEventListener('click', removeSelected);

function removeSelected() {
    let inputFields = document.querySelectorAll('.chk-state');
    inputFields.forEach(input => {
        input.checked && input.parentElement.parentElement.remove();
    });

}

let buttonInvertSelected = document.querySelector('#invert-button');
buttonInvertSelected.addEventListener('click', invertSelected);

function invertSelected() {
    let checkFields = document.querySelectorAll('.chk-state');
    checkFields.forEach(check => {
        check.checked = !check.checked;
    });
}