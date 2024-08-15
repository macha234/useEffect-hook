import axios from "axios"
import { useEffect, useState } from "react"

function Fetch(){
    const [quotes, setQuotes] = useState([])

    async function fetchQuotes() {
        const response = await axios.get("https://type.fit/api/quotes")

        setQuotes(response.data)
    }

    useEffect(() => {
        fetchQuotes()
    
    },[])

    console.log(quotes)

    return(
       <>
    <div>
        {quotes.map((quote) => (
            <div>
                <h1>Author: {quote.author}</h1>
                <p>Text: {quote.text}</p>
            </div>
        ))}
    </div>
       </>
    )
}

export default Fetch