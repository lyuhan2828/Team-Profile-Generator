const Manager = require("../Lib/Manager");

test("returns a name", () => {
  const employee1 = new Manager("Anna", 1, "email@mails.com", "officeNumber");

  expect(employee1.getName()).toBe("Anna");
});

test("returns a id", () => {
  const employee1 = new Manager("Anna", 1, "email@mails.com", "officeNumber");

  expect(employee1.getId()).toBe(1);
});

test("returns a email", () => {
  const employee1 = new Manager("Anna", 1, "yuhan28283@gmail.com", "officeNumber");

  expect(employee1.getEmail()).toBe("yuhan28283@gmail.com");
});

test("returns a officenumber", () => {
  const employee1 = new Manager("Anna", 1, "yuhan28283@gmail.com", "4161231234");

  expect(employee1.getofficeNumber()).toBe("4161231234");
});