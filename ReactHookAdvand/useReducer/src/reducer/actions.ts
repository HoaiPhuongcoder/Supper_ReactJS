export type ActionType =
  | IncreaseAgeAction
  | DecreaseAgeAction
  | IncreaseXAgeAction;

type IncreaseAgeAction = {
  type: "increase";
};
type DecreaseAgeAction = {
  type: "decrease";
};
type IncreaseXAgeAction = {
  type: "increaseX";
  payload: number;
};

const increaseAgeAction = () => {
  return { type: "increase" } as IncreaseAgeAction;
};

const decreaseAgeAction = () => {
  return { type: "decrease" } as DecreaseAgeAction;
};

const increaseXAgeAction = (x: number) => {
  return { type: "increaseX", payload: x } as IncreaseXAgeAction;
};
export { increaseAgeAction, decreaseAgeAction, increaseXAgeAction };
