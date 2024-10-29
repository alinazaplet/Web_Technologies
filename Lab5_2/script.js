function getWeather() {
  const cityName = 'London'; 
  const apiKey = '829c150e1c7290ed2d664f2cf7ce40fb'; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
      .then(response => {
          if (!response.ok) {
              throw new Error('Помилка завантаження даних');
          }
          return response.json();
      })
      .then(data => {
          const temperature = data.main.temp;
          const humidity = data.main.humidity;
          const windSpeed = data.wind.speed;

          const resultDiv = document.getElementById('weatherResult');
          resultDiv.innerHTML = `
              <h3>Погода в ${cityName}</h3>
              <p>Температура: ${temperature}°C</p>
              <p>Вологість: ${humidity}%</p>
              <p>Швидкість вітру: ${windSpeed} м/с</p>
          `;
      })
      .catch(error => {
          console.error('Помилка:', error);
      });
}
