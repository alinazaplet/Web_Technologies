function loadLanguages() {
    fetch('1.txt')
        .then(response => response.text()) // Зчитуємо текстовий файл
        .then(data => {
            const languages = JSON.parse(data); // Парсимо JSON
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<h3>Мови програмування:</h3><ul>${languages.map(lang => `<li>${lang}</li>`).join('')}</ul>`;
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}

function loadStudents() {
    fetch('2.txt')
        .then(response => response.text()) // Зчитуємо текстовий файл
        .then(data => {
            const students = JSON.parse(data); // Парсимо JSON
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `<h3>Студенти:</h3><ul>${students.map(student => `<li>${student}</li>`).join('')}</ul>`;
        })
        .catch(error => {
            console.error('Помилка:', error);
        });
}

