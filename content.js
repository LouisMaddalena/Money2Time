// Retrieve storage
chrome.storage.local.get(["hourlyRate"], function(result) {
  var optionsUrl = chrome.runtime.getURL("options.html");

  if (isNaN(result.hourlyRate)) {
    var popup = document.createElement('div');
    popup.id = "Money2TimePopup";
    popup.style.position = "fixed";
    popup.style.top = "10px";
    popup.style.right = "10px";
    popup.style.background = "white";
    popup.style.border = "1px solid black";
    popup.style.padding = "10px";
    popup.style.zIndex = "999999";
    popup.innerHTML = "Money2Time has not been set up, please enter your hourly rate on the <a href='" + optionsUrl + "' target='_blank'>options page</a>";
    document.body.appendChild(popup);
  } else {
    console.log(`Hourly rate stored in 'local' is ${result.hourlyRate}`);

    document.querySelectorAll(".a-price").forEach(function (element) {
      var price = parseFloat(element.innerText.replace("$", ""));
      var hours = Math.round((price / result.hourlyRate) * 100) / 100;
      if (isNaN(hours)) {
        element.innerText = "$" + price;
      } else {
        element.innerText = "$" + price + "\n" + hours + " hours of work";
      }
    });
  }
});
