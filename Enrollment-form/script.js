var row = 1;

function displayDetails(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var branch= document.getElementById("branch").value;
    var gender = document.getElementById("gender").value;
 

    if(!name || !age || !email || !course || !branch ||!gender){
        alert("Please fill all the boxes!!");
        return;
    }
var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);
var cell4 = newRow.insertCell(3);
var cell5 = newRow.insertCell(4);
var cell6 = newRow.insertCell(5);

cell1.innerHTML = name;
cell2.innerHTML = age;
cell3.innerHTML = email;
cell4.innerHTML = course;
cell5.innerHTML = branch;
cell6.innerHTML = gender;
row++;
}