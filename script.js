// JavaScript to manage dynamic text fields
const container = document.getElementById("container");
const addButton = document.getElementById("addButton");
let fieldCount = 0;
const maxFields = 10;

addButton.addEventListener("click", () => {
  if (fieldCount < maxFields) {
    // Create a new text field
    const textField = document.createElement("input");
    textField.type = "text";
    textField.className = "text-field";

    // Append the text field to the container
    container.appendChild(textField);

    // Increment the field count
    fieldCount++;
  } else {
    alert("Maximum number of text fields reached!");
  }
});
