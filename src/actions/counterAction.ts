const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;


export {
  INCREASE,
  DECREASE,
  INCREASE_BY,
  increase,
  decrease,
  increaseBy,
  CounterAction
};
