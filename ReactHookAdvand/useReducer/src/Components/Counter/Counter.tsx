import { useReducer } from "react";
import {
  decreaseAgeAction,
  increaseAgeAction,
  increaseXAgeAction,
} from "../../reducer/actions";
import { init, initialState, log } from "../../reducer/reducer";

function Counter() {
  const [state, dispatch] = useReducer(log(), initialState, init);

  const increaseAge = () => {
    dispatch(increaseAgeAction());
  };

  const decreaseAge = () => {
    dispatch(decreaseAgeAction());
  };

  const increaseXAge = (value: number) => {
    dispatch(increaseXAgeAction(value));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold ">Age: {state.age}</h1>
      <button
        onClick={increaseAge}
        className="mt-2.5 rounded bg-blue-500 text-white p-2"
      >
        Increase Age
      </button>
      <button
        className=" mt-2.5 rounded bg-red-500 text-white p-2"
        onClick={decreaseAge}
      >
        Decrease Age
      </button>
      <button
        className=" mt-2.5 rounded bg-green-500 text-white p-2"
        onClick={() => increaseXAge(5)}
      >
        Increase Age by 5
      </button>
    </div>
  );
}

export default Counter;
