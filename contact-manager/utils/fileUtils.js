const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "..", "data");

function loadFromJSON() {
  if (!fs.existsSync(filePath)) return [];
  console.log("load from JSON file");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function findFromJSONByName(name) {
  const data = loadFromJSON();
  console.log("Read from JSON file");
  return data.filter((contact) => contact.name === name);
}
function deleteFromJSON(email) {
  const data = loadFromJSON();
  const updatedData = data.filter((item) => item.email !== email);
  saveToJSON(updatedData);
}

function saveToJSON(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

module.exports = {
  loadFromJSON,
  deleteFromJSON,
  saveToJSON,
  findFromJSONByName,
};
