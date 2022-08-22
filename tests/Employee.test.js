const Employee = require("../lib/Employee.js");
const testEmployee = new Employee("Byrtie", "2688", "byrtie@email.com");

test("Employee", () => {
  const testEmployeeOb = new Employee();
  expect(typeof testEmployeeOb).toBe("object");
});

test("will determine if the properties of the object can be set", () => {
  expect(testEmployee.name).toBe("Byrtie");
  expect(testEmployee.id).toBe("2688");
  expect(testEmployee.email).toBe("byrtie@email.com");
});

test("will the getName method return the name", () => {
  expect(testEmployee.getName()).toBe("Byrtie");
});

test("will the getId method return the id", () => {
    expect(testEmployee.getId()).toBe("2688");
});

test("will the getEmail method return the email", () => {
    expect(testEmployee.getEmail()).toBe("byrtie@email.com")
});