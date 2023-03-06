document
  .getElementById("calculateHourlyRate")
  .addEventListener("click", calculateHourlyRate);

document
  .getElementById("save-button")
  .addEventListener("click", save);

function calculateHourlyRate() {
  const salary = document.getElementById("salary").value;
  const preOrPostTax = document.getElementById("pre-or-post-tax").value;
  const taxRate = document.getElementById("tax-rate").value;

  let hourlyRate;
  if (preOrPostTax === "pre") {
    hourlyRate = salary / 2080; // Assumes 2080 work hours in a year
  } else {
    const postTaxSalary = salary * (1 - taxRate / 100);
    hourlyRate = postTaxSalary / 2080;
  }

  chrome.storage.local.set({ hourlyRate: hourlyRate }).then(() => {
    console.log("Value is set to " + hourlyRate);
  });

  document.getElementById("hourly-rate-input").value = hourlyRate.toFixed(2);
}

function save (){
  const hourlyRate = document.getElementById("hourly-rate-input").value;
  chrome.storage.local.set({ hourlyRate: hourlyRate }).then(() => {
    console.log("Value is set to " + hourlyRate);
  });
}
