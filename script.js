"use strict";

// Define the properties array
let properties = [];

// Define a property object
let property = {
  propertyID: "k001",
  location: "",
  size: 0,
  price: 0,
  status: "",
  ownerContactInfo: {
    name: "lamour",
    phoneNumber: "3434343",
    email: "22",
  },
  listedDate: new Date(),
};
let property2 = {
  propertyID: "",
  location: "",
  size: 0,
  price: 0,
  status: "",
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

// Function to sort properties
function sortProperties(sortFunction) {
  // TODO: Implement this function
}

// Function to calculate the number of days a property has been listed
function daysListed(property) {
  // TODO: Implement this function
}
