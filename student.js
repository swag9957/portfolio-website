function addStudent(){

let roll=document.getElementById("roll").value;
let name=document.getElementById("name").value;
let branch=document.getElementById("branch").value;

let row=`
<tr>
<td>${roll}</td>
<td>${name}</td>
<td>${branch}</td>
<td>
<button onclick="this.parentElement.parentElement.remove()">
Delete
</button>
</td>
</tr>
`;

document.getElementById("studentList").innerHTML+=row;

document.getElementById("roll").value="";
document.getElementById("name").value="";
document.getElementById("branch").value="";
}