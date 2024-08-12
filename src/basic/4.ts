function showMessage(message: string) {
  console.log(message);
}

function calc(num1: number, num2: number) {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

console.log(showMessage("showMessage"));
console.log(calc(2, 3));
customError();