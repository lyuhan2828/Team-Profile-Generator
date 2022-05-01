const Intern = require("../Lib/Intern");

test("returns a name", () => {
  const employee1 = new Intern("Anna", 1, "email@mails.com", "school");

  expect(employee1.getName()).toBe("Anna");
});

test("returns a id", () => {
  const employee1 = new Intern("Anna", 1, "email@mails.com", "school");

  expect(employee1.getId()).toBe(1);
});

test("returns a email", () => {
  const employee1 = new Intern("Anna", 1, "yuhan28283@gmail.com", "school");

  expect(employee1.getEmail()).toBe("yuhan28283@gmail.com");
});

test("returns a school", () => {
  const employee1 = new Intern("Anna", 1, "yuhan28283@gmail.com", "UofT");

  expect(employee1.getSchool()).toBe("UofT");
});