{
  // type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNum?: number;
    address: string;
  };

  const student1: Student = {
    name: "vini",
    age: 23,
    gender: "male",
    contactNum: 12938483939,
    address: "brazil",
  };

  const student2: Student = {
    name: "rodrygo",
    age: 22,
    gender: "male",
    address: "brazil",
  };

  type userName = string;
  type isAdmin = boolean;
  const name: userName = "Persian";
  const admin: isAdmin = true;

  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
