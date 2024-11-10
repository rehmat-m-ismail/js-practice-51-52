function deleteRow(btn) {
    // Find the row containing the button
    var row = btn.parentNode.parentNode;
    // Remove the row from the table
    row.parentNode.removeChild(row);
}

const myBox = document.getElementById("mybox");

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it 😤";
});

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "skyblue";
    event.target.textContent = "Click Me 😀";
});

let counter = 0;
    
function updateCounter() {
  document.getElementById("counter").innerText = counter;
}

function increaseCounter() {
  counter++;
  updateCounter();
}

function decreaseCounter() {
  counter--;
  updateCounter();
}
function restartCounter() {
  counter = 0;
  updateCounter();

}


function submitForm() {
    // Get the form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display the data in the output div
    document.getElementById("output").innerHTML = `
      <h3>Form Data:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
  }


  function toggleContent() {
    const content = document.getElementById("fullContent");
    const button = document.getElementById("readMoreBtn");

    // Check if content is currently visible
    if (content.style.display === "none") {
      content.style.display = "block"; // Show the content
      button.innerText = "Read less";  // Change button text
    } else {
      content.style.display = "none";  // Hide the content
      button.innerText = "Read more";  // Reset button text
    }
  }

  // Initially hide the full content
  document.getElementById("fullContent").style.display = "none";



  const studentTable = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
  let currentRow;

  function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    const row = studentTable.insertRow();
    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = grade;

    const actionsCell = row.insertCell(3);
    actionsCell.innerHTML = `
      <button class="edit-btn1" onclick="editStudent(this)">Edit</button>
      <button class="delete-btn1" onclick="deleteStudent(this)">Delete</button>
    `;

    document.getElementById("studentForm").reset();
  }

  function deleteStudent(button) {
    const row = button.parentElement.parentElement;
    row.remove();
  }

  function editStudent(button) {
    currentRow = button.parentElement.parentElement;
    document.getElementById("editName").value = currentRow.cells[0].innerText;
    document.getElementById("editAge").value = currentRow.cells[1].innerText;
    document.getElementById("editGrade").value = currentRow.cells[2].innerText;
    document.getElementById("editForm").style.display = "block";
  }

  function updateStudent() {
    currentRow.cells[0].innerText = document.getElementById("editName").value;
    currentRow.cells[1].innerText = document.getElementById("editAge").value;
    currentRow.cells[2].innerText = document.getElementById("editGrade").value;
    document.getElementById("editForm").style.display = "none";
  }
