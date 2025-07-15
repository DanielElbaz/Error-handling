const handler = require("./commands/commandHandler.js");

function getCommand(info) {
  return info[0];
}
function getAddInput(info) {
  return [info[1], info[2], info[3]];
}

function executeCommand() {
  try {
    switch (command) {
      case "add":
        // code block to execute if expression matches value1
        handler.HandleAddCommand(getAddInput(info));
        break;
      case "delete":
         handler.HandleDeleteCommand()
        // code block to execute if expression matches value2
        break;
      case "list":
        handler.HandleListCommand()
        break;
      case "search":
        handler.HandleSearchCommand()
        break;
      case "help":
        handler.HandleHelpCommand()
        break;
      // ... more cases
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
