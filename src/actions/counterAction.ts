export const CounterActionType = {
  INCREASE : 'counter/INCREASE' as const,
  DECREASE : 'counter/DECREASE' as const,
  INCREASE_BY : 'counter/INCREASE_BY' as const
}

export const increase = () => ({ type: CounterActionType.INCREASE });
export const decrease = () => ({ type: CounterActionType.DECREASE });
export const increaseBy = () => ({
  type: CounterActionType.INCREASE_BY,
  payload: 5
});

export type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
