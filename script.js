"use strict";

// Define the properties array
let properties = [];

// Define a property object
let property = {
  propertyID: "",
  location: "",
  size: 0,
  price: 0,
  status: "",
  ownerContactInfo: {
    name: "",
    phoneNumber: "",
    email: "",
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
    property.propertyID == propertyID;
  });

  if (!property) {
    throw new Error("Property doesnt exist");
  }

  property = {
    ...property,
    ...newDetails,
    ownerContactInfo: {
      ...property.ownerContactInfo,
      ...newDetails.ownerContactInfo,
    },
  };
}

// Function to sort properties
function sortProperties(sortFunction) {
  // TODO: Implement this function
}

// Function to calculate the number of days a property has been listed
function daysListed(property) {
  // TODO: Implement this function
}
