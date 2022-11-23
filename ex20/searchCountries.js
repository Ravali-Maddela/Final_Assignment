let country = "";
let city = "";
let state = "";
countries();

async function countries() {
  let response = await fetch("https://countriesnow.space/api/v0.1/countries");
  let data = await response.text();

  let arrobj = JSON.parse(data);

  country += '<option value="">Select Country</option>';
  arrobj.data.forEach((el) => {
    country += `<option value="${el.country}">${el.country}</option>`;
  });
  document.getElementById("countries").innerHTML = country;
}

city += '<option value="">Select City</option>';
state += '<option value="">Select State</option>';
document.getElementById("states").innerHTML = state;
document.getElementById("cities").innerHTML = city;

async function fn(e) {
  let stateresponse = await fetch(
    "https://countriesnow.space/api/v0.1/countries/states"
  );
  let statedata = await stateresponse.text();
  let stateobj = JSON.parse(statedata);
  stateobj.data.forEach((el) => {
    if (el.name === e.target.value) {
      console.log(el.cities);
      el.states.forEach(
        (sta) => (state += `<option value="${sta.name}">${sta.name}</option>`)
      );
    }
  });
  document.getElementById("states").innerHTML = state;
  let response = await fetch("https://countriesnow.space/api/v0.1/countries");
  let data = await response.text();
  let arrobj = JSON.parse(data);
  arrobj.data.forEach((el) => {
    if (el.country === e.target.value) {
      console.log(el.cities);
      el.cities.forEach((c) => (city += `<option value="${c}">${c}</option>`));
    }
  });
  document.getElementById("cities").innerHTML = city;
}

//no specific api for country-state and city
// so this example displays the states and cities based on country selected
