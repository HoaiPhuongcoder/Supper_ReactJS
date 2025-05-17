import { type ActionType } from "./actions";

export const initialState = { age: 26 };

export const init = (initialState: { age: number }) => {
  return { ...initialState, age: initialState.age + 4 };
};

const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "increase":
      return { ...state, age: state.age + 1 };
    case "decrease":
      return { ...state, age: state.age - 1 };
    case "increaseX":
      return { ...state, age: state.age + action.payload };
    default:
      throw new Error("Unknown action type");
  }
};

export const log = () => {
  return (state: typeof initialState, action: ActionType) => {
    const nextState = reducer(state, action);
    console.log(nextState);
    return nextState;
  };
};

export default reducer;
