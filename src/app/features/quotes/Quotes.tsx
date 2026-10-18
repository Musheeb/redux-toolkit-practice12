import { useSelector, useDispatch } from "react-redux";
import { addQuote, resetQuote } from "./quotesSlices";

import { useState } from "react";

export default function Quotes() {
  // Used to read values from redux store state.
  const quote = useSelector((state) => state.quote);
  // Used to send (actions) to the redux store to trigger state updates.
  const dispatch = useDispatch();
  const [newQuote, setNewQuote] = useState([]);

  const reset = () => {
    dispatch(resetQuote());
  };

  return (
    <div>
      {quote.length ? (
        quote.map((quote: string) => {
          return <h1 key={quote}>{quote}</h1>;
        })
      ) : (
        <h1>No quote found...</h1>
      )}
      <input
        type="text"
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
      />
      <button onClick={() => dispatch(addQuote(newQuote))}>Add Quote</button>
      <button onClick={reset}>Reset Quote</button>
    </div>
  );
}
