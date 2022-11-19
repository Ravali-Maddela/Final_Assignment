//reat operator ...
const restOperator = (arg1, arg2, arg3, ...arg) => {
  console.log(
    "arg1 : ",
    arg1,
    "arg2 : ",
    arg2,
    " arg3 : ",
    arg3,
    "rest : ",
    arg
  );
};

restOperator(2, 3, 4, -1, -2, -3, -4, -5, -6);

const restOp = (...val) => {
  console.log(val);
};
restOp(1, 2, 3, 4, 5, 6); //can pass n num of values

//spread operator ...

const arr1 = [1, 2, 3];
const arr2 = [-1, -2, -3];
const out = [...arr1, ...arr2];
console.log(out);

const obj = {
  name: "Jack",
  age: 23,
};
const output = { surname: "Wilson", ...obj, age: 20 }; //can add new values and change the existed values
console.log(output);

//destructuring  lets take the exanple of rest operator

const [arg1, arg2, arg3, ...arg] = [2, 3, 4, -1, -2, -3, -4, -5, -6];

console.log("arg1 : ", arg1, "arg2 : ", arg2, " arg3 : ", arg3, "arg : ", arg);
