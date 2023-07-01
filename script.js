"use strict";
// ELEMENTS
const days = document.querySelector(".timer_days");
const hours = document.querySelector(".timer_hours");
const minutes = document.querySelector(".timer_minutes");
const seconds = document.querySelector(".timer_seconds");
let countDownDate = new Date();

// FUNCTIONS

// Adding 5 days and setting the hour to 23:59:59
const countDownDateTransform = function () {
  countDownDate.setHours(23, 59, 59);
  countDownDate.setDate(countDownDate.getDate() + 5);
};

countDownDateTransform();

// Timer
const countDownTimer = setInterval(
  function () {
    // The actual date
    const now = new Date().getTime();

    // Distance between the actual date and the countdown date
    const distance = countDownDate.getTime() - now;
    // Time calculations for days, hours, minutes and seconds
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = String(
      Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, 0);
    const minute = String(
      Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, 0);
    const second = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
      2,
      0
    );

    // Display the results
    days.innerHTML = `<p class="input">${day}d</p>`;
    hours.innerHTML = `<p class="input">${hour}h</p>`;
    minutes.innerHTML = `<p class="input">${minute}m</p>`;
    seconds.innerHTML = `<p class="input number">${second}s</p>`;
  },
  // Update the countdown every 1 second
  1000
);
