let sum = 550;
let seatCount = 0;
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



for (const addBuySeats of allButton) {
  addBuySeats.addEventListener("click", function (e) {
    seatCount = seatCount + 1;
    setInnerText("bookedSeats", seatCount);
  });
}

// SeatNumber A1 - B4

const seats = document.querySelectorAll(".btn");
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const currentSeat = e.target.outerText;
    seat.classList.add("bg-green-500");
    if (array.includes(currentSeat)) {
      alert("already selected");
      return
    } else{
      array.push(currentSeat);
    }
    if (array.length > 4) {
      e.target.setAttribute("disabled", true);
      alert("enough");
      seat.classList.add("#F7F7F8");
      return;
    }

    // Economy


    const li = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    li.innerText = currentSeat;
    const main = document.getElementById("seatOnThis");
    main.appendChild(li);

    li2.innerText = ["Economy"];
    const main2 = document.getElementById("seatEconomoy");
    main2.appendChild(li2);

    li3.innerText = ["550"];
    const main3 = document.getElementById("ticketPrice");
    main3.appendChild(li3);



    const taka = sum + 550;
    const taka2 = document.getElementById("totalCost");
    taka2.innerText = taka;
    sum = sum + taka;

    // const totalCost = document.getElementById('totalCost').innerText;
    
    // const convertedTotalCost = parseInt(totalCost);
    // const sum1 = convertedTotalCost + parseInt(sum);
    

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
        .getElementById("coupon")
        .value.split(" ")
        .join('')
        .toUpperCase();
      if (coupon === "NEW15"){
        const discount = taka * 0.15;
        const grandTotal = taka - discount;
        setInnerText("grandTotal", grandTotal);
      } else if(coupon === "COUPLE20"){
        const discount = taka * 0.2;
        const grandTotal = taka - discount;
        setInnerText("grandTotal", grandTotal);
      } else{
        alert("Invalid Coupon");
        return;
      }

    });
    

  });
}




// Seats Booked To all requirement part initialized!

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
