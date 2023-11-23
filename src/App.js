import { useState } from "react"
import quotes from "./assets/quotes.json"
import { FaTwitter, FaQuoteLeft } from "react-icons/fa"
import "./App.css"

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 255)
  const green = Math.floor(Math.random() * 255)
  const blue = Math.floor(Math.random() * 255)

  return `rgb(${red}, ${green}, ${blue})`
}

const transition = "all 2s"

function App() {
  const [quote, setQuote] = useState(getRandomQuote())
  const [color, setColor] = useState(getRandomColor())

  const changeQuoteHandler = () => {
    setQuote(getRandomQuote())
    setColor(getRandomColor())
  }

  return (
    <div className="background" style={{ backgroundColor: color, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: color, transition }}>
          <h2 id="text">
            <FaQuoteLeft size="25" style={{ marginRight: "10px" }} />
            {quote.quote}
          </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
            title="Tweet this quote!"
            style={{ backgroundColor: color, marginRight: "10px", transition }}
          >
            <FaTwitter
              color="white"
              style={{ backgroundColor: color, transition }}
            />
          </a>
          <button
            id="new-quote"
            onClick={changeQuoteHandler}
            style={{ backgroundColor: color, transition }}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
