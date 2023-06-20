"use strict";

// let number = 5;
// let age = prompt("how old are you");

// if (number === Number(age)) alert(`your age is ${age}`);

//

// The nullish coalescing operator is written as two question marks ??
// The result of a ?? b is:

// if a is defined, then a,
// if a isn’t defined, then b.

//////////////////////////////////////////////////////////////
//MATH OPERATIONS
////////////////////////////////////////////////////////////////

//math.truc(not supported in explorer)
// Math.round()
//t0 round the number of decimal places required we use // toFixed(3) note:returns a string
// math.ceil()
// math.floor()
// Math.max();
// Math.min();
// exponential is 2**4 is 2 ti the power of 4

//////////////////////////////////////////////////////////////
//STRING OPERATIONS
////////////////////////////////////////////////////////////////
// \n to create a break in the String
//String.length  // written without () becoz its not a function
//toUpperCase, toLowerCase

//////////////////////////////////////////////////////////////
//ARRAY OPERATIONS
////////////////////////////////////////////////////////////////
// push pop shift unshift
// splice is used to delete from an array arr.splice(0,1) meaning from the first index to position one are deleted

// const salaries = {
//   john: 100,
//   pete: 200,
//   josh: 300,
// };

// const entry = Object.values(salaries);

// console.log(...entry);

// console.log(entry);
// let sum = 0;

// entry.forEach((item) => {
//   sum += item;
//   console.log(sum);
// });

//////////////////////////////////////////////////////////////
//JSON OPERATIONS
////////////////////////////////////////////////////////////////

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object

//////////////////////////
//TRY CATCH
//////////////////////////

// let json = '{"name":"John", "age": 30}';
// const working = JSON.parse(json);
// console.log(working.name);
// try {
//   alert(`hei ${working.names}`);
// } catch (err) {
//   alert(err.message);
// }

// let json = '{"name":"John", "age": 30}';
// const working = JSON.parse(json);
// console.log(working.name);
// try {
//   alert(`hei ${working.names}`);
// } catch (err) {
//   console.log(err.message);
//}

// let json = '{"name":"John", "age": 30}';
// const working = JSON.parse(json);
// console.log(working.name);
// try {
//   if (!working.names) {
//     throw new Error("names isnt there");
//   }
//   console.log(`hei ${working.names}`);
// } catch (err) {
//   alert(err.message);
// }

////////////////////////////////////////////////////////////////////////////////
/////////////////////// CHALLENGE 0NE //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Define the properties array
let properties = [];

let propertiesBackups = [];

/////////////////////////////
const dateListed = new Date().toString();
console.log(dateListed);
const currentDate = new Date();

// Function to calculate the number of days a property has been listed
function daysListed(objec) {
  const date1 = objec.listedDate;
  const date2 = new Date();
  const calcDays = (date1, date2) => {
    numDays = (Math.abs(date1 - date2) / 1000) * 60 * 60 * 24;
    if (numDays < 1) return "Today";
    if (numDays > 1) return `${numDays} Days`;
  };
  return calcDays(date1, date2);
}

// Define a property object
let property = {
  propertyID: "p001",
  location: "Makindye",
  size: 700,
  price: 20000,
  status: "sale",
  ownerContactInfo: {
    name: "joshua",
    phoneNumber: "087665544445",
    email: "helo@gmail.com",
  },
  daysPassed: daysListed(property),
  listedDate: dateListed,
};

let secondProperty = {
  propertyID: "p002",
  location: "kampala",
  size: 200,
  price: 1000,
  status: "sale",
  ownerContactInfo: {
    name: "ssimbwa",
    phoneNumber: "0775555555",
    email: "yes@hfh.com",
  },
  listedDate: dateListed,
  daysPassed: daysListed(secondProperty),
};

// Function to clone a property
function cloneProperty(objectProperty) {
  const propClone = Object(objectProperty);

  propertiesBackups.push(propClone);
}

// Function to freeze a property
function freezeProperty(property) {
  if (property.status == hired) {
    Object.freeze(property);
    Object.freeze(property.ownerContactInfo);
  }
}

// Function to add a new property
function addProperty(newproperty) {
  properties.push(newproperty);
}

// Function to update a property
function updateProperty(testID, newDetails) {
  const wantedObject = properties.find((obj) => {
    if (obj.propertyID == testID) {
      return obj;
    }
  });
  // console.log(wantedObject);
  console.log("properties");

  console.log(properties);
  //deleting the current object
  const filteredArray = properties.filter((obj) => {
    console.log("filter iterations");
    return obj.propertyID !== testID;
  });
  console.log("filterd string");
  console.log(filteredArray);

  //new details
  newDetails = wantedObject.price = 10000;

  //adding wanted updated object
  const addWantedUpdate = filteredArray.push(wantedObject);
  properties = filteredArray;

  console.log(properties);
  return properties;
}

// Function to sort properties

const sortLocation = (namedSort) => {
  const wantedLocation = properties.filter((obj) => {
    return obj.location == namedSort;
  });

  console.log("wanted location");
  console.log(wantedLocation);
};

const sortStatus = (namedSort) => {
  const wantedStatus = properties.filter((obj) => {
    return obj.status == namedSort;
  });
  console.log("wanted status");
  console.log(wantedStatus);
};
////main sort
function sortProperties(namedSort) {
  sortLocation(namedSort);
  sortStatus(namedSort);
}

// other alternative to sort
const alternativeSort = (namedSort) => {
  for (const obj of properties) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === namedSort) {
        return console.log(obj);
      }
    }
  }
  return null;
};

/////////////////////////////////////////////////// implementation//////////////

cloneProperty(property);
// console.log(propertiesBackups);

////////////

addProperty(property);
addProperty(secondProperty);
// console.log(properties);

/////////////////
updateProperty("p001");

////////////////
sortProperties("Makindye");

/////////////////
alternativeSort("Makindye");
