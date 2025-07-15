const validationTest = require('./validation.js')

describe('Validation email tests:', () => {
    it('should have an @ in it', () => {
        expect(() => validationTest.checkEmail('testexample.com').toThrow('Invalid email'));
    });
    it('should have a domain in it', () => {
        expect(() => validationTest.checkEmail('test@example').toThrow('Invalid email'));
    });
    it("shouldn't have a space in it", () => {
        expect(() => validationTest.checkEmail('test @example.com').toThrow('Invalid email'));
    });
    it("shouldn't be an empty email", () => {
        expect(() => validationTest.checkEmail('').toThrow("Invalid email"));
    });


});

describe('Validation phone tests:', () => {
    it('should have 10 digits in it', () => {
        expect(() => validationTest.checkPhone('333-333-352').toThrow("Invalid Phone"));
    });
    it('should have dashes in it', () => {
        expect(() => validationTest.checkPhone('1234567890').toThrow("Invalid Phone"));
    });
    it("shouldn't have letters in it", () => {
        expect(() => validationTest.checkPhone('abc-def-ghij').toThrow("Ivalid Phone"));
    });
    it("shouldn't be an empty phone", () => {
        expect(() => validationTest.checkPhone('').toThrow("Invalid phone"))
    });
});

describe('checkEmailinData tests: ', () => {
    const data = [
        { email: 'user@example.com' },

    ];

    it('should return true if email exists', () => {
        expect(validationTest.checkEmailinData(data, 'user@example.com')).toBe(true);
    });

    it('should return true even if casing is different', () => {
        expect(validationTest.checkEmailinData(data, 'USER@example.com')).toBe(true);
    });

    it('should return false if email does not exist', () => {
        expect(validationTest.checkEmailinData(data, 'new@email.com')).toBe(false);
    });

    it('should return false if data is empty', () => {
        expect(validationTest.checkEmailinData([], 'user@example.com')).toBe(false);
    });
});

