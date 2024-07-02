document.addEventListener("DOMContentLoaded", function () {
  // Set the Slack display name and email
  document.getElementById("slack-name").innerText = "Your Slack Display Name";
  document.getElementById("slack-email").innerText = "your-email@example.com";
  document.getElementById("slack-profile-picture").src =
    "path/to/your/image.jpg"; // Ensure the image has natural dimensions

  // Function to update the current time and day
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });

    document.getElementById("current-time-utc").innerText = utcTime;
    document.getElementById("current-day").innerText = currentDay;
  }

  // Initial call to set the time and day immediately
  updateTime();

  // Update the time and day every second
  setInterval(updateTime, 1000);
});
