async function calculate() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operation = document.getElementById("operation").value;

  if (num1 === "" || num2 === "") {
    document.getElementById("resultBox").innerText = "Result: Enter both numbers!";
    return;
  }

  const response = await fetch("/api/calculate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ num1, num2, operation })
  });

  const data = await response.json();

  document.getElementById("resultBox").innerText = "Result: " + data.result;
}

function clearFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operation").value = "add";
  document.getElementById("resultBox").innerText = "Result: —";
}
