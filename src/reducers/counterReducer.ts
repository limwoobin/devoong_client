import { INCREASE, 
         DECREASE,
         INCREASE_BY,
         CounterAction
        } from '../actions/counterAction';

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0
};

export default function counterReducer(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}
