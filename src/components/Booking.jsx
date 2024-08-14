 function Booking({regestration, bookingList, setBookingList}){

    function checkOut(id){
        const newBookingList = bookingList.filter(regestration => regestration.id !== id)
        setBookingList(newBookingList)
    }
    return(
        <div className="booking">
            <h1>{regestration.guestName}</h1>

            <ul>
                <li>RoomNumber: {regestration.roomNumber}</li>

                <li>CheckInDate: {regestration.checkInDate}</li>

                <li>CheckOutDate: {regestration.CheckOutDate}</li>
                
            </ul>

            <div>
                <button className="button" onClick={()=>checkOut(regestration.id)}>Check Out</button>
            </div>
        </div>
    )
}
export default Booking