// Створіть змінну, яка може містити або рядок, або число (union type)?
// Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень:
// 'enable' або 'disable'(literal type).

let var1: string | number;

console.log(var1 = 'union type');
console.log(var1 = 12);