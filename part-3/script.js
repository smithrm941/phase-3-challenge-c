//display the modal and close it:
const bookButtons = document.querySelectorAll('.book-button')
const bookingInfo = document.getElementById('bookingModal')
const closeBookingInfo = document.querySelector('.close')

// temp table stuff
const roomsTable = document.getElementById('room-table')

bookButtons.forEach(function(bookButton){
  bookButton.addEventListener("click", () =>{
    bookingInfo.style.display = "block";
    let tableRow = bookButton.parentNode.parentNode
    console.log(tableRow)
  })
})

closeBookingInfo.addEventListener("click", () => {
  bookingInfo.style.display = "none";
})
