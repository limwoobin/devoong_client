import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { increase , decrease , increaseBy } from '../reducers/counterReducer';
import Counter from '../components/views/Counter';

function CounterContainer() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;