let employee = {};
let employeeInfo = [
  {
    empId: 1,
    name: "Sofia",
    address: "Sec",
    dob: '09 - 08 - 1998',
    number: 9876452846,
    dept: "IT",
  },
  {
    empId: 2,
    name: "Keerthi",
    address: "Hyd",
    dob: '09 - 04 - 1991',
    number: 9876452846,
    dept: "BPO",
  },
  {
    empId: 3,
    name: "Swetha",
    address: "Sec",
    dob:' 09 - 08 - 1978',
    number: 9876452846,
    dept: "R&D",
  },
  {
    empId: 4,
    name: "Vikram",
    address: "chennai",
    dob: '09 - 10 - 1960',
    number: 9976452846,
    dept: "HR",
  },
  {
    empId: 5,
    name: "Virhan",
    address: "Vishaka",
    dob: '09 - 08 - 1993',
    number: 9876498846,
    dept: "L&D",
  },
];

function addEmp(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("tnum").value;
  let dept = document.getElementById("dept").value;
  employee = {
    empId: empId,
    name: name,
    address: address,
    dob: dob,
    number: number,
    dept: dept,
  };
  console.log(employee, employeeInfo);
  let id;
  console.log(empId);
  employeeInfo.filter((el) => {
    if (empId == el.empId) id = el.empId;
  });
  console.log(id);
  if (id == empId) {
    alert("Employee already existed");
  } else {
    employeeInfo.push(employee);
    alert("employee added");
  }
  console.log(employeeInfo);
  table();
}
console.log(employeeInfo);

function updateEmp(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("tnum").value;
  let dept = document.getElementById("dept").value;
  //   employeeInfo = JSON.parse(localStorage.getItem("employeeInfo"))
  //     ? JSON.parse(localStorage.getItem("employeeInfo"))
  //     : [];
  employee = {
    empId: empId,
    name: name,
    address: address,
    dob: dob,
    number: number,
    dept: dept,
  };
  let id;
  let index;
  employeeInfo.filter((el, i) => {
    if (empId == el.empId) {
      id = el.empId;
      index = i;
    }
  });
  function update(array, index, newValue) {
    array[index] = newValue;
  }
  if (id == empId) {
    update(employeeInfo, index, employee);
    // localStorage.setItem("employeeInfo", JSON.stringify(employeeInfo));
    alert("employee updated succesfully");
    console.log(employeeInfo);
  } else {
    alert("employee doesn't exist");
  }

  console.log(employeeInfo);
  table();
}

function deleteFn(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let id;
  let index;
  employeeInfo.filter((el, i) => {
    if (empId == el.empId) {
      id = el.empId;
      index = i;
    }
  });
  if (id == empId) {
    employeeInfo.splice(index, 1);
    document.getElementById(empId).remove();
    alert("employee deleted succesfully");
    console.log(employeeInfo);
  } else {
    alert("employee doesn't exist");
  }
  table();
}

function moveFirst(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("tnum").value;
  let dept = document.getElementById("dept").value;
  employee = {
    empId: empId,
    name: name,
    address: address,
    dob: dob,
    number: number,
    dept: dept,
  };

  const foundIdx = employeeInfo.findIndex((el) => el.empId == empId);
  console.log(foundIdx);
  employeeInfo.splice(foundIdx, 1);
  employeeInfo.unshift(employee);
  console.log(employeeInfo);
  table();
}
function moveLast(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("tnum").value;
  let dept = document.getElementById("dept").value;
  employee = {
    empId: empId,
    name: name,
    address: address,
    dob: dob,
    number: number,
    dept: dept,
  };

  const foundIdx = employeeInfo.findIndex((el) => el.empId == empId);
  console.log(foundIdx);
  employeeInfo.splice(foundIdx, 1);
  employeeInfo.push(employee);
  console.log(employeeInfo);
  table();
}
function movePrevious(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("tnum").value;
  let dept = document.getElementById("dept").value;
  employee = {
    empId: empId,
    name: name,
    address: address,
    dob: dob,
    number: number,
    dept: dept,
  };

  const foundIdx = employeeInfo.findIndex((el) => el.empId == empId);

  let val = employeeInfo[foundIdx - 1];
  employeeInfo[foundIdx - 1] = employeeInfo[foundIdx];
  employeeInfo[foundIdx] = val;

  table();
}
function moveNext(e) {
  e.preventDefault();
  let empId = document.getElementById("empId").value;
  let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let number = document.getElementById("tnum").value;
  let dept = document.getElementById("dept").value;
  employee = {
    empId: empId,
    name: name,
    address: address,
    dob: dob,
    number: number,
    dept: dept,
  };

  const foundIdx = employeeInfo.findIndex((el) => el.empId == empId);
  let val = employeeInfo[foundIdx + 1];
  employeeInfo[foundIdx + 1] = employeeInfo[foundIdx];
  employeeInfo[foundIdx] = val;

  table();
}
function table() {
  let tablerow = "";
  employeeInfo.forEach((el) => {
    tablerow += `<tr id=${el.empId}>
      <td class='tdata'>${el.empId}</td>
      <td class='tdata'>${el.name}</td>
      <td class='tdata'>${el.address}</td>
      <td class='tdata'>${el.number}</td>
      <td class='tdata'>${el.dob}</td>
      <td class='tdata'>${el.dept}</td>
      </tr>`;
  });
  document.getElementById("tbody").innerHTML = tablerow;
}
table();
