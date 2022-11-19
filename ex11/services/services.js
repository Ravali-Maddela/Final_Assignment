let arr = [
  {
    title: "Preventive Maintainence Services",
    img: "https://img.freepik.com/premium-vector/man-auto-mechanic-front-car-service-auto-repair-shop-character-smiling-guy-with-wrench-vector-illustration-flat-style_165429-1190.jpg?w=360",
    des: "Periodically check and keep you car running",
    offer: "20%",
  },
  {
    title: "Body Repair Services",
    img: "https://img.freepik.com/premium-vector/man-auto-mechanic-front-car-service-auto-repair-shop-character-smiling-guy-with-wrench-vector-illustration-flat-style_165429-1190.jpg?w=360",
    des: "Full chase body repair provides by the experts",
    offer: "10%",
  },
  {
    title: "Car Care Services",
    img: "https://img.freepik.com/premium-vector/man-auto-mechanic-front-car-service-auto-repair-shop-character-smiling-guy-with-wrench-vector-illustration-flat-style_165429-1190.jpg?w=360",
    des: "Get your car sparking clean in just minutes",
    offer: "15%",
  },
];

var card = "";
arr.forEach((el) => {
  card += `<div class="card">
        <h4>${el.title}</h4>
        <img
          src='${el.img}'
          alt=""
        />
        <p>${el.des}</p>
        <p><em>Offer: ${el.offer}</em></p>
        <button>More Details</button>
      </div>`;
});
document.querySelector(".services").innerHTML = card;
setInterval(myTimer, 10);

var ms = 100;
var sec = 60;
var min = 20;

function myTimer() {
  ms = parseInt(ms);
  sec = parseInt(sec);
  min = parseInt(min);
  ms--;
  if (ms == 0) {
    sec = sec - 1;
    ms = 100;
  }
  if (sec == 0) {
    min = min - 1;
    sec = 60;
  }
  if (ms < 10) {
    ms = "0" + ms;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  document.getElementById("offer-time").innerHTML = min + " m :" + sec + " s : " + ms +'ms';
}
