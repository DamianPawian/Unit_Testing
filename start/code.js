
const startFunction = (val) => {

  if (val === "Tomek") {
    return "Hello Tomek";
  } else if (val === randomName ){
    return "Hello " + randomName;
  }
  else {
    return "Hello World";
  }
};


const randomName = Math.random().toString(36).substring(7);




module.exports = startFunction;


console.log(randomName);
