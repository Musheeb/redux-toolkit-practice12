import { useSelector, useDispatch } from "react-redux";
import { addQuote, resetQuote } from "./quotesSlices";

import { useRef, useState } from "react";

export default function Quotes() {
  // Used to read values from redux store state.
  const quote = useSelector((state) => state.quote);
  // Used to send (actions) to the redux store to trigger state updates.
  const dispatch = useDispatch();
  const [newQuote, setNewQuote] = useState([]);
  // Used to use the reference of any HTML element without re-rendering the component.
  const userInputRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    dispatch(resetQuote());
    setNewQuote([]);
    userInputRef.current?.focus();
  };

  function handleUserInput() {
    setNewQuote([]);
    dispatch(addQuote(newQuote));
    userInputRef.current?.focus();
  }

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
        ref={userInputRef}
        type="text"
        value={newQuote}
        onChange={(e) => setNewQuote(e.target.value)}
      />
      <button onClick={handleUserInput}>Add Quote</button>
      <button onClick={reset}>Reset Quote</button>
    </div>
  );
}
