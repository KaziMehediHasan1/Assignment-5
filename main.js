const allButton = document.getElementsByClassName('btn');

// Seats less Counting

let count = 8;
for(const btn of allButton){
  btn.addEventListener('click', function(e){
    count = count - 1;
    setInnerText('totalSeats', count);
  });
};


// customer ticket buy counting number 

let seatCount = 0;
for (const addBuySeats of allButton){
  addBuySeats.addEventListener('click',function(e){
    seatCount = seatCount + 1;
    setInnerText('bookedSeats', seatCount);
  });

};




// SeatNumber A1 - B4

const seats = document.querySelectorAll('.btn')
for(const seat of seats){
 seat.addEventListener('click', function(e){
 console.log(e.target.textContent);
  
});
  
}

function seatBgColor(){
 const color = document.querySelectorAll('.btn');
 color.
}

// Connected Seat Serial



