# Money2Time

Simple chrome extension that injects how many hours you would need to work to pay for something into Amazon product pages.

Contains 4 indivisual files that would be required for full functionality.

manifest.json - 
The Manifest file is in Manifest v3, constains the information Chrome needs to run the extension

content.js
The content script is the script that injects the text into the Amazon product page.
- Latest version adds some amount of error handling for missing salary/hourly rate information.

options.html
This is the page that the chrome extension points you to if you select options. It is a Salary/Hourly rate calcuator, Put in your salary, and it will convert it to an average hourly rate, and save the rate for the content script to use later.

salarly.js
This is the script behind the scenes of the options.html page. The salary calculator is basic for now, but possible to add in more specific tools to give the user a more accurate hourly rate calculation if they decide they want the calculation after taxes (or even after fixed expenses)



