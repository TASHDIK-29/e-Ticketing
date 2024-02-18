let seatCount = 0;
function countSelectedSeats(){
    seatCount ++ ;
    const element = document.getElementById('selected-seat');
    element.innerText = seatCount ;
    console.log(element.innerText);
    remainingSeats();
}

function remainingSeats(){
    const element = document.getElementById('remaining-seat');

    const booked = parseInt(seatCount);
    const available = parseInt(40);
    
    element.innerText = available - booked ;
}