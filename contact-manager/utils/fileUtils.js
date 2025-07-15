const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "data");

function loadFromJSON() {
  if (!fs.existsSync(filePath)) return [];
  console.log("load from JSON file");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function readFromJSON(email) {
  const data = loadFromJSON();
  console.log("Read from JSON file");
  return data.find((item) => item.email === email);
}

function deleteFromJSON(id) {
  const data = loadFromJSON();
  const updatedData = data.filter((item) => item.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
}

function saveToJSON(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

[{name:"",email:"jkhjkh",phone:"05564654"}]