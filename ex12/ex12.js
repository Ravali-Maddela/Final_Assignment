let arr = [
  {
    id:1,
    name: "Maria Anders",
    gender: "Female",
    city: "Hyderabad",
  },
  {
    id:2,
    name: "Andrea Paul",
    gender: "Male",
    city: "Hyderabad",
  },
  {
    id:3,
    name: "Angel Grum",
    gender: "Female",
    city: "Hyderabad",
  },
  {
    id:4,
    name: "Steve Maxwell",
    gender: "Male",
    city: "Hyderabad",
  },
  {
    id:5,
    name: "Jessy Luca",
    gender: "Female",
    city: "Hyderabad",
  },
];

function deleteFn(id){
document.getElementById(id).remove()
}
var Details = "";

Details += `<table class='table table-bordered'>
        <thead>
            <th>Name</th>
            <th>Gender</th>
            <th>City</th>
            <th>Action </th>
        </thead>
        <tbody>`;
arr.forEach((el) => {
  Details += `<tr id='${el.id}'>
                <td>${el.name}</td>
                <td>${el.gender}</td>
                <td>${el.city}</td>
                <td><button class='btn btn-danger' onClick="deleteFn(${el.id})"> Delete </button></td>
            </tr>`;
});
Details += `</tbody>
    </table>`;
document.querySelector(".main").innerHTML = Details;
