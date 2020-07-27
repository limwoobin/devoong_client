import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { increase , decrease , increaseBy } from '../actions/counterAction';
import Counter from '../components/views/Counter';

export default function CounterContainer() {
  const count: number = useSelector((state: RootState) => state.counterReducer.count);

  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = () => {
    dispatch(increaseBy());
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
