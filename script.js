let buttonContatiner = document.querySelector(".button-container")
let total = document.querySelector(".total")
let currentTotal = 0

// buttonContatiner.addEventListener("click", (event) => {
//   if (event.target.classList.contains("cola")) {
//     currentTotal += 2.00;
//     total.innerText = `Total: $${currentTotal}.00`;
//   } else if (event.target.classList.contains("peanuts")) {
//     currentTotal += 3.00;
//     total.innerText = `Total: $${currentTotal}.00`;
//   } else if (event.target.classList.contains("chocolate")) {
//     currentTotal += 4.00;
//     total.innerText = `Total: $${currentTotal}.00`;
//   } else {
//     currentTotal += 6.00;
//     total.innerText = `Total: $${currentTotal}.00`;
//   }
// });

// Refactoring Above
buttonContatiner.addEventListener("click", (event) => {
  console.log(event)
  if (event.target.classList.contains("button")) {
    let amount = Number(event.target.getAttribute("data-amount"));
    console.log(amount);
    currentTotal += amount;
    total.innerText = `Total: $${currentTotal.toFixed(2)}`;
  }
});

// Form Stuff
let coinForm = document.querySelector(".form");
let coinContainer = document.querySelector(".coin-container")
coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(coinForm);
  let amount = data.get("amount")
  let coin = data.get("coin")
  console.log(amount, coin)
  for (let i = 0; i < amount; i++) {
    let coinDiv = document.createElement("div");
    coinDiv.classList.add("coin-div")
    coinDiv.innerText = coin;
    coinContainer.append(coinDiv);
  }
  coinForm.reset();
})

coinContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("coin-div")) {
    event.target.remove();
  }
})

let bulbContainer = document.querySelector(".light-bulb")
let lightbulb = document.querySelector(".light")

bulbContainer.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.classList.contains("on")) {
    lightbulb.classList.add("turn-on")
    // lightbulb.style.backgroundColor = "red";
  } else if (event.target.classList.contains("off")) {
    lightbulb.classList.remove("turn-on")
    // lightbulb.style.backgroundColor = "grey"
  } else if (event.target.classList.contains("toggle")) {
    lightbulb.classList.toggle("turn-on")
    // if (lightbulb.style.backgroundColor === "grey") {
    //   lightbulb.style.backgroundColor = "red";
    // } else {
    //   lightbulb.style.backgroundColor = "grey"
    // }
  } else if (event.target.classList.contains("end")) {
    lightbulb.remove();
    let bulbButtons = document.querySelectorAll(".bulb");
    bulbButtons.forEach((button) => {
      button.disabled = true;
    })
    // document.querySelector(".on").disabled = true;
    // document.querySelector(".off").disabled = true;
    // document.querySelector(".toggle").disabled = true;
    // document.querySelector(".end").disabled = true;
  }
})