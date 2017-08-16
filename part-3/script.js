const bookButtons = document.querySelectorAll('.book-button')
const bookingInfo = document.getElementById('bookingModal')
const bookedRoomNumber = document.getElementById('room-number')
const bookedRoomPrice = document.getElementById('room-price')
const bookedTotalCost = document.getElementById('total-cost')

bookButtons.forEach((bookButton) =>{
  bookButton.addEventListener("click", () =>{
    let associatedRow = bookButton.parentNode.parentNode
    let associatedDataSet = associatedRow.children;
    let dataForBooking = [];
    for (let i = 0; i < associatedDataSet.length - 1; i++) {
      let associatedDataCell = associatedDataSet[i].innerHTML;
      dataForBooking.push(associatedDataCell)
    }
    bookedRoomNumber.innerHTML = dataForBooking[0]
    bookedRoomPrice.innerHTML = dataForBooking[2]
    bookedTotalCost.innerHTML = dataForBooking[2]

    bookingInfo.style.display = "block";

    let selectedNights = document.getElementById("selectedNights")
    selectedNights.addEventListener("change", () => {
      bookedTotalCost.innerHTML = '$' + (selectedNights.value * dataForBooking[2].substring(1)).toFixed(2);
    })
  })
})

const closeBookingInfo = document.querySelector('.close')

closeBookingInfo.addEventListener("click", () => {
  bookingInfo.style.display = "none";
})
