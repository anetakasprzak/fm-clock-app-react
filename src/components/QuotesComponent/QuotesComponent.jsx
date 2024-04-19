import { useEffect, useState } from "react";
import "./QuotesComponent.css";
import iconRefresh from "../../assets/desktop/icon-refresh.svg";

const QuotesComponent = () => {
  const [quote, setQuote] = useState([]);

  async function fetchQuote() {
    try {
      const res = await fetch(`https://api.quotable.io/quotes/random`);
      const quote = await res.json();

      setQuote(quote.at(0));

      console.log({ quote });
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
        <p className="quote">&apos;{quote.content}&apos;</p>
        <p className="quote__author">{quote.author}</p>
      </div>
      <button className="btn__refresh" onClick={fetchQuote}>
        <img src={iconRefresh} alt="refresh icon" width={40} />
      </button>
    </div>
  );
};

export default QuotesComponent;
