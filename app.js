const time = document.getElementById("current-time-utc");

document.addEventListener("DOMContentLoaded", function () {
  // Function to update the current time and day
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
    time.innerText = utcTime;
    document.getElementById("current-day").innerText = currentDay;
  }

  // Update the time and day every second
  setInterval(updateTime, 1000);
});
