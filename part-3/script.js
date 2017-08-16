//display the modal and close it:
const bookButtons = document.querySelectorAll('.book-button')
const bookingInfo = document.getElementById('bookingModal')
const closeBookingInfo = document.querySelector('.close')

// temp table stuff
const bookedRoomNumber = document.getElementById('room-number')

bookButtons.forEach(function(bookButton){
  bookButton.addEventListener("click", () =>{
    let associatedRow = bookButton.parentNode.parentNode
    let associatedDataSet = associatedRow.children;
    let dataForBooking = [];
    // console.log(associatedData)
    for (let i = 0; i < associatedDataSet.length - 1; i++) {
      let associatedDataCell = associatedDataSet[i].innerHTML;
      dataForBooking.push(associatedDataCell)
    }
    // let associatedRoomNo = dataForBooking[0]
    // let associatedCapacity = dataForBooking[1]
    // let associatedPrice = dataForBooking[2]
    // console.log(dataForBooking)
    bookedRoomNumber.innerHTML = dataForBooking[0]
    bookingInfo.style.display = "block";
  })
})

closeBookingInfo.addEventListener("click", () => {
  bookingInfo.style.display = "none";
})
