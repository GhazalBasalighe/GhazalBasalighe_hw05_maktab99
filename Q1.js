let user = {
  name: "John",
  age: 30,
  sayHello: function () {
    console.log(`hello ${this.name}`);
  },
};
user.sayHello();
