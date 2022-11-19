// Simulating a periodic stock price change and displaying on the console. stop when the count is 5

const roundNum = () => Math.round(Math.random() * 10);

let stockPrice = setInterval(async () => {
  await console.log(roundNum());
  if (roundNum() === 5) clearInterval(stockPrice);
}, 1000);
