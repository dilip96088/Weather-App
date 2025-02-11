// http://api.weatherapi.com/v1/current.json?key=36ef106edfde4918add200501250802&q=mumbai&aqi=no


document.addEventListener("DOMContentLoaded", function () {
        const apiKey = "36ef106edfde4918add200501250802";
        const searchInput = document.querySelector(".search_area");
        const searchForm = document.querySelector("form");
    
        const tempElement = document.querySelector(".temp p");
        const locationElement = document.querySelector(".time_locations p:first-child");
        const timeElement = document.querySelector(".time_locations p:last-child");
        const conditionElement = document.querySelector(".conditions p:last-child");
    
        async function fetchWeather(city) {
            try {
                const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
                if (!response.ok) throw new Error("City not found");
                
                const data = await response.json();
                updateWeatherUI(data);
            } catch (error) {
                alert(error.message);
            }
        }
    
        function updateWeatherUI(data) {
            tempElement.textContent = `${data.current.temp_c}°C`;
            locationElement.textContent = data.location.name;
            timeElement.textContent = new Date().toLocaleString();
            conditionElement.textContent = data.current.condition.text;
        }
    
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const city = searchInput.value.trim();
            if (city) {
                fetchWeather(city);
            }
        });
    
        // Default weather for Mumbai on page load
        fetchWeather("Mumbai");
    });
    


