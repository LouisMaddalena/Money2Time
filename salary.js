

let savedHourlyRate = null;

function calculateHourlyRate() {
  const salary = document.getElementById("salary").value;
  const preOrPostTax = document.getElementById("pre-or-post-tax").value;
  const taxRate = document.getElementById("tax-rate").value;

  let hourlyRate;
  if (preOrPostTax === "pre") {
    hourlyRate = salary / 2080; // Assumes 2080 work hours in a year
  } else {
    const postTaxSalary = salary * (1 - (taxRate / 100));
    hourlyRate = postTaxSalary / 2080;
  }

  savedHourlyRate = hourlyRate;

  chrome.storage.local.set({hourlyRate: savedHourlyRate}, function() {
    if(chrome.runtime.lastError) {
      console.error(
        "Error setting hourlyRate to " + savedHourlyRate +
        ": " + chrome.runtime.lastError.message
      );
    }
  });

  document.getElementById("hourly-rate-input").value = hourlyRate.toFixed(2);
}
