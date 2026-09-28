let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let className = document.getElementById("className").value;
    let address = document.getElementById("address").value;

    if (name === "" || roll === "" || className === "" || address === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        className: className,
        address: address
    };

    students.push(student);

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("className").value = "";
    document.getElementById("address").value = "";
}


function displayStudents() {

    let list = document.getElementById("studentList");

    list.innerHTML = "";

    students.forEach(function(student, index) {

        list.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.className}</td>
                <td>${student.address}</td>

                <td>
                    <button class="edit-btn" onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button class="delete-btn" onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}


function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}


function editStudent(index) {

    let student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("roll").value = student.roll;
    document.getElementById("className").value = student.className;
    document.getElementById("address").value = student.address;

    students.splice(index, 1);

    displayStudents();
}


function searchStudent() {

    let search = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#studentList tr");

    rows.forEach(function(row) {

        let name = row.cells[1].textContent.toLowerCase();

        if (name.includes(search)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}