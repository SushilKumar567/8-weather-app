# Weather App (React.js)

Welcome to the repository of my **Weather App** built using React.js. This app allows users to search for any city worldwide and get real-time weather data including temperature, humidity, wind speed, and current weather conditions—all displayed with intuitive icons.

**Live Demo:**  
Click [here](https://sushilkumar567.github.io/8-weather-app/) to see the live version of the app.

## Key Highlights:

**React-Based Architecture:**  
Built using functional components and hooks to ensure maintainable and modular code.

**Real-Time Weather Data (via OpenWeatherMap API):**

- **Search by City:** Get the current weather by typing a city name.
- **Temperature:** Displays temperature in Celsius.
- **Humidity & Wind Speed:** Extra weather details for better clarity.
- **Weather Icons:** Shows matching image/icon based on current conditions (Clear, Rain, Clouds, etc.).

**Smart Validation:**  
Prevents blank input submissions using `trim()` and alerts the user to enter a valid city name.

**Responsive UI:**  
Clean and mobile-friendly layout using custom CSS.

**Hooks in Action:**

- `useState` for managing weather data and input state.
- `useEffect` to fetch weather data for a default city on initial load.

## Technologies Used:

**React.js:** Core library for building the user interface.  
**JSX:** Allows mixing HTML with JavaScript for clean UI structure.  
**CSS3:** Custom styling for layout and weather cards.  
**OpenWeatherMap API:** Fetches real-time weather data.  
**Font Awesome:** For search button icon.
