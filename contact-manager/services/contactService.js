let mypath = __dirname;

const Utilspath = mypath.replace("\\services", "\\utils\\fileUtils.js");

const fileUtils = require(Utilspath);

function addContactToData(sname, emails, phones) {
  //check if there is duplicate inputs

  const data = fileUtils.loadFromJSON();
  data.push({ name: sname, email: emails, phone: phones });
  fileUtils.saveToJSON(data);
}

function deleteContactFromData(email) {
  fileUtils.deleteFromJSON(email);
}

function searchByName(name) {
  return fileUtils.findFromJSONByName(name);
}

module.exports = { addContactToData, deleteContactFromData, searchByName };
