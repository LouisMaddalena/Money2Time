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
      var hours = Math.floor(price / result.hourlyRate); // get the number of whole hours
      var minutes = Math.round((price / result.hourlyRate - hours) * 60); // get the number of minutes

      if (isNaN(hours)) {
        element.innerText = "$" + price;
      } else {
        if (hours > 0 && minutes > 0 ){
          element.innerText = "$" + price + "\n" + hours + " hours" + " and " + minutes + " minutes of work";
        }
        if (hours > 1 && minutes == 0){
          element.innerText = "$" + price + "\n" + hours + " hours of work";
        }
        if (hours == 1 && minutes == 0){
          element.innerText = "$" + price + "\n" + hours + " hour of work";
        }
        if (hours == 0 && minutes > 0){
          element.innerText = "$" + price + "\n" + minutes + " minutes of work"
        }

      }
    });
  }
});
