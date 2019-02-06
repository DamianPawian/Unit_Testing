
const startFunction = (val) => {

  if (val === "Tomek") {
    return "Hello Tomek";
  } else if (val !== "Tomek" ){
    return "Hello " + randomName;
  } else if (val !== "Tomek" && val !== randomName ){
    return "Hello World";
  }
};


const randomName = Math.random().toString(36).substring(7);




module.exports = startFunction;


