console.log("Money2Time");

// Retrieve storage
chrome.storage.local.get(["hourlyRate"]).then((result) => {
  console.log(`Hourly rate stored in 'local' is ${result.hourlyRate}`);

  document.querySelectorAll(".a-price").forEach(function (element) {
    var price = parseFloat(element.innerText.replace("$", ""));
    element.innerText =
      "$" +
      price +
      "\n" +
      Math.round((price / result.hourlyRate) * 100) / 100 +
      " hours of work";
  });
});
