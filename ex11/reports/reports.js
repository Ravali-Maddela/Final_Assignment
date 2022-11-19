let arr = [
    {
      cId: "C1001",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1002",
      customerName: "Albert Harry",
      servicesName: "Preventing Maintainence Services",
      serviceDate: "28-jan-2020",
      cost: 5000,
    },
    {
      cId: "C1003",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1004",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1006",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1007",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1008",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1009",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1010",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
    {
      cId: "C1011",
      customerName: "Maria Anders",
      servicesName: "Car Care Service",
      serviceDate: "22-jan-2020",
      cost: 4500,
    },
  ];
  var customers = "";

  customers += `<table>
        <thead>
            <th>C Id</th>
            <th>Customer Name</th>
            <th>Services Name</th>
            <th>Services Date</th>
            <th>Cost</th>
        </thead>
        <tbody>`;
  arr.forEach((el) => {
    customers += `<tr>
                <td>${el.cId}</td>
                <td>${el.customerName}</td>
                <td>${el.servicesName}</td>
                <td>${el.serviceDate}</td>
                <td>${el.cost}</td>
            </tr>`;
  });
  customers += `</tbody>
    </table>`;
  document.querySelector(".main").innerHTML = customers;
