package.json:

Initialize a new Node.js project in your directory using npm init
Create a package.json file with appropriate metadata.
Ensure Axios is a dependency
 

getPage

Write a function named getPage that accept a URL as an argument.
This function should make an HTTP GET request to the URL using Axios
If the request is successful, call writeResults with the URL, response data, and 'success' type.
If the request is an error catch it and call writeResults with the URL, response data, and 'error' type.
 

writeResults

Write a function named writeResults that accepts three arguments: url (String), response (Object), and type (String).
This function should extract the status and body (data) from the response
This function should construct a string containing the URL, type, status, data length, and current timestamp.
This function should write this string to a file named results.txt
HINT: Look at fs appendFile
Submission:

Create and submit a zip file containing the following:
package.json
analyze-request.js
Do not include the node_modules directory in your zip file.
Code Skeleton
// import necessary modules


// in ECMAScript Modules (ESM), __dirname is not available directly like in CommonJS
// use 'url' and 'path' modules to achieve similar functionality
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Write your getPage function here


// Write your writeResults function here


// Examples:
getPage('https://www.google.com/');
getPage('https://twitter.com/');
getPage('https://www.amazon.com/');
getPage('https://www.disney.com/hello_world');
Sample results.txt
NOTE:  ordering may vary, and timestamps will be unique to when code is executed.
https://www.disney.com/hello_world | error | 404 | 87028 | 1710200117166
https://www.amazon.com/ | success | 200 | 6591 | 1710200117216
https://www.google.com/ | success | 200 | 19692 | 1710200117317
https://twitter.com/ | error | 400 | 2343 | 1710200117436