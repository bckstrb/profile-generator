const Manager = require("../lib/Manager.js");
const newManager = new Manager("Byrtie", "2688", "byrtie@email.com", "517");

test("Manager", () => {
    const testManagerOb = new Manager();
    expert(typeof testManagerOb).toBe("object"):
});

test("will determine if the properties of the object can be set", () => {
    expect(testManager.name).toBe("Byrtie");
    expect(testManager.id).toBe("2688");
    expect(testManager.email).toBe("byrtie@email.com");
    expect(testManager.officeNumber).toBe("517");
});

test("if the getName method will return the name", () => {
    expect(testManager.getEmail()).toBe("Byrtie");
});

test("if the getId method will return the id", () => {
    expect(testManager.getId()).toBe("2688");
});

test("if the getEmail method will return the email", () => {
    expect(testManager.getEmail()).toBe("byrtie@email.com");
});

test("if the getofficeNumber method will return the office number", () => {
    expect(testManager.getofficeNumber).toBe("517");
});

test("if the getRole method will return the role", () => {
    expect(testManager.getRole()).toBe("Manager");
});