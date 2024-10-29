function addOrder(event) {
  event.preventDefault(); // Запобігаємо стандартному відправленню форми

  // Отримуємо значення полів форми
  const name = document.getElementById('name').value;
  const topping = document.querySelector('input[name="topping"]:checked').value;
  const sauce = document.getElementById('sauce').value;
  const extras = [];
  if (document.getElementById('cheese').checked) extras.push("Extra Cheese");
  if (document.getElementById('gluten_free').checked) extras.push("Gluten Free Base");
  const instructions = document.getElementById('instructions').value;

  // Знаходимо таблицю та додаємо новий рядок
  const table = document.getElementById('ordersTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();

  // Додаємо клітинки з даними у рядок
  newRow.insertCell(0).innerText = name;
  newRow.insertCell(1).innerText = topping;
  newRow.insertCell(2).innerText = sauce;
  newRow.insertCell(3).innerText = extras.join(", ");
  newRow.insertCell(4).innerText = instructions;

  // Очищення форми після додавання замовлення
  document.querySelector('.pizza-form').reset();
}

