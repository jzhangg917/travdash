function updateTime() {
  const now = new Date();
  const dayElement = document.getElementById('day');
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');
  
  const dayString = now.toLocaleDateString('en-US', { weekday: 'long' });
  const dateString = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const timeString = now.toLocaleTimeString('en-US');
  
  dayElement.textContent = dayString;
  dateElement.textContent = dateString;
  timeElement.textContent = timeString;

  // Apply stronger pulse animations every minute
  dayElement.style.animation = "pulseSkyBlue 1s ease-in-out";
  dateElement.style.animation = "pulseYaleBlue 1s ease-in-out";
  timeElement.style.animation = "pulseCrimson 1s ease-in-out";

  // Reset animation after pulse
  setTimeout(() => {
      dayElement.style.animation = "none";
      dateElement.style.animation = "none";
      timeElement.style.animation = "none";
  }, 1000);
}

updateTime();
setInterval(updateTime, 60000); // Update every minute
