const commandHandler = require("./commandHandler");

describe("check dataIsEmpty function", () => {
  it("check retun true if the data empty", () => {
    expect(commandHandler.dataIsEmpty([])).toBe(true);
  });
  it("check retun false if the data is not empty", () => {
    expect(
      commandHandler.dataIsEmpty([{ name: ".", email: ".", phone: "." }])
    ).toBe(false);
  });
});

describe("check displaydata function", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it("should log each contact with formatted string", () => {
    const data = [
      { name: "Alice", email: "alice@example.com", phone: "1234567890" },
      { name: "Bob", email: "bob@example.com", phone: "0987654321" },
    ];

    commandHandler.displaydata(data);

    expect(console.log).toHaveBeenCalledTimes(2);
    expect(console.log).toHaveBeenCalledWith("1. Alice - alice@example.com - 1234567890 ");
    expect(console.log).toHaveBeenCalledWith("2. Bob - bob@example.com - 0987654321 ");
  });

  it("should not log anything if data is empty", () => {
    commandHandler.displaydata([]);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe("HandleHelpCommand", () => {
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  it("should log the help instructions correctly", () => {
    commandHandler.HandleHelpCommand();

    const expectedMessages = [
      "Usage: node app.js [command] [arguments]",
      "Commands:",
      '  add "name" "email" "phone"  - Add a new contact',
      "  list                        - List all contacts",
      '  search "query"              - Search contacts by name or email',
      '  delete "email"              - Delete contact by email',
      "  help                        - Show this help message\n",
    ];

    expect(console.log).toHaveBeenCalledTimes(expectedMessages.length);
    expectedMessages.forEach((msg, i) => {
      expect(console.log).toHaveBeenNthCalledWith(i + 1, msg);
    });
  });
});
