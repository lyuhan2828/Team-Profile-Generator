const Engineer = require("../Lib/Engineer");

test("returns a name", () => {
  const employee1 = new Engineer("Anna", 1, "email@mails.com", "github");

  expect(employee1.getName()).toBe("Anna");
});

test("returns a id", () => {
  const employee1 = new Engineer("Anna", 1, "email@mails.com", "github");

  expect(employee1.getId()).toBe(1);
});

test("returns a email", () => {
  const employee1 = new Engineer("Anna", 1, "yuhan28283@gmail.com", "github");

  expect(employee1.getEmail()).toBe("yuhan28283@gmail.com");
});

test("returns a github", () => {
  const employee1 = new Engineer("Anna", 1, "yuhan28283@gmail.com", "lyuhan2828");

  expect(employee1.getGithub()).toBe("lyuhan2828");
});
