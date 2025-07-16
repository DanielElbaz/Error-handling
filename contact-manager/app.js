const handler = require("./commands/commandHandler.js");

function getCommand(info) {
  return info[0];
}
function getAddInput(info) {
  if(info[1]==''){
    throw "No input found"
  }
  return [info[1], info[2], info[3]];
}
function getOneInput(info) {
  return info[1];
}

function executeCommand() {
  try {
    switch (command) {
      case "add":
        handler.HandleAddCommand(getAddInput(info));
        break;
      case "delete":
        handler.HandleDeleteCommand(getOneInput(info));
        break;
      case "list":
        handler.HandleListCommand();
        break;
      case "search":
        handler.HandleSearchCommand(getOneInput(info));
        break;
      case "help":
        handler.HandleHelpCommand();
        break;
      default:
        console.log("Sorry your command does not exist");
    }
  } catch (err) {
    console.log(err);
  }
}

const [...info] = process.argv.slice(2);

const command = getCommand(info);

executeCommand(command);
