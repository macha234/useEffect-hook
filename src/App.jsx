import { useEffect, useState } from "react"
import Booking from "./components/Booking"
import "./index.css"
import { Link } from "react-router-dom"
import Fetch from "./pages/fetch"

function App() {
  const [guestName, setGuestName] = useState("")
  const [roomNumber, setRoomNumber] = useState("")
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")

  function onSubmit(event){
    event.preventDefault()

    const data = {
      id: Math.random(),
      guestName: guestName,
      roomNumber: roomNumber,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
    }

    const NewData = [...bookingList]

    NewData.push(data)

    setBookingList(NewData)
  }


  const [bookingList, setBookingList] = useState([])

  const [counterValue, setCounterValue] = useState(0)

  useEffect(() => {
   console.log("executed")
  }, [counterValue])



  return (
    <>
  <div>
    <h1>{counterValue}</h1>

    <button onClick={() => setCounterValue(counterValue + 1)}>
      Increment
      </button>
  </div>

    <Link to = "/">Home</Link>
    <br />
    <Link to = "/about">About</Link>
    <br />
    <Link to = "/fetch">Fetch</Link>

    <h1 className="title">BOOKING LISTS</h1>
    <div>
      <div className="wrapper">
      {bookingList.map(regestration =>(
        <Booking
        regestration={regestration}
        bookingList={bookingList}
        setBookingList={setBookingList} />
      ))}
      </div>

      <div>
        <h3>BOOK A SPOT</h3>    
      </div>
      <form className="imputs" onSubmit={onSubmit}>
      <input type="text" value={guestName}  onChange={(event) => setGuestName(event.target.value)} placeholder="Guest Name"/> 
      <br />
      <input type="text" value={roomNumber} onChange={(event) => setRoomNumber(event.target.value)} placeholder="Room Number"/>
      <br />
      <input type="text" value={checkInDate} onChange={(event) => setCheckInDate(event.target.value)} placeholder="Check in date"/>
      <br />
      <input type="text" value={checkOutDate} onChange={(event) => setCheckOutDate(event.target.value)} placeholder="Check out date"/>

      <button>Book</button>  
    </form>
   <Fetch />
    </div>
      
    </>
  )
}

export default App
