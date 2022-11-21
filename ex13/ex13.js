let tablerow = "";

function addFn(event) {
  event.preventDefault();

  let id = Date.now();

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  tablerow += `<tr id='${id}' data-name='${name}' data-email='${email}'><td class='tdata' >${name}</td><td class='tdata'>${email}</td>

    <td class='tdata'>

    <button class='btn btn-info' onClick='editFn(${id})'>Edit</button>

    <button class='btn btn-danger'  onClick='deleteFn(${id})'>Delete</button>

    </td></tr>`;

  document.getElementById("tbody").innerHTML = tablerow;

  document.getElementById("name").value = "";

  document.getElementById("email").value = "";
}
function editFn(id) {
  tablerow = document.getElementById(id);

  console.log(tablerow);

  let data = tablerow.querySelectorAll(".tdata");

  console.log(data);

  let name = data[0].innerHTML;

  let email = data[1].innerHTML;

  console.log(name, email);

  data[0].innerHTML = `<input type='text' id='inputName' value=${name} >`;

  data[1].innerHTML = `<input type='email' id='inputEmail' value=${email}>`;

  data[2].innerHTML = `<button class='btn btn-primary' onClick='updateFn(${id})'>Update</button>
    
     <button class='btn btn-warning' onClick='cancelFn(${id})'>Cancel</button>`;
}

function updateFn(id) {
  tablerow = document.getElementById(id);

  let data = tablerow.querySelectorAll(".tdata");

  let name = data[0].querySelector("#inputName").value;

  let email = data[1].querySelector("#inputEmail").value;

  console.log(name, email);

  data[0].innerHTML = name;

  data[1].innerHTML = email;

  data[2].innerHTML = `<button class='btn btn-info' onClick='editFn(${id})'>Edit</button>
    
      <button class='btn btn-danger' onClick='deleteFn(${id})'>Delete</button>`;
}
function cancelFn(id) {
  tablerow = document.getElementById(id);

  let data = tablerow.querySelectorAll(".tdata");

  let name = tablerow.getAttribute("data-name");

  let email = tablerow.getAttribute("data-email");

  console.log(name, email);

  data[0].innerHTML = name;

  data[1].innerHTML = email;

  data[2].innerHTML = `<button class='btn btn-info' onClick='editFn(${id})'>Edit</button>
  
   <button class='btn btn-danger' onClick='deleteFn(${id})'>Delete</button>`;
}

function deleteFn(id) {
  document.getElementById(id).remove();
}
