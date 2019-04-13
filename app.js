console.log('hello');
const day = document.querySelector('.day');
const time = document.querySelector('.time');
const d = new Date();

const dayNumber = d.getDay();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDay = weekday[dayNumber];

//built in options that can be ran through the toLocaleString(); method. this converts the time stamp into your chosen regions format and then you can give it built in options.
const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};
const timeString = d.toLocaleString('en-US', options);


day.textContent += ` ${currentDay}`;
time.textContent += timeString;