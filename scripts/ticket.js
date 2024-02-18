let countSelect = 0;

const seatContainer = document.getElementById('seat-container');

const seatElements = seatContainer.querySelectorAll('button');

for (const element of seatElements) {

    element.addEventListener('click', function () {
        countSelect++;

        // Enable the Final Button
        document.getElementById('final-btn').disabled = false ; 

        if (countSelect <= 4) {
            element.classList.add('bg-[#1DD100]');
            countSelectedSeats();
            addToCart(element.innerText);


            element.disabled = true;
        }
        else {
            alert('You can purchase maximum four tickets !');
        }

    })
}

function applyCoupon(){
    const element = document.getElementById('coupon-field');
    const elementText = element.value ;

    const actualElementText = elementText.split(' ').join('').toUpperCase();
    
    if(actualElementText === 'NEW15')
    {
        document.getElementById('grand-price').innerText = '1870' ;
        element.classList.add('hidden');
        document.getElementById('apply-btn').classList.add('hidden');
    }

    else if(actualElementText === 'COUPLE20')
    {
        document.getElementById('grand-price').innerText = '1760' ;
        element.classList.add('hidden');
        document.getElementById('apply-btn').classList.add('hidden');

    }

    else{
        alert('Invalid Coupon !');
    }
    

}


