let sum = 0;
let setCount = 1;
const array = [];
const container = document.getElementById("container");
const countScore = document.getElementById("count-seat");

// Banner Button To Buy Ticket Section

function setNewSection() {
  const changeView = document.getElementById("BuyTicket");
  changeView.scrollIntoView({ behavior: "smooth" });
}

const allButton = document.getElementsByClassName("btn");

function click() {
  countScore.innerText = array.length;
}
// Seats less Counting

// let count = 8;
// for (const btn of allButton) {
//   btn.addEventListener("click", function (e) {
//     count = count - 1;
//     setInnerText("totalSeats", count);
//   });
// }

// customer ticket buying counting number

let seatCount = 0;
for (const addBuySeats of allButton) {
  addBuySeats.addEventListener("click", function (e) {
    seatCount = seatCount + 1;
    setInnerText("bookedSeats", seatCount);
  });
}

// SeatNumber A1 - B4
const economoyName = "Economoy";
const seats = document.querySelectorAll(".btn");
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const currentSeat = e.target.textContent;
    // const currentSeat = e.target.TextContent;
    // console.log(currentSeat);
    seat.classList.add("bg-green-500");
    if (array.includes(currentSeat)) {
      alert("already selected");
      return;
    } else {
      array.push(currentSeat);
    }
    if (array.length > 4) {
      e.target.setAttribute("disabled", true);
      alert("enough");
      // e.target.style.backgroundColor = "#F7F7F";
      return;
    }
    const main = document.getElementById("seatOnThis");
    const li = document.createElement("li");
    li.innerText = currentSeat;
    main.appendChild(li);

    // Economoy

    const main2 = document.getElementById("seatEconomoy");
    const li2 = document.createElement("li");
    li2.innerText = "Economoy";
    main2.appendChild(li2);

    // Ticket Price

    const main3 = document.getElementById("ticketPrice");
    // const convertPerTicket = typeof parseInt(main3);
    // console.log(convertPerTicket);
    const li3 = document.createElement("li");
    li3.innerText = "550";
    main3.appendChild(li3);

    // Total Ticket Price
    // const totalCost = document.getElementById("totalCost").innerText;
    // const convertedTotalCost = parseInt(totalCost);
    //   console.log(convertedTotalCost);

    const taka = sum + 550;
    const taka2 = document.getElementById("totalCost");
    taka2.innerText = taka;
    sum = sum + taka;

    //
    const seatLeft = parseInt(document.getElementById("seat-left").innerText);
    const seats = seatLeft - 1;
    setInnerText("seat-left", seats);
    setInnerText("grandTotal", taka);

    // apply coupon

    const apply = document.getElementById("applyCoupon");
    const nextBtn = document.getElementById("nextBtn");
    apply.disabled = false;
    nextBtn.disabled = false;

    apply.addEventListener("click", function (e) {
      const coupon = document
        .getElementById("applyCoupon")
        .value.split(" ")
        .join("")
        .toUpperCase();
      // console.log(coupon);
      if (coupon === "NEW15") {
        const discount = taka * 0.15;
        const grandTotal = taka - discount;
        setInnerText("grandTotal", grandTotal);
      } else if (coupon === "COUPLE20") {
        const discount = taka * 0.2;
        const grandTotal = taka - discount;
        setInnerText("grandTotal", grandTotal);
      } else {
        alert("Invalid Coupon");
        return;
      }
    });
    // Coupon Card End
  });
}

// Seats Booked To all requirement part initialized!

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
