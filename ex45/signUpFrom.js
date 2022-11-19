// console.log(firstName);
let users = [];
function registerFn(e) {
  e.preventDefault();
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let re_pwd = document.getElementById("re-pwd").value;
  let dob = document.getElementById("dob").value;
  let gender = document.getElementsByName("gender").value;
  users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
  if (pwd === re_pwd) {
    let userobj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      pwd: pwd,
      dob: dob,
      gender: gender,
    };
    let userEmail;
    users.filter((el) => (userEmail = el.email));
    console.log(userEmail);
    if (firstName === "" || lastName === "" || email === "" || pwd === "")
      alert("Please enter all details");
    else if (userEmail === email)
      alert("user already registered. Please Login");
    else {
      users.push(userobj);
      localStorage.setItem("users", JSON.stringify(users));
      alert("user register succesfully");
    }
  } else {
    document.getElementById("showError").innerHTML =
      "password mismatch. please check the passwords entered";
  }
  console.log(users);
}
let content='';
function loginFn(e) {
    e.preventDefault()
  users = JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [];
console.log(users);
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("pwd").value;
  let userEmail;
  let userPwd;
  users.filter((el) => {
    userEmail = el.email;
    userPwd = el.pwd;
  });
  console.log(userEmail, userPwd);
  if (email === userEmail && userPwd === pwd){ 
    alert("user login succesfull");
    let loggedUser
   users.filter(user=>{if(userEmail===user.email) loggedUser=user})
    content+=`<div id="loggeduser"><p class='text-success'>You are a Valid user</p>
    <p>Name: ${loggedUser.firstName} ${loggedUser.lastName}</p>
    <p>Email: ${loggedUser.email}</p>
    <p>Date Of Birth: ${loggedUser.dob} </p>
    <p>Gender: ${loggedUser.gender} </p>  </div>
    `;
    console.log(loggedUser.firstName)
    document.getElementById('logged').innerHTML=content;
}
  else alert("user not registered. Please register");

}
