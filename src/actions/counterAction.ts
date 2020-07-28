const CounterActionType = {
  INCREASE : 'counter/INCREASE' as const,
  DECREASE : 'counter/DECREASE' as const,
  INCREASE_BY : 'counter/INCREASE_BY' as const
}

const increase = () => ({ type: CounterActionType.INCREASE });
const decrease = () => ({ type: CounterActionType.DECREASE });
const increaseBy = () => ({
  type: CounterActionType.INCREASE_BY,
  payload: 5
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;


export {
  CounterActionType,
  increase,
  decrease,
  increaseBy,
  CounterAction
};
