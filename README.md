# Money2Time

Simple chrome extension that injects how many hours you would need to work to pay for something into Amazon product pages.

Contains 4 indivisual files that would be required for full functionality.

manifest.json - 
The Manifest file is in Manifest v3, constains the information Chrome needs to run the extension

content.js
The content script is the script that injects the text into the Amazon product page.
- Assuming the code for retreiving the variable from storage is removed, and replaced with a hard coded hourly rate, this script works.
- probably should adjust this to by default work with Minimum Wage unless the external variable has been updated.

options.html
This is the page that the chrome extension points you to if you select options. It is a Salary calcuator, Put in your salary, and it will conver it to an average hourly rate, and save the rate for the content script to use later.

salarly.js
This is the script behind the scenes of the options.html page.  This salary calculator works when you remove all the added stuff trying to get it to save.


Current issues:
Error from Chrome: 
Refused to execute inline event handler because it violates the following Content Security Policy directive: "script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' http://localhost:* http://127.0.0.1:*". Either the 'unsafe-inline' keyword, a hash ('sha256-...'), or a nonce ('nonce-...') is required to enable inline execution. Note that hashes do not apply to event handlers, style attributes and javascript: navigations unless the 'unsafe-hashes' keyword is present.

Solution from Stack Overflow add this line to the manifest:
"content_security_policy": {
  "extension_pages": "default-src 'unsafe-eval'"
},

This did not yeild results. 
