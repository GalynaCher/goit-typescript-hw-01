// Створіть новий тип даних, який підходить для цих двох об'єктів.

interface Details {
    createAt: Date,
    updateAt: Date,
}

interface Pages {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: Details,
}

// obj1
const page1: Pages = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

// obj2
const page2: Pages = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}

console.log(page1);
console.log(page2);



