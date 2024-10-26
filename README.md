
# Real-Time Weather Monitoring System

A React-based real-time data processing system for monitoring weather conditions, providing summarized insights using rollups and aggregates from the OpenWeatherMap API.

Objective:
Develop a system that continuously retrieves weather data and provides daily summaries and alerts based on user-defined thresholds.

Features
Real-time weather data retrieval for major metros in India.
Daily weather summaries with aggregates:
Average temperature
Maximum temperature
Minimum temperature
Dominant weather condition
User-configurable alert thresholds for temperature and specific weather conditions.
Visualizations for daily summaries and historical trends.
Technologies Used
Frontend: React
Backend: React.js (if applicable)
Data Source: OpenWeatherMap API
Installation
Prerequisites
Node.js
npm or yarn
A valid OpenWeatherMap API key


## Deployment

Clone the repository:

```bash
  git clone https://github.com/soniiharsh/Weather2.git

```
Navigate to the project directory:
```bash
  cd Weather2/weather-app

```
Install dependencies:
```bash
 npm install
```
Create a .env file in the root directory and add your API key:
```bash
REACT_APP_API_KEY=your_api_key_here
```
Start npm
```bash
npm start
```
Usage
The application retrieves weather data for the following cities in India: Delhi, Mumbai, Chennai, Bangalore, Kolkata, Hyderabad.
You can configure alert thresholds within the application settings.
View real-time weather updates, daily summaries, and alerts in the dashboard.

Data Processing
The system continuously calls the OpenWeatherMap API at configurable intervals (e.g., every 5 minutes).
Temperature values are converted from Kelvin to Celsius based on user preference.
Daily summaries are stored in the database for further analysis.

Rollups and Aggregates
Daily Weather Summary
Calculate daily aggregates:
Average temperature
Maximum temperature
Minimum temperature
Determine dominant weather condition based on frequency of occurrence.

Alerting Thresholds
User-configurable thresholds for temperature or specific weather conditions.
Alerts triggered when conditions exceed defined thresholds, displayed on the console or sent via email (implementation details may vary).
Testing

Test Cases
System Setup: Verify successful connection to the OpenWeatherMap API.
Data Retrieval: Simulate API calls to ensure accurate data retrieval.
Temperature Conversion: Validate temperature conversion logic.
Daily Weather Summary: Ensure correct calculation of daily aggregates.
Alerting Thresholds: Test alert triggering based on user-defined thresholds.

More Features
Extended support for additional weather parameters (e.g., humidity, wind speed).
Retrieval of weather forecasts with generated summaries based on predicted condition
