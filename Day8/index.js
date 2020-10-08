/* EXERCISE 5: 
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
            */
function addNewTask() {
  const taskList = document.querySelector("#myTaskList");
  let newLi = document.createElement("li");
  let newLiContent = document.querySelector("#newTask").value;
  newLi.innerText = newLiContent;
  taskList.appendChild(newLi);
  document.querySelector("#newTask").value = "";
}
/* EXERCISE 6: 
                Create a method "removeLast" which removes the last item from the task list
            */
function removeLast() {
  let liArray = document.querySelectorAll("li");
  let liArrayLast = liArray.length;
  if (liArrayLast === 0) {
    alert("There is nothing to remove");
  } else {
    liArray[liArrayLast - 1].remove();
  }
}
/* EXERCISE 7: 
           Create a method "removeFirst" which removes the first item from the task list
           */
function removeFirst() {
  let liArray = document.querySelectorAll("li");
  let liArray0 = liArray.length;
  if (liArray0.length === 0) {
    alert("There is nothing to remove");
  } else {
    liArray[0].remove();
  }
}

/* EXERCISE 8: 
               Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
            */
function getTasksAsArray() {
  let liArray = document.querySelectorAll("li");
  let newArray = [];

  for (let i = 0; i < liArray.length; i++) {
    newArray = newArray.join(" ");
    console.log(newArray);
  }
}

/* EXERCISE 9:
               Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
               onchange event listener ad applies it as background to every list item
            */

function changeTaskBackgroundColor() {
  let color = document.getElementById("colorPicker").value;
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
}

/*
function changeTaskBackgroundColor() {
  let color = document.getElementById("#colorPicker").value;
  document.getElementsByTagName("main")[0].style.backgroundColor = color;
}
*/
/*
            let colorValue;
            let testB = function(){
                let colorValueHold = document.querySelector("#colorPicker").value;
                colorValue = colorValueHold;
            };
            window.addEventListener("DOMContentLoaded", function) {
                document.querySelector("#colorPicker").addEventListener("change", colorGrab)
            }
*/
/* EXTRA */

/* EXERCISE 10: 
               Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
               Use your spare time to beautify your task list with CSS.

               Suggestion:
               - Break the code into many function for semplicity 
               - Reuse the functions previously created
            */
function bubblesort() {
  //I create an array with task converted in tasks
  getTasksAsArray();
  //I sort the array in alphabetical order
  arrayTask.sort();
  //I replace each li item with the text coming from the sorted array of tasks
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  for (let i = 0; i < arrayTask.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = arrayTask[i];
    li.className = "task-list__item";

    taskList.appendChild(li);
    // listTasks[i].innerText = arrayTask[i]
  }
  arrayTask = [];
}
