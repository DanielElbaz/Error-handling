// services/contactService.test.js

const fileUtils = require("../utils/fileUtils");
const validation = require("../utils/validation");
const contactService = require("./contactService"); // assuming your function is exported

jest.mock("../utils/fileUtils");
jest.mock("../utils/validation");

describe("addContactToData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should add a contact and save updated data", () => {
    const mockData = [
      { name: "Alice", email: "alice@example.com", phone: "123-456-7895" },
    ];
    const clonedData = [...mockData]; // so we keep original unmutated copy

    const newName = "Bob";
    const newEmail = "bob@example.com";
    const newPhone = "123-456-7895";

    fileUtils.loadFromJSON.mockReturnValue(mockData);
    validation.checkDuplicateInput.mockImplementation(() => {});

    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    contactService.addContactToData(newName, newEmail, newPhone);

    expect(fileUtils.loadFromJSON).toHaveBeenCalled();
    expect(validation.checkDuplicateInput).toHaveBeenCalledWith(
      mockData,
      newEmail
    );

    expect(fileUtils.saveToJSON).toHaveBeenCalledWith([
      ...clonedData, // using unmutated copy
      { name: newName, email: newEmail, phone: newPhone },
    ]);

    expect(consoleSpy).toHaveBeenCalledWith(
      `The contact ${newName} add sucssfully to data !`
    );

    consoleSpy.mockRestore();
  });

  it("should throw error if duplicate email is found", () => {
    const mockData = [
      { name: "Alice", email: "alice@example.com", phone: "123-456-7895" },
    ];
    const duplicateEmail = "alice@example.com";

    fileUtils.loadFromJSON.mockReturnValue(mockData);
    validation.checkDuplicateInput.mockImplementation(() => {
      throw new Error("Sorry this email already exist !");
    });

    expect(() => {
      contactService.addContactToData("Alice2", duplicateEmail, "123-456-7895");
    }).toThrow("Sorry this email already exist !");

    expect(fileUtils.saveToJSON).not.toHaveBeenCalled();
  });
});
