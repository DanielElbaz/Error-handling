let mypath = __dirname;

const Servicepath = mypath.replace("\\commands", "\\services\\contactService.js");

const Service = require(Servicepath);

function HandleAddCommand([name, email, phone]) {
  // add validation for email and phone
  //check if the contact already in the data
  // add the
  Service.addContactToData(name, email, phone);
}

function HandleDeleteCommand() {}

function HandleListCommand() {}

function HandleSearchCommand() {}

function HandleHelpCommand() {
console.log("Usage: node contacts.js [command] [arguments]");
console.log("Commands:");
console.log("  add \"name\" \"email\" \"phone\"  - Add a new contact");
console.log("  list                        - List all contacts");
console.log("  search \"query\"              - Search contacts by name or email");
console.log("  delete \"email\"              - Delete contact by email");
console.log("  help                        - Show this help message\n");
}

module.exports = {
  HandleAddCommand,
  HandleDeleteCommand,
  HandleListCommand,
  HandleSearchCommand,
  HandleHelpCommand,
};
