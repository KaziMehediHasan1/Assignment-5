const allButton = document.getElementsByClassName("btn");

// Seats less Counting

let count = 8;
for (const btn of allButton) {
  btn.addEventListener("click", function (e) {
    count = count - 1;
    setInnerText("totalSeats", count);
  });
}

// customer ticket buying counting number

let seatCount = 0;
for (const addBuySeats of allButton) {
  addBuySeats.addEventListener("click", function (e) {
    seatCount = seatCount + 1;
    setInnerText("bookedSeats", seatCount);
  });
  
}

// SeatNumber A1 - B4
const economoyName = ('Economoy');
const seats = document.querySelectorAll(".btn");
for (const seat of seats) {
  seat.addEventListener("click", function (e) {
    const currentSeat = e.target.textContent;
    // console.log(currentSeat);
    seat.classList.add('bg-green-500');
    const main = document.getElementById('seatOnThis');
    const li = document.createElement("li")
    li.innerText = currentSeat;
    main.appendChild(li);

   

    // Economoy

    
    const main2 = document.getElementById('seatEconomoy');
    const li2 = document.createElement("li")
    li2.innerText = ('Economoy');
    main2.appendChild(li2);

    // Ticket Price 

    const main3 = document.getElementById('ticketPrice');
    const li3 = document.createElement("li")
    li3.innerText = ('550');
    main3.appendChild(li3);

  });
};



// Connected Seat Serial
