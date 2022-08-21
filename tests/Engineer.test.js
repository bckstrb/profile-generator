const Engineer = require("../lib/Engineer.js");
const newEngineer = new Engineer("Byrtie", "2688", "byrtie@email.com", "github.com/byrtie");

test("Engineer", () => {
    const testEngineerOb = new Engineer();
    expect(typeof testEngineerOb).toBe("object");
});

test("to determine if the properties of the object can be set", () => {
    expect(testEngineer.name).toBe("Byrtie");
    expect(testEngineer.id).toBe("2688");
    expect(testEngineer.email).toBe("byrtie@email.com");
    expect(testEngineer.github).toBe("github.com/byrtie");
});

test("if the getName method will return the name", () => {
    expect(testEngineer.getName()).toBe("Byrtie");
});

test("if the getId method will return the id", () => {
    expect(testEngineer.getId()).toBe("2688");
});

test("if the getEmail method will return the email", () => {
    expect(testEngineer.getEmail()).toBe("byrtie@email.com");
});

test("if the getGithub method will return the github", () => {
    expect(testEngineer.getGithub()).toBe("github.com/byrtie");
});

test("if the getRole method will return the role", () => {
    expect(testEngineer.getRole()).toBe("Engineer");
});

