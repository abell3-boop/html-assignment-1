```javascript
// Button changes content
const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");

messageButton.addEventListener("click", function () {
    message.textContent = "Great job! You clicked the button!";
});


// Style changes when typing
const nameInput = document.getElementById("nameInput");
const nameMessage = document.getElementById("nameMessage");

nameInput.addEventListener("input", function () {
    if (nameInput.value.length > 0) {
        nameInput.style.backgroundColor = "#e6f0ff";
        nameInput.style.border = "2px solid #4a6fa5";
        nameMessage.textContent = "Nice! You are typing.";
    } else {
        nameInput.style.backgroundColor = "white";
        nameInput.style.border = "1px solid #999";
        nameMessage.textContent = "Start typing to change the style!";
    }
});


// Dynamic list
const itemInput = document.getElementById("itemInput");
const addItemButton = document.getElementById("addItemButton");
const learningList = document.getElementById("learningList");

addItemButton.addEventListener("click", function () {
    const newItemText = itemInput.value.trim();

    if (newItemText !== "") {

        // Create a new list item
        const newListItem = document.createElement("li");
        newListItem.textContent = newItemText;

        // Create a Remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.type = "button";

        // Remove the list item when clicked
        removeButton.addEventListener("click", function () {
            newListItem.remove();
        });

        // Add the Remove button to the list item
        newListItem.appendChild(removeButton);

        // Add the new item to the list
        learningList.appendChild(newListItem);

        // Clear the input
        itemInput.value = "";
    }
});
```
