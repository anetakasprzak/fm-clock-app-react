import { useEffect, useState } from "react";
import "./QuotesComponent.css";
import iconRefresh from "../../assets/desktop/icon-refresh.svg";

const QuotesComponent = () => {
  const [quote, setQuote] = useState([]);

  async function fetchQuote() {
    try {
      const res = await fetch(
        `https://programming-quotesapi.vercel.app/api/random`
      );
      const quote = await res.json();

      setQuote(quote);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(function () {
    fetchQuote();
  }, []);

  return (
    <div className="quote__component--box">
      <div className="quote__text-box">
        <p className="quote">&quot;{quote.quote}&quot;</p>
        <p className="quote__author">{quote.author}</p>
      </div>
      <button className="btn__refresh" onClick={fetchQuote}>
        <img src={iconRefresh} alt="refresh icon" />
      </button>
    </div>
  );
};

export default QuotesComponent;
