const seatContainer = document.getElementById('seat-container');

const seatElements = seatContainer.querySelectorAll('button');

for(const element of seatElements){
    element.addEventListener('click', function(){
        element.classList.add('bg-[#1DD100]');
        countSelectedSeats(); 
        
    })
}
