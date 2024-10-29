// Завдання 1
function filterArray(arr) {
    return arr.filter(function(num) {
      return num % 2 === 0;
    });
  }
  // Приклад:
console.log(filterArray([1, 2, 3, 4, 5, 6])); // Виведе: [2, 4, 6]

//Завдання 2
function isLeap(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year % 400 === 0;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  
  // Приклади використання:
  console.log(isLeap(2020)); // Виведе: true (2020 високосний рік)
  console.log(isLeap(1900)); // Виведе: false (1900 не високосний)
  console.log(isLeap(2000)); // Виведе: true (2000 високосний рік)
  console.log(isLeap(2023)); // Виведе: false (2023 не високосний)


  //Завдання 3
  function groupByAge(people) {
    return people.reduce((acc, person) => {
      // Якщо ще немає ключа для цього віку, створюємо порожній масив
      if (!acc[person.age]) {
        acc[person.age] = [];
      }
      // Додаємо ім'я людини до масиву для відповідного віку
      acc[person.age].push(person.name);
      return acc;
    }, {}); // Початкове значення для акумулятора — порожній об'єкт
  }
  
  // Приклад:
  const people = [
    { name: "Oleg", age: 25 },
    { name: "Alla", age: 30 },
    { name: "Peter", age: 25 },
    { name: "Ivan", age: 30 }
  ];
  
  console.log(groupByAge(people));
  // Виведе: { '25': ['Oleg', 'Peter'], '30': ['Alla', 'Ivan'] }
