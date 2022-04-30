const Employee = require("../Lib/Employee");

test("returns a name", () => {
  const employee1 = new Employee("Anna", 1, "email@mails.com");

  expect(employee1.getName()).toBe("Anna");
});

test("returns a id", () => {
  const employee1 = new Employee("Anna", 1, "email@mails.com");

  expect(employee1.getId()).toBe(1);
});

test("returns a email", () => {
  const employee1 = new Employee("Anna", 1, "yuhan28283@gmail.com");

  expect(employee1.getEmail()).toBe("yuhan28283@gmail.com");
});
