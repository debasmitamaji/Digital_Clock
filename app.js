setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let am_pm = "AM";

  if (hour > 12) {
    hour -= 12; // hour = hour - 12;
    am_pm = "PM";
  }

  hour = hour.toString().padStart(2, "0");
  minute = minute.toString().padStart(2, "0");
  second = second.toString().padStart(2, "0");

  document.querySelector(
    "#clock"
  ).innerText = `${hour}:${minute}:${second} ${am_pm}`;
}, 1000);

// function greet() {
//   console.log("Hello, World!");
// }

// setTimeout(greet, 5000);
// setInterval(greet, 1000);
