// Reference  Type --Object;

const user: {
  readonly born: "Bangladesh"; // Literal Types When Value is fixed and readonly cannot be changed it can only read
  firstName: string;
  middleName?: string; // ? Means optional type just like optional chaining
  lastName: string;
  age: number;
  isEmployed: boolean;
} = {
  born: "Bangladesh",
  firstName: "Protap",
  lastName: "Biswas",
  age: 23,
  isEmployed: false,
};
