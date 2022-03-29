import quotes from "./quotes.json"
import React, {useState} from 'react';
const QuoteBox = () =>{
    
    const [indexQuote, setIndexQuote] = useState(Math.floor(Math.random() * 50))

    const changeQuote = () =>{
        setIndexQuote(Math.floor(Math.random() * 50))
        let App = document.querySelector(".App-header") 
        App.style.backgroundColor = 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    }

    return (
        <div className="card">
            <div className="quote">
                <h2>"{quotes.quotes[indexQuote].quote}"</h2>
                <h4>-{quotes.quotes[indexQuote].author}</h4>
            </div>
            <button className="btn-changeP" onClick={changeQuote}>Change Quote</button>
        </div>
    )
}

export default QuoteBox