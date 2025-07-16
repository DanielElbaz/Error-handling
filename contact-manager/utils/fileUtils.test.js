const fileUtils = require('./fileUtils.js')
const fs=require('fs');

jest.mock('fs');

describe('loadFromJSON', () => {
  const filePath = './data.json'; // match what's in the source file

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an empty array if file does not exist', () => {
    fs.existsSync.mockReturnValue(false);

    const result = fileUtils.loadFromJSON();

    expect(result).toEqual([]);
    expect(fs.existsSync).toHaveBeenCalled();
    expect(fs.readFileSync).not.toHaveBeenCalled();
  });

  it('should return parsed JSON if file exists', () => {
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue('[1, 2, 3]');

    const result = fileUtils.loadFromJSON();

    expect(result).toEqual([1, 2, 3]);
    expect(fs.readFileSync).toHaveBeenCalled();
  });

  it('should throw an error if JSON is invalid', () => {
    fs.existsSync.mockReturnValue(true);
    fs.readFileSync.mockReturnValue('invalid json');

    expect(() => fileUtils.loadFromJSON()).toThrow(SyntaxError);
  });
});