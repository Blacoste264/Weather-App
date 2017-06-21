Weather App

In this assignment, I built an Angular application that allows a user to search for weather data using the OpenWeatherMap in a similar fashion to the following screenshot.

Tasks Completed...

Setup my Git workflow. Requested an API license key to use the open weather map API and confirmed my ability to make calls to the API using a REST client such as Postman. Setup this project to use live reload and inject file references into my index.html.

Made use of the following AngularJS features to build this application...

Created a factory and injected a $http service to be used for calling the OpenWeatherMap API. Created a controller and injected the factory you created above. Figured out the code I needed to write to facilitate the given requirements. Added an error handler function to both factory and controller. Implemented toastr messaging to report success and error messaging to the end user.

Features...

Able to search for a city by name and see weather for that location. Implemented a Bootstrap btn-group containing a button for each previously searched city. When clicked, each button loads the weather information for that location. Has a search history table that tracks the term entered, the time that the term was entered, and the current temperature in degrees Fahrenheit at that time. Capable of handling errors gracefully (Use the angular-toaster package to show an error to the user if the call to the API fails. (Installed in this project using Bower.) All temperatures are displayed using the Fahrenheit temperature scale.

"Extra Credit"...

Implemented client-side form validation to make the city name input a required field and display a helpful error message such as, "You must enter a city name", if the user clicks the Go! button without entering anything into this field. Implemented a toggle button to convert degrees Fahrenheit to Centigrade for the whole app.
