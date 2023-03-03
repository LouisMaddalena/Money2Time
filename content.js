
console.log("Money2Time")


// Retrieve storage
chrome.storage.local.get("hourlyRate", function(data) {
  var hourlyWage = data.hourlyRate;

  document.querySelectorAll('.a-price').forEach(function(element){
    var price = parseFloat(element.innerText.replace('$',''));
    element.innerText = "$"+ price + "\n" + Math.round(price / hourlyWage * 100) /100 + ' hours of work';
  });
});
