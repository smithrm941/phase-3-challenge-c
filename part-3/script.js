const bookButtons = document.querySelectorAll('.book-button')
const bookingInfo = document.getElementById('bookingModal')
const closeBookingInfo = document.querySelector('.close')

bookButtons.forEach(function(bookButton) {
  bookButton.addEventListener("click", () =>{
    bookingInfo.style.display = "block";
  })
})

closeBookingInfo.addEventListener("click", () => {
  bookingInfo.style.display = "none";
})
