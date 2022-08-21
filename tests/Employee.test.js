const Employee = require("../lib/Employee.js");
const newEmployee = new Employee("Byrtie", "2688", "byrtie@email.com");

test("Employee", () => {
  const testEmployeeOb = new Employee();
  expect(typeof testEmployeeOb).toBe("object");
});

test("will determine if the properties of the object can be set", () => {
  expect(testEmployee.name).toBe("Byrtie");
  expect(testEmployee.id).toBe("2688");
  expect(testEmployee.email).toBe("byrtie@gmail.com");
});

// test("will the getName method return the name", () => {
//   const testEmployee = new Employee("Doe");
//   expect(testEmployee.getName()).toBe("Doe");
// });

// test("will determine if the id property can be set", () => {
//     const testEmpId = new Employee("1234");
//     expect(testEmpId.id).toBe("1234");
// });

// test("will the getId method return the id", () => {
//     const testEmpId = new Employee("5678");
//     expect(testEmpId.getId()).toBe("5678");
// });

// test("will determine if the email property can be set", () => {
//     const testEmpEmail = new Employee("email@email.com");
//     expect(testEmpEmail.email).toBe("email@email.com");
// });

test("will the getEmail method return the email", () => {
    const testEmpEmail = new Employee("email@email.edu");
    expect(testEmpEmail.getEmail()).toBe("email@email.edu")
});