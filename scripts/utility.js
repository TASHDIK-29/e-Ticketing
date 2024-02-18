let seatCount = 0;

function countSelectedSeats() {
    seatCount++;
    const element = document.getElementById('selected-seat');
    element.innerText = seatCount;

    // coupon Button
    const element2 = document.getElementById('apply-btn');
    
    if(seatCount === 4)
    {
        element2.disabled = false ;
        element2.classList.remove('bg-slate-400');
        element2.classList.add('bg-[#1DD100]');
    }

    remainingSeats();
    
}

function remainingSeats() {
    const element = document.getElementById('remaining-seat');

    const booked = parseInt(seatCount);
    const available = parseInt(40);

    element.innerText = available - booked;
    setTotalPrice(booked);
    setGrandPrice(booked);
}

function addToCart(elementText) {
    const element = document.getElementById('add-to-cart');

    // Create child div
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `
    <h1>elementText</h1>
    <h2>Economy</h2>
    <h3>550</h3>

    `
    //newDiv.classList.add('flex justify-between');
    element.append(newDiv);
    newDiv.classList.add('flex');
    newDiv.classList.add('justify-between');

    
    newDiv.querySelector('h1').innerText = elementText ;
    newDiv.querySelector('h1').classList.add('inter');
    newDiv.querySelector('h2').classList.add('inter');
    newDiv.querySelector('h3').classList.add('inter');
    
}

function setTotalPrice(booked){
    const element = document.getElementById('total-price');
    element.classList.add('inter');
    element.innerText = booked * 550 ;
}

function setGrandPrice(booked){
    const element = document.getElementById('grand-price');
    element.classList.add('inter');
    element.innerText = booked * 550 ;
}