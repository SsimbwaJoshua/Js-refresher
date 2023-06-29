"use strict";

////////////////////////////////////////////////////////////////////////////////
/////////////////////// CHALLENGE  Two////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// Define the alarms array
let alarms = [];

const timeplace = document.querySelector(".time");
const snoozePopup = document.querySelector(".snooze-popup");
const closeAlarm = document.querySelector(".alarm-close");
const snoozeAlarm = document.querySelector(".alarm-snooze");

//////////////////popup operations
closeAlarm.addEventListener("click", () => {
  snoozePopup.classList.add("hidden");
});
snoozeAlarm.addEventListener("click", () => {
  snoozePopup.classList.add("hidden");
  const wantedObj = alarms[alarms.length - 1];
  console.log("wanted alarm");
  console.log(wantedObj);
  //add time on click of the snooze button
  wantedObj.time = 10;
  wantedObj.ring();
});

const timeRightNow = new Date();
//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

let setAlarmTime = "";
// Define an alarm object
let alarm = {
  alarmID: "",
  time: "",
  message: "alarm set",
  days: [],
  snoozeDuration: 0,
  ring: function () {
    const countDown = setInterval(() => {
      let minutes = String(Math.trunc(this.time / 60)).padStart(2, 0);
      let seconds = String(Math.trunc(this.time % 60)).padStart(2, 0);

      //displaying remaining time to the user
      timeplace.textContent = `${minutes}:${seconds}`;
      this.time = this.time - 1;

      if (this.time === 0) {
        timeplace.textContent = `ringing ringing ringing ringing`;
        //snooze pop up
        snoozePopup.classList.remove("hidden");
        clearInterval(countDown);
      }
      if (this.time < 0) {
        clearInterval(countDown);
      }
    }, 1000);
    return countDown;
  },
};
alarm.ring();

// Function to set new alarms
function setAlarm(tym) {
  const newAlarm = { ...alarm };

  newAlarm.alarmID = `alarm${alarms.length + 1}`;
  //calculate the time difference

  const [hours, minutes] = tym.split(":");

  const timeSetByUser = new Date();
  timeSetByUser.setHours(hours);
  timeSetByUser.setMinutes(minutes);

  const timeDifferenceInseconds =
    Math.abs(+timeRightNow - +timeSetByUser) / 1000;
  newAlarm.time = timeDifferenceInseconds;

  // adding the alarm to the alarms array
  alarms.push(newAlarm);
  newAlarm.ring();
}

// Function to find an alarm by its ID
function findAlarm(ID) {
  const alarm = alarms.find((obj) => {
    if (obj.alarmID === ID) {
      return obj;
    } else {
      throw new Error("Alarm doesnt exist");
    }
  });

  return alarm;
}

// Function to create an iterable for the alarms array
function createIterable() {
  alarms.forEach((alarm) => {
    return alarm;
  });
}

////////////////////////////////////////////////////////////////////////////
/////////////////////Implementation///////////////////////////////////

// adding alarm (put a string of the time yu want the alram to ring in 24hr format)
// setAlarm("12:58");
