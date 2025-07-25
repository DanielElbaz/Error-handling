const path = require("path");

// Base directory (e.g., /project/contact-manager/commands)
const baseDir = __dirname;

// Build absolute paths using path.join()
const servicePath = path.join(baseDir, "..", "services", "contactService.js");
const validationPath = path.join(baseDir, "..", "utils", "validation.js");

const validation = require(validationPath);
const Service = require(servicePath);

function displaydata(data) {
  data.forEach((element, index) => {
    console.log(
      `${index + 1}. ${element.name} - ${element.email} - ${element.phone} `
    );
  });
}

function dataIsEmpty(data) {
  return data.length === 0;
}

function HandleAddCommand([name, email, phone]) {
  validation.checkPhone(phone);
  validation.checkEmail(email);
  Service.addContactToData(name, email, phone);
}

function HandleDeleteCommand(email) {
  validation.checkEmail(email);
  Service.deleteContactFromData(email);
}

function HandleListCommand() {
  const data = Service.getAllContacts();
  console.log("\n=== All Contacts ===\n");
  if (dataIsEmpty(data)) {
    console.log("There is no contacts");
  }
  displaydata(data);
}

function HandleSearchCommand(name) {
  const data = Service.searchByName(name);
  console.log(`\n=== Search Results for ${name} ===`);
  if (dataIsEmpty(data)) {
    console.log(`No contacts found matching ${name} `);
  }
  displaydata(data);
}

function HandleHelpCommand() {
  console.log("Usage: node app.js [command] [arguments]");
  console.log("Commands:");
  console.log('  add "name" "email" "phone"  - Add a new contact');
  console.log("  list                        - List all contacts");
  console.log(
    '  search "query"              - Search contacts by name or email'
  );
  console.log('  delete "email"              - Delete contact by email');
  console.log("  help                        - Show this help message\n");
}

module.exports = {
  HandleAddCommand,
  HandleDeleteCommand,
  HandleListCommand,
  HandleSearchCommand,
  HandleHelpCommand,
};
//for testing only
// module.exports = { dataIsEmpty, displaydata, HandleHelpCommand };
