let dob;
let tillDate;
let dobTime;
let tillDateTime;
let age;

function dobFn() {
  dob = new Date(document.getElementById("dob").value);
  dobTime = dob.getTime();
}

function tillDateFn() {
  tillDate = new Date(document.getElementById("date").value);
  tillDateTime = tillDate.getTime();
}

function calculateAge(event) {
    event.preventDefault()
  var diff = tillDateTime - dobTime;
  var age_dt = new Date(diff);
  console.log(age_dt);
  console.log(age_dt.getUTCFullYear());
  console.log(Math.abs(age_dt.getUTCFullYear() - 1970));
  age = Math.abs(age_dt.getUTCFullYear() - 1970);
  document.getElementById("showAge").innerHTML = 'Result : ' + age;
}


