# The-Async-Force-Ep-1
An **async** Exercise using **client side** XHR accessing the swapi.
In this excercise, we will explore async programming on the clientside
by using XHR to request information from a the swapi server at
https://swapi.co

Remember that this is a **client side** excercise which means that all the code will be executed via the browser's javascript runtime, which means that our global context is the 'window' object.  Go ahead and type in 'window' in the browser console to inspect the methods on the 'window' object.  In there you will find a method named 'XMLHttpRequest' which you will be using for this excercise.

1. Initialize the project as an npm repository with the 'npm init' command.
2. Create an app.js file.
3. Create an index.html file.
4. In the index.html file, load app.js via script tags.
5. Use live-reload to serve up the files to your browser.
6. Create your XHR requests in the app.js file to make a 'GET' request
   to the following URL: http://swapi.co/api/people/1
7. Log the results of the API request to the console in your browser.

## Hints
Here's more information on the 'XMLHttpRequest' method:
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest