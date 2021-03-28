import { CounterActionType,
         CounterAction
        } from '../api/actions/counterAction';

type CounterState = {
  count: number | any;
};

const initialState: CounterState = {
  count: 0,
};

export default function counterReducer(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case CounterActionType.INCREASE:
      return { count: state.count + 1 };
    case CounterActionType.DECREASE:
      return { count: state.count - 1 };
    case CounterActionType.INCREASE_BY:
      return { 
        ...state,
        count: state.count + action.payload
      };
    default:
      return state;
  }
}
