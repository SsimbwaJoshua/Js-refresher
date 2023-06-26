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

///////////////////////////////
////alarm ring with matching time/////
////////////////////////////////

const timeRightNow = new Date();

// let time = 10
let setAlarmTime = "";
// Define an alarm object
let alarm = {
  alarmID: "",
  time: "",
  message: "alarm set",
  days: [],
  snoozeDuration: 0,
  ring: function () {
    /////////////////////////////////
    // FIRST IMPLEMENTATION
    /////////////////////////////////////
    // if (this.time == alarmhappeningTime) {
    //   console.log("alaerm goes off");
    // } else {
    //   console.log("didnt match");
    // }

    const countDown = setInterval(() => {
      let minutes = String(Math.trunc(this.time / 60)).padStart(2, 0);
      let seconds = String(Math.trunc(this.time % 60)).padStart(2, 0);
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

// Function to add new alarms
function setAlarm(tym, day, snoze) {
  const newAlarm = { ...alarm };

  newAlarm.alarmID = `alarm${alarms.length + 1}`;
  //calculate the time difference

  const [hours, minutes] = tym.split(":");

  const time1 = new Date();
  time1.setHours(hours);
  time1.setMinutes(minutes);

  const timeDifferenceInseconds = Math.abs(+timeRightNow - +time1) / 1000;
  newAlarm.time = timeDifferenceInseconds;
  console.log(timeDifferenceInseconds);

  // newAlarm.message = messag;
  newAlarm.days = [day];
  newAlarm.snoozeDuration = snoze;

  alarms.push(newAlarm);
  newAlarm.ring();
}

// Function to find an alarm by its ID
function findAlarm(ID) {
  const wantedObj = alarms.find((obj) => {
    if (obj.alarmID === ID) {
      return obj;
    } else return;
  });
  console.log("wanted alarm");
  console.log(wantedObj);
  return wantedObj;
}

// Function to create an iterable for the alarms array
function createIterable() {
  // TODO: Implement this function
}

////////////////////////////////////////////////////////////////////////////
/////////////////////Implementation///////////////////////////////////

// adding alarm
// setAlarm("13:20", 1, 1);
// setAlarm("15:29", "number2", 2, 2);
// console.log("alrms array");
// console.log(alarms);

//finding alarm
// findAlarm("alarm1");

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//snoozing
// rememberSnoozed("alarm1");
