// We start getting just the HTML elements we need for add the task and change the background color
const adding = document.getElementById('taskList');
const newItem = document.getElementById('myInput');
const addTaskButton = document.getElementById('addTaskButton');
//Background color selectors
const css = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.getElementById("btn");


// Main fucntion that will create and display new tasks/items
function addTask() {
    let taskText = newItem.value;

    if (taskText.trim() !== '') {
        let listItem = document.createElement('li');

        let taskTestNode = document.createTextNode(taskText);

        //Create a delete button along with the text
        let deleteButton = document.createElement('button');
        listItem.addEventListener('click', addLine);
        // This will delete the item but if there's not a ne
        if (taskText) {
            deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', function() {
            listItem.remove();
        });
        } else {
            return;
        };
        
        deleteButton.style.marginLeft = '8px'; // To add some space since it was showing all items with no spaces between

        listItem.appendChild(taskTestNode);
        listItem.appendChild(deleteButton);

        adding.appendChild(listItem);

        newItem.value = '';
        
    }
}

// This will change the color 1 and color 2 we select manually
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

// To reset the background color to the original one
function resetBtn() {
    body.style.background = "rgb(195, 240, 240)";
    css.textContent = body.style.background + ";";
}


// We add the event for adding a task using button
addTaskButton.addEventListener('click', function() {
    addTask();
})

// We add the event for adding a task using key "Enter"
newItem.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// Function inlcuidng the event to cross out a line for completed tasks
function addLine() {
    this.classList.toggle('line-cross');
}

// Events to change the background color by picking color 1 and color 2, then the reset button
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", resetBtn);