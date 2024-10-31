function add(number1: number, number2: number): number {
  return number1 + number2;
}

const addNumber = (number1: number, number2: number): number => {
  return number1 + number2;
};

const poorUser = {
  name: "protap",
  balance: 10,
  addBalance(balance: number): string {
    return `new balance is ${balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4, 5, 6];

const newArr = arr.map((num: number) => num * num);
