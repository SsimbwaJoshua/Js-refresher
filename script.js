"use strict";

// Define the properties array
let properties = [];

// Define a property object
let property = {
  propertyID: "k001",
  location: "kampala",
  size: 0,
  price: 0,
  status: "sold",
  ownerContactInfo: {
    name: "lamour",
    phoneNumber: "3434343",
    email: "22",
  },
  listedDate: new Date(),
};
let property2 = {
  propertyID: "",
  location: "zttt",
  size: 0,
  price: 0,
  status: "second one",
  ownerContactInfo: {
    name: "dhdh",
    phoneNumber: "2435363",
    email: "22",
  },
  listedDate: new Date(),
};
let property3 = {
  propertyID: "",
  location: "arttt",
  size: 0,
  price: 0,
  status: "third one",
  ownerContactInfo: {
    name: "dhdh",
    phoneNumber: "2435363",
    email: "22",
  },
  listedDate: new Date(),
};

// Function to clone a property
function cloneProperty(property) {
  const propertyClone = Object(property);
  return propertyClone;
}

// Function to freeze a property
function freezeProperty(property) {
  return Object.freeze(property);
}

// Function to add a new property
function addProperty(property) {
  properties.push(property);
}

// Function to update a property
function updateProperty(propertyID, newDetails) {
  let property = properties.find((property) => {
    return property.propertyID == propertyID;
  });

  if (property) {
    property = {
      ...property,
      ...newDetails,
    };
  } else {
    throw new Error("Property doesnt exist");
  }
}

//sort by location
const sortedPropertyLocation = function () {
  properties.sort((p1, p2) => {
    let prop1 = p1.location.toLowerCase();
    let prop2 = p2.location.toLowerCase();

    if (prop1 > prop2) {
      return 1;
    }
    if (prop1 < prop2) {
      return -1;
    }
    return;
  });
};
//sort by status
const sortedPropertyStatus = function () {
  properties.sort((p1, p2) => {
    let prop1 = p1.status.toLowerCase();
    let prop2 = p2.status.toLowerCase();

    if (prop1 > prop2) {
      return 1;
    }
    if (prop1 < prop2) {
      return -1;
    }
    return;
  });
};

// Function to sort properties

function sortProperties(sortFunction) {
  sortFunction();

  properties.forEach((property) => {
    console.log(property);
  });
}

// Function to calculate the number of days a property has been listed
function daysListed(property) {
  const currentDate = new Date();
  const propertyListedDate = property.listedDate;

  const listedDays = Math.trunc(
    (currentDate - propertyListedDate) / (1000 * 60 * 60 * 24)
  );
  return listedDays;
}
