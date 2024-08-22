import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  const increase5 = () => {
    dispatch({ type: "INCREMENT5", payload: { num: 5 } });
  };
  const decrease5 = () => {
    dispatch({ type: "DECREMENT5", payload: { num: 5 } });
  };

  return (
    <div className="App">
      <div className="btn-container">
        <h1>{count}</h1>
      </div>

      <div className="btn-container">
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
        <button onClick={increase5}>5 증가</button>
        <button onClick={decrease5}>5 감소</button>
      </div>
    </div>
  );
}

export default App;
