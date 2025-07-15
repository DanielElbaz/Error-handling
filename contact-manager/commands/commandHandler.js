const path = require("path");

// Base directory (e.g., /project/contact-manager/commands)
const baseDir = __dirname;

// Build absolute paths using path.join()
const servicePath = path.join(baseDir, "..", "services", "contactService.js");
console.log(servicePath);
const validationPath = path.join(baseDir, "..", "utils", "validation.js");
console.log(validationPath);

const validation = require(validationPath);
const Service = require(servicePath);

function HandleAddCommand([name, email, phone]) {
  validation.checkPhone(phone);
  validation.checkEmail(email);
  Service.addContactToData(name, email, phone);
}

function HandleDeleteCommand(email) {
  validation.checkEmail(email);
  Service.deleteContactFromData(email);
}

function HandleListCommand() {}

function HandleSearchCommand(name) {
  const data = Service.searchByName(name);
  console.log(`\n=== Search Results for ===${name}\n`);
  if (data) {
    data.forEach((element, index) => {
      console.log(
        `${index + 1}. ${element.name} - ${element.email} - ${element.phone} `
      );
    });
  }
}

function HandleHelpCommand() {
  console.log("Usage: node contacts.js [command] [arguments]");
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
