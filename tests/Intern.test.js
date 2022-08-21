const Intern = require("../lib/Intern.js");
const testIntern = new Intern("Byrtie", "2688", "byrtie@email.com", "CatU");

test("Intern", () => {
    const testInternOb = new Intern();
    expect(typeof testInternOb).toBe("object");
});

test("if the properties of the object can be set", () => {
    expect(testIntern.name).toBe("Byrtie");
    expect(testIntern.id).toBe("2688");
    expect(testIntern.email).toBe("byrtie@email.com");
    expect(testIntern.school).toBe("CatU");
});

test("if the getName method will return the name", () => {
    expect(testIntern.getName()).toBe("Byrtie");
});

test("if the getId method will return the id", () => {
    expect(testIntern.getId).toBe("2688");
});

test("if the getEmail method will return the method", () => {
    expect(testIntern.getEmail()).toBe("byrtie@email.com");
});

test("if the getSchool method will return the school", () => {
    expect(testIntern.getSchool()).toBe("CatU");
});

test("if the getRole method will return the role", () => {
    expect(testIntern.getRole()).toBe("Intern");
});

