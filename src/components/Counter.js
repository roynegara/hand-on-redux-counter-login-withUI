import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Counter = () => {
  const [show, setShow] = useState(true);

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "counter/increase", payload: 1 });
  };

  const decrementHandler = () => {
    dispatch({ type: "counter/decrease", payload: 1 });
  };

  const toggleCounterHandler = () => {
    setShow((showContent) => !showContent);
  };

  const inscrementTenHandler = () => {
    dispatch({ type: "counter/increase", payload: 10 });
  };

  const resetHandler = () => {
    dispatch({ type: "counter/reset" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={inscrementTenHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import React, { useState } from "react";
// import classes from "./Counter.module.css";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const [show, setShow] = useState(true);

//   const incrementHandler = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   };

//   const decrementHandler = () => {
//     setCounter((prevCounter) => prevCounter - 1);
//   };

//   const toggleCounterHandler = () => {
//     setShow((prevShow) => !prevShow);
//   };

//   const inscrementTenHandler = () => {
//     setCounter((prevCounter) => prevCounter + 10);
//   }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button onClick={incrementHandler}>Increment</button>
//         <button onClick={inscrementTenHandler}>Increase by 10</button>
//         <button onClick={decrementHandler}>Decrement</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;

// import classes from './Counter.module.css'

// const Counter = () => {
//   const counter = 0
//   const show = true

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {show && <div className={classes.value}>{counter}</div>}
//       <div>
//         <button>Increment</button>
//         <button>Increase by 10</button>
//         <button>Decrement</button>
//       </div>
//       <button>Toggle Counter</button>
//     </main>
//   )
// }

// export default Counter
