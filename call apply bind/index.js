const person = {
  fullName: function (city, country) {
    return this.firstname + " " + this.lastname + " ," + city + "," + country;
  },
};

const person1 = {
  firstname: "lavanya",
  lastname: "pulugu",
};

const person2 = {
  firstname: "rahul",
  lastname: "talluri",
};

const arr = ["chirala", "ap"];

//call method
console.log(person.fullName.call(person1, "ongole", "india"));
//apply method
console.log(person.fullName.apply(person2, arr));

//bind method

const personlavanya = person.fullName.bind(person1, "darsi", "india");

console.log(personlavanya());
