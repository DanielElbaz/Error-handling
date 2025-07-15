const path = require("path");

// Base directory (e.g., /project/contact-manager/services or /commands)
const baseDir = __dirname;

// Build absolute paths to modules
const utilsPath = path.resolve(baseDir, "../utils/fileUtils.js");
const validationPath = path.resolve(baseDir, "../utils/validation.js");

// Require the modules
const fileUtils = require(utilsPath);
const validation = require(validationPath);

function addContactToData(sname, emails, phones) {
  const data = fileUtils.loadFromJSON();
  validation.checkDuplicateInput(data, emails);
  data.push({ name: sname, email: emails, phone: phones });
  fileUtils.saveToJSON(data);
  console.log(`The contact ${sname} add sucssfully to data !`);
}

function deleteContactFromData(email) {
  validation.checkEmail(email);
  fileUtils.deleteFromJSON(email);
}

function searchByName(name) {
  return fileUtils.findFromJSONByName(name);
}

function getAllContacts() {
  return fileUtils.loadFromJSON();
}

module.exports = {
  addContactToData,
  deleteContactFromData,
  searchByName,
  getAllContacts,
};
