let clock = document.getElementById('clock')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
setInterval(() => {
  let now = new Date();
  let soat = now.getHours();
  let minut = now.getMinutes();
  let sekond = now.getSeconds();

  hours.textContent = soat
  minutes.textContent = minut
  seconds.textContent = sekond

}),1000;
