// console.log("class 6 of JS");

const str1 = "hello ali haider";

// console.log(str1);

const studentInfo = {
  firstName: "ali",
  lastName: "haider",
  age: 25,
  greet: function () {
    console.log("hello", this);
  },
  //   greet: () => {
  //     console.log("hello", this);
  //   },
  //   greet() {
  //     console.log("hello", this);
  //   },
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// function greet() {
//   console.log("hello");
// }

// class Animal {
//   greet() {
//     console.log("hello");
//   }
//   greet = () => {
//     console.log("hello");
//   };
// }

const entriesObject = Object.entries(studentInfo);
console.log(entriesObject);
console.log(Object.fromEntries(entriesObject));
// console.log(Object.keys(studentInfo).length);
// const objectValues = Object.values(studentInfo);
// // console.log(Object.values(studentInfo), Object.values(studentInfo).length);
// console.log(objectValues, objectValues.length);
// console.log(studentInfo);
// console.log(studentInfo.hasOwnProperty("name"));
// console.log(studentInfo.hasOwnProperty("firstname"));
// console.log(studentInfo.hasOwnProperty("firstName"));
